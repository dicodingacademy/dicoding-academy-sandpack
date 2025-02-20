import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ActivitiesContainer from '../commons/ActivitiesContainer';

// drag-and-drop style
import './style.css';

function Flashcard({ front, back }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className={`flashcard ${isFlipped ? 'flipped' : ''}`}
      onClick={() => setIsFlipped(!isFlipped)}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          setIsFlipped(!isFlipped);
        }

        if (e.key === ' ') {
          setIsFlipped(!isFlipped);
        }
      }}
      role="button"
      tabIndex={0}
    >
      <div className="flashcard-inner">
        <div className="flashcard-front">
          <div dangerouslySetInnerHTML={{ __html: front }} />
        </div>
        <div className="flashcard-back">
          <div dangerouslySetInnerHTML={{ __html: back }} />
        </div>
      </div>
    </div>
  );
}

Flashcard.propTypes = {
  front: PropTypes.string.isRequired,
  back: PropTypes.string.isRequired,
};

function Flashcards({ cards }) {
  return (
    <ActivitiesContainer>
      <div className="flashcards">
        {cards.map((card) => (
          <Flashcard key={card.front} front={card.front} back={card.back} />
        ))}
      </div>
    </ActivitiesContainer>
  );
}

Flashcards.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      front: PropTypes.string.isRequired,
      back: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Flashcards;
