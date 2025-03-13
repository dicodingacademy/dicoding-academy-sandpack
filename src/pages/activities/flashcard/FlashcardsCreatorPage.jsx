/* eslint-disable jsx-a11y/label-has-associated-control */

import '../creation-style.css';

import React, { useState } from 'react';
import Flashcards from '../../../components/activities/flashcards';

export default function FlashcardsCreatorPage() {
  const [cards, setCards] = useState([
    { id: +new Date(), front: '', back: '' },
  ]);

  const [embedCode, setEmbedCode] = useState('');

  const addCard = () => {
    const newCard = { id: +new Date(), front: '', back: '' };
    setCards([...cards, newCard]);
  };

  const removeCard = (cardId) => {
    setCards(cards.filter((card) => card.id !== cardId));
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
        <h2>Flashcard Generator</h2>

        <div className="cards-form">
          {cards.map((card, index) => (
            <div key={card.id} className="card-input">
              <div className="input-group">
                <label htmlFor={`front-${card.id}`}>Front:</label>
                <textarea
                  id={`front-${card.id}`}
                  value={card.front}
                  placeholder="Enter your front content"
                  onChange={(event) => updateCard(index, 'front', event.target.value)}
                />
              </div>
              <div className="input-group">
                <label htmlFor={`back-${card.id}`}>Back:</label>
                <textarea
                  id={`back-${card.id}`}
                  value={card.back}
                  placeholder="Enter your back content"
                  onChange={(event) => updateCard(index, 'back', event.target.value)}
                />
              </div>
              {cards.length > 1 && (
                <button
                  type="button"
                  className="btn btn-secondary remove-btn"
                  onClick={() => removeCard(card.id)}
                >
                  Remove Card
                </button>
              )}
            </div>
          ))}
        </div>
        <button type="button" className="btn btn-primary add-btn" onClick={() => addCard()}>
          Add New Card
        </button>
        <button type="button" className="btn btn-primary generate-embed-btn" onClick={() => generateEmbedCode()}>
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
