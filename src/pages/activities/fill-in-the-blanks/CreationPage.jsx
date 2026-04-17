import React, { useState, useEffect } from 'react';
import FillInTheBlank from '../../../components/activities/fill-in-the-blank';
import ResizableLayout from '../../../components/activities/commons/ResizableLayout';
import AccessibleFormField from '../../../components/activities/commons/AccessibleFormField';
import LoadFromBase64 from '../../../components/activities/commons/LoadFromBase64';
import { unicodeToBase64 } from '../../../utils';

function FillInBlankCreationPage() {
  const [template, setTemplate] = useState('');
  const [answers, setAnswers] = useState(['']);
  const [hint, setHint] = useState('');
  const [embedCode, setEmbedCode] = useState('');
  const [instruction, setInstruction] = useState('Lengkapi kalimat berikut dengan kata yang tepat.');
  const [errors, setErrors] = useState({});

  const getTotalAnswerCount = () => answers.filter((a) => {
    if (Array.isArray(a)) return a.length > 0;
    return !!a;
  }).length;

  const validateTemplate = (value) => {
    const placeholders = value.match(/\{(\d+)\}/g) || [];
    const numbers = placeholders.map((p) => parseInt(p.match(/\d+/)[0]));
    const maxNumber = Math.max(...numbers, 0);

    if (placeholders.length === 0 && value.trim()) {
      return 'Template harus mengandung setidaknya satu placeholder seperti {1}';
    }

    if (maxNumber > getTotalAnswerCount()) {
      return `Template menggunakan placeholder {${maxNumber}} tetapi hanya ada ${getTotalAnswerCount()} jawaban`;
    }

    return '';
  };

  const validateAnswers = () => {
    let emptyPlaceholders = 0;
    answers.forEach((answer) => {
      if (Array.isArray(answer)) {
        const hasValidAnswer = answer.some((a) => a.trim());
        if (!hasValidAnswer) emptyPlaceholders++;
      } else if (!answer.trim()) {
        emptyPlaceholders++;
      }
    });
    if (emptyPlaceholders > 0) {
      return `${emptyPlaceholders} jawaban masih kosong`;
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
    if (Array.isArray(newAnswers[index])) {
      newAnswers[index] = [...newAnswers[index]];
      newAnswers[index][0] = value;
    } else {
      newAnswers[index] = value;
    }
    setAnswers(newAnswers);
  };

  const addAlternative = (index) => {
    const newAnswers = [...answers];
    const current = newAnswers[index];
    if (Array.isArray(current)) {
      newAnswers[index] = [...current, ''];
    } else {
      newAnswers[index] = [current, ''];
    }
    setAnswers(newAnswers);
  };

  const removeAlternative = (index, altIndex) => {
    const newAnswers = [...answers];
    const current = newAnswers[index];
    if (Array.isArray(current)) {
      const filtered = current.filter((_, i) => i !== altIndex);
      newAnswers[index] = filtered.length === 1 ? filtered[0] : filtered;
    }
    setAnswers(newAnswers);
  };

  const updateAlternative = (index, altIndex, value) => {
    const newAnswers = [...answers];
    if (Array.isArray(newAnswers[index])) {
      newAnswers[index] = [...newAnswers[index]];
      newAnswers[index][altIndex] = value;
    }
    setAnswers(newAnswers);
  };

  const handleLoadFromBase64 = (data) => {
    if (data.template) setTemplate(data.template);
    if (data.answers) {
      const isValidFormat = data.answers.every((answer) => {
        if (typeof answer === 'string') return true;
        if (Array.isArray(answer)) return answer.every((a) => typeof a === 'string');
        return false;
      });
      if (isValidFormat) {
        setAnswers(data.answers.length > 0 ? data.answers : ['']);
      }
    }
    if (data.hint) setHint(data.hint);
    if (data.instruction) setInstruction(data.instruction);
  };

  useEffect(() => {
    const newErrors = {};

    if (template) {
      const templateError = validateTemplate(template);
      if (templateError) newErrors.template = templateError;
    }

    if (answers.some((answer) => {
      if (Array.isArray(answer)) return answer.some((a) => a.trim());
      return answer.trim();
    })) {
      const answersError = validateAnswers();
      if (answersError) newErrors.answers = answersError;
    }

    setErrors(newErrors);
  }, [template, answers]);

  const processAnswersForExport = () => answers.map((answer) => {
    if (Array.isArray(answer)) {
      return answer.filter((a) => a.trim());
    }
    return answer.trim();
  }).filter((answer) => {
    if (Array.isArray(answer)) return answer.length > 0;
    return !!answer;
  });

  const generateEmbedCode = () => {
    if (Object.keys(errors).length > 0) {
      alert('Harap perbaiki kesalahan sebelum generate embed code');
      return;
    }

    const rawData = {
      template,
      answers: processAnswersForExport(),
      hint,
      storageKey: `fill-in-the-blank-${+new Date()}`,
      instruction,
    };

    const data = unicodeToBase64(JSON.stringify(rawData));
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
          showMarkdownToolbar
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
              required
            >
              <div className="form-field__answer-group">
                {Array.isArray(answer) ? (
                  <div className="form-field__alternatives">
                    {answer.map((alt, altIndex) => (
                      <div key={altIndex} className="form-field__input-with-button">
                        <input
                          type="text"
                          id={`answer-${index}-alt-${altIndex}`}
                          className="form-field__input"
                          value={alt}
                          onChange={(e) => updateAlternative(index, altIndex, e.target.value)}
                          placeholder={`Alternative answer ${altIndex + 1}`}
                          aria-label={`Alternative answer ${altIndex + 1} for placeholder ${index + 1}`}
                        />
                        {altIndex > 0 && (
                          <button
                            type="button"
                            onClick={() => removeAlternative(index, altIndex)}
                            className="form-field__button form-field__button--secondary"
                            aria-label={`Remove alternative ${altIndex + 1}`}
                          >
                            Remove
                          </button>
                        )}
                      </div>
                    ))}
                    <button
                      type="button"
                      onClick={() => addAlternative(index)}
                      className="form-field__button form-field__button--secondary"
                    >
                      + Add Alternative
                    </button>
                  </div>
                ) : (
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
                    <button
                      type="button"
                      onClick={() => addAlternative(index)}
                      className="form-field__button form-field__button--secondary"
                      aria-label={`Add alternative answer for placeholder ${index + 1}`}
                    >
                      + Add Alternative
                    </button>
                  </div>
                )}
                {answers.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeAnswer(index)}
                    className="form-field__button form-field__button--danger"
                    aria-label={`Remove answer ${index + 1}`}
                  >
                    Remove Answer
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
          answers={processAnswersForExport()}
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
