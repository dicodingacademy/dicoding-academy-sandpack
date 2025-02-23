/* eslint-disable react/no-array-index-key,jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import Flashcards from '../../../components/activities/flashcards';

import '../creation-style.css';

function FlashcardsCreationPage() {
  const [cards, setCards] = useState([
    { front: '', back: '' },
  ]);

  const [embedCode, setEmbedCode] = useState('');

  const addCard = () => {
    setCards([...cards, { front: '', back: '' }]);
  };

  const removeCard = (index) => {
    setCards(cards.filter((_, i) => i !== index));
  };

  const updateCard = (index, field, value) => {
    const newCards = [...cards];
    newCards[index] = { ...newCards[index], [field]: value };
    setCards(newCards);
  };

  const generateEmbedCode = () => {
    const data = btoa(JSON.stringify(cards));
    const code = `<iframe src="${window.location.protocol}//${window.location.host}/activities/flashcard?data=${data}" width="870" height="300"></iframe>`;
    setEmbedCode(code);
  };

  return (
    <div className="creation-container">
      <div className="creation-form">
        <h2>Generate Flashcards</h2>
        <div className="cards-form">
          {cards.map((card, index) => (
            <div key={index} className="card-input">
              <div className="input-group">
                <label htmlFor={`front-${index}`}>Front:</label>
                <textarea
                  id={`front-${index}`}
                  value={card.front}
                  onChange={(e) => updateCard(index, 'front', e.target.value)}
                  placeholder="Enter front content"
                />
              </div>
              <div className="input-group">
                <label htmlFor={`back-${index}`}>Back:</label>
                <textarea
                  id={`back-${index}`}
                  value={card.back}
                  onChange={(e) => updateCard(index, 'back', e.target.value)}
                  placeholder="Enter back content"
                />
              </div>
              {cards.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeCard(index)}
                  className="btn btn-secondary remove-btn"
                >
                  Remove Card
                </button>
              )}
            </div>
          ))}
        </div>
        <button type="button" onClick={addCard} className="btn btn-primary add-btn">
          Add New Card
        </button>
        <button type="button" onClick={generateEmbedCode} className="btn btn-primary generate-embed-btn">
          Generate Embed Code
        </button>

        <div className="embed-code">
          <p>Embed Code:</p>
          <textarea
            readOnly
            value={embedCode}
          />
        </div>
      </div>

      <div className="creation-preview">
        <h2>Preview</h2>
        <Flashcards cards={cards} />
      </div>
    </div>
  );
}

export default FlashcardsCreationPage;
