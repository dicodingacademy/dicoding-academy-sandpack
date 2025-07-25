/* eslint-disable react/no-array-index-key */

import './style.css';

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { toast, ToastContainer } from 'react-toastify';
import { toastOption } from '../../../utils';
import ActivitiesContainer from '../commons/ActivitiesContainer';

function FillInTheBlank({
  template, answers, storageKey, hint, instructionText,
}) {
  const [userAnswers, setUserAnswers] = useState([]);
  const [attempts, setAttempts] = useState(0);
  const [correctness, setCorrectness] = useState([]);

  useEffect(() => {
    if (storageKey !== 'temporary') {
      const savedAnswers = localStorage.getItem(storageKey);

      if (savedAnswers) {
        setUserAnswers(JSON.parse(savedAnswers));
        return;
      }
    }

    setUserAnswers(new Array(answers.length).fill(''));
  }, [answers.length]);

  const handleInputChange = (index, value) => {
    const newAnswers = [...userAnswers];
    newAnswers[index] = value;
    setUserAnswers(newAnswers);
    localStorage.setItem(storageKey, JSON.stringify(newAnswers));
  };

  const checkAnswers = () => {
    const results = userAnswers.map(
      (answer, index) => answer.toLowerCase() === answers[index].toLowerCase(),
    );

    setCorrectness(results);
    const isAllCorrect = results.every((result) => result);

    if (!isAllCorrect) {
      const newAttempts = attempts + 1;
      setAttempts(newAttempts);

      if (newAttempts >= 3) {
        toast.warn(`Petunjuk: ${hint}`, toastOption);
        return;
      }

      toast.error('Jawaban belum tepat. Coba lagi ya!', toastOption);
      return;
    }

    toast.success('Jawaban benar.', toastOption);
  };

  const resetAnswers = () => {
    const emptyAnswers = new Array(answers.length).fill('');
    setUserAnswers(emptyAnswers);
    setAttempts(0);
    localStorage.setItem(storageKey, JSON.stringify(emptyAnswers));
    setCorrectness([]);
  };

  const renderTemplate = () => {
    const parts = template.split(/\{(\d+)}/);
    let inputIndex = 0;

    return parts.map((part, index) => {
      if (index % 2 === 0) {
        return <span key={index}>{part}</span>;
      }
      const answerIndex = parseInt(part, 10) - 1;
      const expectedLength = answers[answerIndex]?.length;

      if (correctness.length > 0) {
        const correct = correctness[inputIndex];
        inputIndex += 1;
        return (
          <div key={index} className={`input-container ${correct ? 'correct' : 'incorrect'}`}>
            <input
              type="text"
              value={userAnswers[answerIndex] || ''}
              onChange={(e) => handleInputChange(answerIndex, e.target.value)}
              style={{ width: `${expectedLength * 1}em` }}
              maxLength={expectedLength + 5}
            />
          </div>
        );
      }

      return (
        <div key={index} className="input-container">
          <input
            type="text"
            value={userAnswers[answerIndex] || ''}
            onChange={(e) => handleInputChange(answerIndex, e.target.value)}
            style={{ width: `${expectedLength * 1}em` }}
            maxLength={expectedLength + 5}
          />
        </div>
      );
    });
  };

  return (
    <ActivitiesContainer>
      <ToastContainer />
      <p className="activities__instructions">{instructionText}</p>
      <div className="fill-blank">
        <div className="fill-blank-text">
          {renderTemplate()}
        </div>
      </div>

      <div className="buttons">
        <button type="button" onClick={resetAnswers} className="btn btn-secondary">
          Reset
        </button>
        <button type="button" onClick={checkAnswers} className="btn btn-primary">
          Periksa jawaban
        </button>
      </div>
    </ActivitiesContainer>
  );
}

// define prop-types
FillInTheBlank.propTypes = {
  template: PropTypes.string.isRequired,
  answers: PropTypes.arrayOf(PropTypes.string).isRequired,
  storageKey: PropTypes.string,
  hint: PropTypes.string.isRequired,
  instructionText: PropTypes.string,
};

FillInTheBlank.defaultProps = {
  storageKey: 'temporary',
  instructionText: 'Lengkapi kalimat berikut dengan kata yang tepat.',
};

export default FillInTheBlank;
