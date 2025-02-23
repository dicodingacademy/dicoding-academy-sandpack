import React from 'react';
import { useSearchParams } from 'react-router-dom';
import Flashcards from '../../../components/activities/flashcards';

function FlashcardPage() {
  const [searchParam] = useSearchParams();

  const dataParam = searchParam.get('data');

  if (!dataParam) {
    return (<p>failed to show activities</p>);
  }

  try {
    const cards = JSON.parse(
      atob(dataParam),
    );

    if (!Array.isArray(cards)) {
      return (<p>failed to show activities</p>);
    }

    return (
      <Flashcards cards={cards} />
    );
  } catch {
    return (<p>failed to show activities</p>);
  }
}

export default FlashcardPage;
