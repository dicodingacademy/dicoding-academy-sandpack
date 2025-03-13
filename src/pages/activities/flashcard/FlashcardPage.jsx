import React from 'react';
import { useSearchParams } from 'react-router-dom';
import Flashcards from '../../../components/activities/flashcards';
import ActivitiesError from '../../../components/activities/commons/ActivitiesError';

export default function FlashcardPage() {
  const [searchParam] = useSearchParams();

  const dataParam = searchParam.get('data');

  if (!dataParam) {
    return <ActivitiesError />;
  }

  try {
    const cards = JSON.parse(atob(dataParam));

    if (!Array.isArray(cards)) {
      return <ActivitiesError />;
    }

    return <Flashcards cards={cards} />;
  } catch {
    return <ActivitiesError />;
  }
}
