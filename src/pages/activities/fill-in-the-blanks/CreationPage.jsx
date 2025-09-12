import React, { useState, useEffect } from 'react';
import FillInTheBlank from '../../../components/activities/fill-in-the-blank';
import ResizableLayout from '../../../components/activities/commons/ResizableLayout';
import AccessibleFormField from '../../../components/activities/commons/AccessibleFormField';
import LoadFromBase64 from '../../../components/activities/commons/LoadFromBase64';

function FillInBlankCreationPage() {
  const [template, setTemplate] = useState('');
  const [answers, setAnswers] = useState(['']);
  const [hint, setHint] = useState('');
  const [embedCode, setEmbedCode] = useState('');
  const [instruction, setInstruction] = useState('Lengkapi kalimat berikut dengan kata yang tepat.');
  const [errors, setErrors] = useState({});

  const validateTemplate = (value) => {
    const placeholders = value.match(/\{(\d+)\}/g) || [];
    const numbers = placeholders.map(p => parseInt(p.match(/\d+/)[0]));
    const maxNumber = Math.max(...numbers, 0);
    
    if (placeholders.length === 0 && value.trim()) {
      return 'Template harus mengandung setidaknya satu placeholder seperti {1}';
    }
    
    if (maxNumber > answers.length) {
      return `Template menggunakan placeholder {${maxNumber}} tetapi hanya ada ${answers.length} jawaban`;
    }
    
    return '';
  };

  const validateAnswers = () => {
    const emptyAnswers = answers.filter(answer => !answer.trim()).length;
    if (emptyAnswers > 0) {
      return `${emptyAnswers} jawaban masih kosong`;
    }
    return '';
  };

  const addAnswer = () => {
    setAnswers([...answers, '']);
  };

  const removeAnswer = (index) => {
    const newAnswers = answers.filter((_, i) => i !== index);
    setAnswers(newAnswers);
    
    // Update template placeholders
    let newTemplate = template;
    for (let i = index + 1; i <= answers.length; i++) {
      newTemplate = newTemplate.replace(new RegExp(`\\{${i}\\}`, 'g'), `{${i - 1}}`);
    }
    setTemplate(newTemplate);
  };

  const updateAnswer = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const handleLoadFromBase64 = (data) => {
    if (data.template) setTemplate(data.template);
    if (data.answers) setAnswers(data.answers.length > 0 ? data.answers : ['']);
    if (data.hint) setHint(data.hint);
    if (data.instruction) setInstruction(data.instruction);
  };

  useEffect(() => {
    const newErrors = {};
    
    if (template) {
      const templateError = validateTemplate(template);
      if (templateError) newErrors.template = templateError;
    }
    
    if (answers.some(answer => answer.trim())) {
      const answersError = validateAnswers();
      if (answersError) newErrors.answers = answersError;
    }
    
    setErrors(newErrors);
  }, [template, answers]);

  const generateEmbedCode = () => {
    if (Object.keys(errors).length > 0) {
      alert('Harap perbaiki kesalahan sebelum generate embed code');
      return;
    }

    const rawData = {
      template,
      answers: answers.filter(answer => answer.trim()),
      hint,
      storageKey: `fill-in-the-blank-${+new Date()}`,
      instruction,
    };

    const data = btoa(JSON.stringify(rawData));
    const code = `<iframe src="${window.location.protocol}//${window.location.host}/activities/fill-in-the-blank?data=${encodeURIComponent(data)}" width="870" height="400" title="Fill in the Blank Activity"></iframe>`;
    setEmbedCode(code);
  };

  const formPanel = (
    <div className="creation-form">
      <header>
        <h1>Generate Fill in the Blank Activity</h1>
        <p>Buat aktivitas isian kosong interaktif untuk pembelajaran</p>
      </header>

      <LoadFromBase64 
        onLoad={handleLoadFromBase64} 
        activityType="fill-in-the-blank"
      />

      <form onSubmit={(e) => e.preventDefault()}>
        <AccessibleFormField
          id="template"
          label="Template Text"
          type="textarea"
          value={template}
          onChange={(e) => setTemplate(e.target.value)}
          placeholder="Enter text with {1}, {2}, etc. for blanks"
          helpText="Gunakan {1}, {2}, dll. untuk menandai tempat kosong yang harus diisi. Mendukung Markdown formatting."
          error={errors.template}
          required
          rows={4}
          showMarkdownToolbar={true}
        />

        <fieldset>
          <legend>Answers</legend>
          {errors.answers && (
            <div className="form-field__error" role="alert">
              {errors.answers}
            </div>
          )}
          
          {answers.map((answer, index) => (
            <AccessibleFormField
              key={index}
              id={`answer-${index}`}
              label={`Answer for {${index + 1}}`}
              value={answer}
              onChange={(e) => updateAnswer(index, e.target.value)}
              placeholder={`Enter answer ${index + 1}`}
              required
            >
              <div className="form-field__input-with-button">
                <input
                  type="text"
                  id={`answer-${index}`}
                  className="form-field__input"
                  value={answer}
                  onChange={(e) => updateAnswer(index, e.target.value)}
                  placeholder={`Enter answer ${index + 1}`}
                  required
                  aria-label={`Answer for placeholder ${index + 1}`}
                />
                {answers.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeAnswer(index)}
                    className="form-field__button form-field__button--secondary"
                    aria-label={`Remove answer ${index + 1}`}
                  >
                    Remove
                  </button>
                )}
              </div>
            </AccessibleFormField>
          ))}
        </fieldset>

        <AccessibleFormField
          id="hint"
          label="Hint"
          type="textarea"
          value={hint}
          onChange={(e) => setHint(e.target.value)}
          placeholder="Enter hint for when user makes 3 mistakes"
          helpText="Petunjuk ini akan muncul setelah siswa salah 3 kali"
          rows={3}
        />

        <AccessibleFormField
          id="instruction"
          label="Instruksi"
          value={instruction}
          onChange={(e) => setInstruction(e.target.value)}
          placeholder="Masukkan instruksi untuk siswa"
          required
        />

        <div className="form-actions">
          <button 
            type="button" 
            onClick={addAnswer} 
            className="form-field__button form-field__button--primary"
            aria-label="Add new answer field"
          >
            Add New Answer
          </button>
          
          <button 
            type="button" 
            onClick={generateEmbedCode} 
            className="form-field__button form-field__button--primary"
            disabled={Object.keys(errors).length > 0}
            aria-describedby="generate-help"
          >
            Generate Embed Code
          </button>
          <div id="generate-help" className="form-field__help">
            Pastikan semua field sudah diisi dengan benar
          </div>
        </div>

        <AccessibleFormField
          id="embed-code"
          label="Embed Code"
          type="textarea"
          value={embedCode}
          readOnly
          placeholder="Embed code akan muncul di sini setelah generate"
          helpText="Salin kode ini untuk menyematkan aktivitas di halaman web"
          rows={4}
        />
      </form>
    </div>
  );

  const previewPanel = (
    <div className="creation-preview">
      <header>
        <h2>Preview</h2>
        <p>Pratinjau aktivitas yang akan dibuat</p>
      </header>
      
      <div role="region" aria-label="Activity preview">
        <FillInTheBlank
          template={template}
          answers={answers.filter(answer => answer.trim())}
          hint={hint}
          instructionText={instruction}
        />
      </div>
    </div>
  );

  return (
    <ResizableLayout 
      leftPanel={formPanel} 
      rightPanel={previewPanel}
      initialLeftWidth={45}
    />
  );
}

export default FillInBlankCreationPage;
