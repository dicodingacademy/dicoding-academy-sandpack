import React from 'react';
import { useSearchParams } from 'react-router-dom';
import MiniQuiz from '../../../components/activities/mini-quiz';
import ActivitiesError from '../../../components/activities/commons/ActivitiesError';
import { validateQuiz } from '../../../components/activities/mini-quiz/quiz';
import { base64ToUnicode } from '../../../utils';

export default function MiniQuizPage() {
  const [searchParams] = useSearchParams();
  const dataParam = searchParams.get('data');

  if (!dataParam) {
    return <ActivitiesError />;
  }

  try {
    const quiz = JSON.parse(base64ToUnicode(dataParam));

    if (Object.keys(validateQuiz(quiz)).length > 0) {
      return <ActivitiesError />;
    }

    return (
      <MiniQuiz
        type={quiz.type}
        question={quiz.question}
        options={quiz.options}
        instructionText={quiz.instruction}
        storageKey={quiz.storageKey || undefined}
      />
    );
  } catch {
    return <ActivitiesError />;
  }
}
