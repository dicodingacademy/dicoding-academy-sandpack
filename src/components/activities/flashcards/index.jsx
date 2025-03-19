import './style.css';

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ActivitiesContainer from '../commons/ActivitiesContainer';

function FlashcardItem({ front, back }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  const flipCardUsingKeyboard = (event) => {
    if (event.key === 'Enter') {
      setIsFlipped(!isFlipped);
    }

    if (event.key === ' ') {
      setIsFlipped(!isFlipped);
    }
  };

  return (
    <div
      role="button"
      tabIndex={0}
      aria-label={`Flip ${front} card.`}
      className={`flashcards-item ${isFlipped ? 'flipped' : ''}`}
      onClick={() => flipCard()}
      onKeyDown={(event) => flipCardUsingKeyboard(event)}
    >
      <div className="flashcards-item__inner">
        <div className="flashcards-item__inner__front">
          {/* eslint-disable-next-line react/no-danger */}
          <div dangerouslySetInnerHTML={{ __html: front }} />
        </div>
        <div className="flashcards-item__inner__back">
          {/* eslint-disable-next-line react/no-danger */}
          <div dangerouslySetInnerHTML={{ __html: back }} />
        </div>
      </div>
    </div>
  );
}

FlashcardItem.propTypes = {
  front: PropTypes.string.isRequired,
  back: PropTypes.string.isRequired,
};

export default function Flashcards({ instructionsText, cards }) {
  return (
    <ActivitiesContainer>
      <p className="activities__instructions">{instructionsText || 'Klik kartu untuk melihat jawabannya.'}</p>

      <div className="flashcards">
        {cards.map((card) => (
          <FlashcardItem
            key={card.id}
            front={card.front}
            back={card.back}
          />
        ))}
      </div>
    </ActivitiesContainer>
  );
}

Flashcards.propTypes = {
  instructionsText: PropTypes.string,
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      front: PropTypes.string.isRequired,
      back: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
