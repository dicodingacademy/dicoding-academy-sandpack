import './style.css';

import React, { useEffect, useId, useState } from 'react';
import PropTypes from 'prop-types';
import { toast, ToastContainer } from 'react-toastify';
import ActivitiesContainer from '../commons/ActivitiesContainer';
import MarkdownContent from '../commons/MarkdownContent';
import QuizOption from './QuizOption';
import {
  DEFAULT_INSTRUCTIONS, QUIZ_TYPES, TEMPORARY_STORAGE_KEY, evaluateAnswer, shuffle,
} from './quiz';
import { toastOption } from '../../../utils';

// toastOption shares one toastId, so a new toast is dropped (or lost mid exit animation)
// while the previous one is still around. Each check replaces it with its own toast.
function showFeedback(type, message) {
  toast.dismiss();
  toast(message, { ...toastOption, type, toastId: undefined });
}

function createInitialProgress(type, options) {
  const ids = options.map((option) => option.id);

  return {
    order: type === QUIZ_TYPES.TRUE_FALSE ? ids : shuffle(ids),
    selectedIds: [],
    eliminatedIds: [],
    isSolved: false,
  };
}

// Returns null when nothing is saved or the saved progress belongs to different options.
function loadProgress(storageKey, options) {
  if (storageKey === TEMPORARY_STORAGE_KEY) return null;

  try {
    const saved = JSON.parse(localStorage.getItem(storageKey));
    const ids = options.map((option) => option.id);
    const isKnownIds = (list) => Array.isArray(list) && list.every((id) => ids.includes(id));

    const isValid = saved
      && isKnownIds(saved.order)
      && saved.order.length === ids.length
      && new Set(saved.order).size === ids.length
      && isKnownIds(saved.selectedIds)
      && isKnownIds(saved.eliminatedIds)
      && typeof saved.isSolved === 'boolean';

    return isValid ? saved : null;
  } catch {
    return null;
  }
}

export default function MiniQuiz({
  type,
  question,
  options,
  instructionText,
  storageKey = TEMPORARY_STORAGE_KEY,
}) {
  const questionId = useId();
  const inputName = useId();

  const [progress, setProgress] = useState(
    () => loadProgress(storageKey, options) ?? createInitialProgress(type, options),
  );

  const {
    order, selectedIds, eliminatedIds, isSolved,
  } = progress;
  const isMultiple = type === QUIZ_TYPES.MULTIPLE;

  useEffect(() => {
    if (storageKey === TEMPORARY_STORAGE_KEY) return;

    try {
      localStorage.setItem(storageKey, JSON.stringify(progress));
    } catch {
      // Storage can be blocked (e.g. in a third-party iframe); progress just isn't kept.
    }
  }, [storageKey, progress]);

  const orderedOptions = order
    .map((id) => options.find((option) => option.id === id))
    .filter(Boolean);

  const toggleOption = (id) => {
    setProgress((prev) => {
      if (!isMultiple) {
        return { ...prev, selectedIds: [id] };
      }

      const selected = prev.selectedIds.includes(id)
        ? prev.selectedIds.filter((selectedId) => selectedId !== id)
        : [...prev.selectedIds, id];
      return { ...prev, selectedIds: selected };
    });
  };

  function checkAnswer() {
    const { isCorrect, wrongIds } = evaluateAnswer(options, selectedIds);

    if (isCorrect) {
      setProgress((prev) => ({ ...prev, isSolved: true }));
      showFeedback('success', 'Jawaban benar!');
      return;
    }

    // Wrong picks are marked and locked so the student keeps narrowing down the answer.
    setProgress((prev) => ({
      ...prev,
      selectedIds: prev.selectedIds.filter((id) => !wrongIds.includes(id)),
      eliminatedIds: [...new Set([...prev.eliminatedIds, ...wrongIds])],
    }));

    if (wrongIds.length > 0) {
      showFeedback('error', 'Jawaban belum tepat. Coba lagi ya!');
    } else {
      showFeedback('error', 'Jawaban belum lengkap. Masih ada jawaban benar yang belum dipilih.');
    }
  }

  function reset() {
    setProgress(createInitialProgress(type, options));
  }

  function getStatus(option) {
    // Once solved, only the correct answers stay highlighted; earlier wrong marks are cleared.
    if (isSolved) return option.isCorrect ? 'correct' : 'idle';
    if (eliminatedIds.includes(option.id)) return 'wrong';
    return 'idle';
  }

  return (
    <ActivitiesContainer>
      <ToastContainer />
      <p className="activities__instructions">{instructionText || DEFAULT_INSTRUCTIONS[type]}</p>

      <fieldset className="mini-quiz" aria-labelledby={questionId}>
        <div id={questionId}>
          <MarkdownContent className="mini-quiz__question">{question}</MarkdownContent>
        </div>

        <div className="mini-quiz__options">
          {orderedOptions.map((option) => (
            <QuizOption
              key={option.id}
              name={inputName}
              inputType={isMultiple ? 'checkbox' : 'radio'}
              option={option}
              checked={selectedIds.includes(option.id)}
              status={getStatus(option)}
              disabled={isSolved || eliminatedIds.includes(option.id)}
              onChange={toggleOption}
            />
          ))}
        </div>
      </fieldset>

      <div className="buttons">
        <button type="button" className="btn btn-secondary" onClick={reset}>
          Reset
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={checkAnswer}
          disabled={isSolved || selectedIds.length === 0}
        >
          Periksa jawaban
        </button>
      </div>
    </ActivitiesContainer>
  );
}

MiniQuiz.propTypes = {
  type: PropTypes.oneOf(Object.values(QUIZ_TYPES)).isRequired,
  question: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      isCorrect: PropTypes.bool,
      feedback: PropTypes.string,
    }),
  ).isRequired,
  instructionText: PropTypes.string,
  storageKey: PropTypes.string,
};
