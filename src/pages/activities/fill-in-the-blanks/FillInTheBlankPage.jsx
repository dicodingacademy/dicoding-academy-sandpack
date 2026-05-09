import React from 'react';
import { useSearchParams } from 'react-router-dom';
import FillInTheBlank from '../../../components/activities/fill-in-the-blank';
import { base64ToUnicode } from '../../../utils';

function FillInTheBlankPage() {
  const [searchParams] = useSearchParams();
  const dataParam = searchParams.get('data');

  if (!dataParam) {
    return (<p>failed to show activities</p>);
  }

  try {
    const data = JSON.parse(
      base64ToUnicode(dataParam),
    );

    const {
      template,
      answers,
      hint = '',
      storageKey,
      instruction,
    } = data;

    if (!template) {
      return (<p>failed to show activities</p>);
    }

    if (!Array.isArray(answers)) {
      return (<p>failed to show activities</p>);
    }

    const isValidAnswerFormat = answers.every((answer) => {
      if (typeof answer === 'string') return true;
      if (Array.isArray(answer)) return answer.every((a) => typeof a === 'string');
      return false;
    });

    if (!isValidAnswerFormat) {
      return (<p>failed to show activities</p>);
    }

    if (!storageKey) {
      return (<p>failed to show activities</p>);
    }

    return (
      <FillInTheBlank
        template={template}
        answers={answers}
        hint={hint}
        storageKey={storageKey}
        instructionText={instruction}
      />
    );
  } catch {
    return (<p>failed to show activities</p>);
  }
}

export default FillInTheBlankPage;
