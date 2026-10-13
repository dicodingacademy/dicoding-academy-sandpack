import React from 'react';
import PropTypes from 'prop-types';
import MarkdownContent from '../commons/MarkdownContent';
import { useTheme } from '../../../contexts/ThemeContext';
import { cn } from '../../../utils';

const STATUS_ICONS = {
  correct: { light: '/assets/checklist.png', dark: '/assets/checklist-dark.png', alt: 'Benar' },
  wrong: { light: '/assets/close.png', dark: '/assets/close-dark.png', alt: 'Salah' },
};

export default function QuizOption({
  name,
  inputType,
  option,
  checked,
  status,
  disabled,
  onChange,
}) {
  const { theme } = useTheme();
  const icon = STATUS_ICONS[status];
  const inputId = `${name}-${option.id}`;
  // Feedback only appears once the option has been graded (marked wrong, or correct when solved).
  const feedback = status !== 'idle' ? option.feedback?.trim() : '';

  return (
    <label
      htmlFor={inputId}
      className={cn('mini-quiz__option', {
        'mini-quiz__option--correct': status === 'correct',
        'mini-quiz__option--wrong': status === 'wrong',
        'mini-quiz__option--disabled': disabled,
      })}
    >
      <input
        id={inputId}
        type={inputType}
        name={name}
        value={option.id}
        checked={checked}
        disabled={disabled}
        onChange={() => onChange(option.id)}
      />
      <span className="mini-quiz__option-body">
        <MarkdownContent inline className="mini-quiz__option-text">{option.text}</MarkdownContent>
        {feedback && <span className="mini-quiz__option-feedback">{feedback}</span>}
      </span>
      {icon && (
        <img
          src={theme.toString() === 'light' ? icon.light : icon.dark}
          alt={icon.alt}
          width={20}
          height={20}
        />
      )}
    </label>
  );
}

QuizOption.propTypes = {
  name: PropTypes.string.isRequired,
  inputType: PropTypes.oneOf(['radio', 'checkbox']).isRequired,
  option: PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    feedback: PropTypes.string,
  }).isRequired,
  checked: PropTypes.bool.isRequired,
  status: PropTypes.oneOf(['idle', 'correct', 'wrong']).isRequired,
  disabled: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};
