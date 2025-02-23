/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ActivitiesContainer from '../commons/ActivitiesContainer';

import './style.css';

function FillInTheBlank({
  template, answers, storageKey, hint,
}) {
  const [userAnswers, setUserAnswers] = useState([]);
  const [isCorrect, setIsCorrect] = useState(null);
  const [attempts, setAttempts] = useState(0);
  const [showHint, setShowHint] = useState(false);

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

    const isAllCorrect = results.every((result) => result);
    setIsCorrect(isAllCorrect);

    if (!isAllCorrect) {
      const newAttempts = attempts + 1;
      setAttempts(newAttempts);
      if (newAttempts >= 3) {
        setShowHint(true);
      }
    }
  };

  const resetAnswers = () => {
    const emptyAnswers = new Array(answers.length).fill('');
    setUserAnswers(emptyAnswers);
    setAttempts(0);
    setShowHint(false);
    localStorage.setItem(storageKey, JSON.stringify(emptyAnswers));
    setIsCorrect(null);
  };

  const renderTemplate = () => {
    const parts = template.split(/\{(\d+)}/);
    return parts.map((part, index) => {
      if (index % 2 === 0) {
        return <span key={index}>{part}</span>;
      }
      const answerIndex = parseInt(part, 10) - 1;
      const expectedLength = answers[answerIndex]?.length;
      return (
        <div key={index} className="input-container">
          <input
            type="text"
            value={userAnswers[answerIndex] || ''}
            onChange={(e) => handleInputChange(answerIndex, e.target.value)}
            style={{ width: `${expectedLength * 0.85}em` }}
            maxLength={expectedLength + 5}
          />
        </div>
      );
    });
  };

  return (
    <ActivitiesContainer>
      <div className="fill-blank">
        <div className="fill-blank-text">
          {renderTemplate()}
        </div>

        <div className="buttons">
          <button type="button" onClick={checkAnswers} className="btn btn-primary">
            Check Answers
          </button>
          <button type="button" onClick={resetAnswers} className="btn btn-secondary">
            Reset
          </button>
        </div>

        {isCorrect !== null && (
        <div className={`feedback ${isCorrect ? 'success' : 'error'}`}>
          {isCorrect ? 'All answers are correct!' : 'Try again!'}
        </div>
        )}

        {showHint && !isCorrect && (
        <div className="hint">
          <p>
            Hint:
            {' '}
            {hint}
          </p>
        </div>
        )}
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
};

FillInTheBlank.defaultProps = {
  storageKey: 'temporary',
};

export default FillInTheBlank;
