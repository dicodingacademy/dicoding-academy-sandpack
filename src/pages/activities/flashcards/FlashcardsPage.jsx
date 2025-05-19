import React from 'react';
import { useSearchParams } from 'react-router-dom';
import Flashcards from '../../../components/activities/flashcards';
import ActivitiesError from '../../../components/activities/commons/ActivitiesError';

export default function FlashcardsPage() {
  const [searchParam] = useSearchParams();

  const dataParam = searchParam.get('data');

  if (!dataParam) {
    return <ActivitiesError />;
  }

  try {
    const data = JSON.parse(atob(dataParam));

    if (Array.isArray(data)) {
      return <Flashcards cards={data} />;
    }

    const { cards, instruction } = data;

    if (!Array.isArray(cards)) {
      return <ActivitiesError />;
    }

    if (Array.isArray(cards)) {
      return <Flashcards instructionsText={instruction} cards={cards} />;
    }
  } catch {
    return <ActivitiesError />;
  }
}
