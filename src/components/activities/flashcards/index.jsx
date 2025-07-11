import './style.css';

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ActivitiesContainer from '../commons/ActivitiesContainer';
import { cn } from '../../../utils';

function FlashcardItem({ front, back, accentColor }) {
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
      className={cn('flashcards-item', { flipped: isFlipped })}
      onClick={() => flipCard()}
      onKeyDown={(event) => flipCardUsingKeyboard(event)}
    >
      <div className="flashcards-item__inner">
        <div className="flashcards-item__inner__front">
          {/* eslint-disable-next-line react/no-danger */}
          <div dangerouslySetInnerHTML={{ __html: front }} />
        </div>

        <div
          className="flashcards-item__inner__back"
          style={{
            backgroundColor: accentColor,
          }}
        >
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
  accentColor: PropTypes.string.isRequired,
};

export default function Flashcards({ instructionsText, cards }) {
  const accentColors = [
    '#3B82F6',
    '#F43F5E',
    '#F59E0B',
    '#10B981',

  ];
  return (
    <ActivitiesContainer>
      <p className="activities__instructions">{instructionsText}</p>

      <div
        className="flashcards"
        style={{
          gridTemplateColumns: `repeat(${cards.length}, minmax(auto, 250px))`,
        }}
      >
        {cards.map((card, index) => (
          <FlashcardItem
            key={card.id}
            front={card.front}
            back={card.back}
            accentColor={accentColors[index % accentColors.length]}
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
      accentColor: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

Flashcards.defaultProps = {
  instructionsText: 'Klik kartu untuk melihat jawabannya.',
};
