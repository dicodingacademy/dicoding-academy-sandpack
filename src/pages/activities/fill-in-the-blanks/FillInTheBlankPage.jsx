import React from 'react';
import { useSearchParams } from 'react-router-dom';
import FillInTheBlank from '../../../components/activities/fill-in-the-blank';

function FillInTheBlankPage() {
  const [searchParams] = useSearchParams();
  const dataParam = searchParams.get('data');

  if (!dataParam) {
    return (<p>failed to show activities</p>);
  }

  try {
    const data = JSON.parse(
      atob(dataParam),
    );

    const {
      template, answers, hint = '', storageKey,
    } = data;

    if (!template) {
      return (<p>failed to show activities</p>);
    }

    if (!Array.isArray(answers)) {
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
      />
    );
  } catch {
    return (<p>failed to show activities</p>);
  }
}

export default FillInTheBlankPage;
