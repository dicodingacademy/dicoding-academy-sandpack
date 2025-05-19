/* eslint-disable react/no-array-index-key,jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import FillInTheBlank from '../../../components/activities/fill-in-the-blank';

function FillInBlankCreationPage() {
  const [template, setTemplate] = useState('');
  const [answers, setAnswers] = useState(['']);
  const [hint, setHint] = useState('');
  const [embedCode, setEmbedCode] = useState('');
  const [instruction, setInstruction] = useState('Lengkapi kalimat berikut dengan kata yang tepat.');

  const addAnswer = () => {
    setAnswers([...answers, '']);
  };

  const removeAnswer = (index) => {
    setAnswers(answers.filter((_, i) => i !== index));
    // Update template placeholders
    const newTemplate = template.replace(`{${index + 1}}`, `{${index}}`);
    setTemplate(newTemplate);
  };

  const updateAnswer = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  useEffect(() => {
    // Only update preview if we have valid data
    if (template && answers.some((answer) => answer.trim())) {
      setTemplate(template);
      setAnswers(answers.filter((answer) => answer.trim()));
      setHint(hint);
    }
  }, []);

  const generateEmbedCode = () => {
    const rawData = {
      template,
      answers,
      hint,
      storageKey: `fill-in-the-blank-${+new Date()}`,
      instruction,
    };

    const data = btoa(JSON.stringify(rawData));
    const code = `<iframe src="${window.location.protocol}//${window.location.host}/activities/fill-in-the-blank?data=${encodeURIComponent(data)}" width="870" height="400"></iframe>`;
    setEmbedCode(code);
  };

  return (
    <div className="creation-container">
      <div className="creation-form">
        <h2>Generate Fill in the Blank Activity</h2>
        <div className="template-form">
          <div className="input-group">
            <label htmlFor="template">Template Text:</label>
            <div className="template-help">
              Use
              {' '}
              {'{1}'}
              ,
              {' '}
              {'{2}'}
              , etc. for blank spaces
            </div>
            <textarea
              id="template"
              value={template}
              onChange={(e) => setTemplate(e.target.value)}
              placeholder="Enter text with {1}, {2}, etc. for blanks"
              rows={4}
            />
          </div>

          <div className="answers-form">
            <h3>Answers</h3>
            {answers.map((answer, index) => (
              <div key={index} className="input-group">
                <label htmlFor={`answer-${index}`}>
                  Answer for
                  {' '}
                  {`{${index + 1}}`}
                  :
                </label>
                <div className="input-with-button">
                  <input
                    type="text"
                    id={`answer-${index}`}
                    value={answer}
                    onChange={(e) => updateAnswer(index, e.target.value)}
                    placeholder={`Enter answer ${index + 1}`}
                  />
                  {answers.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeAnswer(index)}
                      className="btn btn-secondary remove-btn"
                    >
                      Remove
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="input-group">
            <label htmlFor="hint">Hint:</label>
            <textarea
              id="hint"
              value={hint}
              onChange={(e) => setHint(e.target.value)}
              placeholder="Enter hint for when user makes 3 mistakes"
            />
          </div>

          <div className="input-group">
            <label htmlFor="instruction">Instruksi:</label>
            <input id="instruction" value={instruction} onChange={(e) => setInstruction(e.target.value)} />
          </div>

          <button type="button" onClick={addAnswer} className="btn btn-primary add-btn">
            Add New Answer
          </button>
          <button type="button" onClick={generateEmbedCode} className="btn btn-primary generate-embed-btn">
            Generate Embed Code
          </button>

          <div className="embed-code">
            <p>Embed Code:</p>
            <textarea
              readOnly
              value={embedCode}
            />
          </div>
        </div>
      </div>

      <div className="creation-preview">
        <h2>Preview</h2>
        <FillInTheBlank
          template={template}
          answers={answers}
          hint={hint}
          instructionText={instruction}
        />
      </div>
    </div>
  );
}

export default FillInBlankCreationPage;
