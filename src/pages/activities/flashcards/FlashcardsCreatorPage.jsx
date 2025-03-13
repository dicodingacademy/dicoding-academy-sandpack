/* eslint-disable jsx-a11y/label-has-associated-control */

import '../creation-style.css';

import React, { useState } from 'react';
import Flashcards from '../../../components/activities/flashcards';
import { generateIframe } from '../../../utils';
import useInput from '../../../hooks/useInput';

export default function FlashcardsCreatorPage() {
  const [cards, setCards] = useState([
    { id: `card-${+new Date()}`, front: '', back: '' },
  ]);

  const [width, onWidthChange] = useInput('100%');
  const [height, onHeightChange] = useInput('600');
  const [embedCode, setEmbedCode] = useState('');

  const addCard = () => {
    const newCard = { id: `card-${+new Date()}`, front: '', back: '' };
    setCards([...cards, newCard]);
  };

  const removeCard = (cardId) => {
    setCards((prevCards) => prevCards.filter((prevCard) => prevCard.id !== cardId));
  };

  const updateCard = (card, field, value) => {
    setCards((prevCards) => prevCards.map((prevCard) => {
      if (prevCard.id === card.id) {
        return { ...prevCard, [field]: value };
      }
      return prevCard;
    }));
  };

  const generateEmbedCode = () => {
    const data = btoa(JSON.stringify(cards));

    const generatedIframe = generateIframe(
      `${window.location.protocol}//${window.location.host}/activities/flashcards?data=${data}`,
      'Dicoding Learning Activities',
      height,
      width,
    );
    setEmbedCode(generatedIframe);
  };

  return (
    <div className="creation-container">
      <div className="creation-form">
        <h2>Flashcards Generator</h2>

        <div className="cards-form">
          {cards.map((card) => (
            <div key={card.id} className="card-input">
              <div className="input-group">
                <label>
                  <div>Front:</div>
                  <textarea
                    value={card.front}
                    placeholder="Enter your front content"
                    onChange={(event) => updateCard(card, 'front', event.target.value)}
                  />
                </label>
              </div>
              <div className="input-group">
                <label>
                  <div>Back:</div>
                  <textarea
                    value={card.back}
                    placeholder="Enter your back content"
                    onChange={(event) => updateCard(card, 'back', event.target.value)}
                  />
                </label>
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

        <div className="creation-form__buttons">
          <button type="button" className="btn btn-primary add-btn" onClick={() => addCard()}>
            Add New Card
          </button>
        </div>

        <div className="embed-code">
          <div>
            <label>
              <span>Width</span>
              <div>
                <input value={width} onChange={(event) => onWidthChange(event)} />
              </div>
            </label>
          </div>
          <div>
            <label>
              <span>Height</span>
              <div>
                <input value={height} onChange={(event) => onHeightChange(event)} />
              </div>
            </label>
          </div>

          <button type="button" className="btn btn-primary generate-embed-btn" onClick={() => generateEmbedCode()}>
            Generate Embed Code
          </button>

          <div>
            <span>Embed Code:</span>
            <div>
              <textarea value={embedCode} readOnly />
            </div>
          </div>
        </div>
      </div>

      <div className="creation-preview">
        <h2>Preview</h2>
        <Flashcards cards={cards} />
      </div>
    </div>
  );
}
