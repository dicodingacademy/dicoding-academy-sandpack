/* eslint-disable jsx-a11y/label-has-associated-control */

import '../creation-style.css';

import React, { useEffect, useState } from 'react';
import Editor, {
  BtnBold, BtnClearFormatting, BtnItalic, BtnStrikeThrough, BtnStyles, BtnUnderline, Toolbar,
} from 'react-simple-wysiwyg';
import Flashcards from '../../../components/activities/flashcards';
import { generateIframe } from '../../../utils';
import useInput from '../../../hooks/useInput';

function generateId() {
  return `card-${performance.now()}`;
}

export default function FlashcardsCreatorPage() {
  const [cards, setCards] = useState([
    { id: generateId(), front: '', back: '' },
  ]);

  const [height, onHeightChange] = useInput('550');
  const [embedCode, setEmbedCode] = useState('');
  const [instruction, setInstruction] = useState('Klik kartu untuk melihat jawabannya.');

  useEffect(() => {
    const activitiesContainer = document.querySelector('.activities-container');
    onHeightChange(activitiesContainer.offsetHeight.toString());
  }, [cards]);

  const addCard = () => {
    const newCard = { id: generateId(), front: '', back: '' };
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
    const data = btoa(JSON.stringify({ cards, instruction }));

    setEmbedCode(generateIframe(
      `${window.location.protocol}//${window.location.host}/activities/flashcards?data=${encodeURIComponent(data)}`,
      'Dicoding Learning Activities',
      height,
    ));
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
                  <div>Front: </div>
                  <Editor
                    placeholder="CTRL + B = bold, CTRL + I = italic"
                    value={card.front}
                    onChange={(event) => updateCard(card, 'front', event.target.value)}
                  >
                    <Toolbar>
                      <BtnBold />
                      <BtnItalic />
                      <BtnUnderline />
                      <BtnStrikeThrough />
                      <BtnClearFormatting />
                      <BtnStyles />
                    </Toolbar>
                  </Editor>
                </label>
              </div>
              <div className="input-group">
                <label>
                  <div>Back:</div>
                  <Editor
                    value={card.back}
                    placeholder="CTRL + B = bold, CTRL + I = italic"
                    onChange={(event) => updateCard(card, 'back', event.target.value)}
                  >
                    <Toolbar>
                      <BtnBold />
                      <BtnItalic />
                      <BtnUnderline />
                      <BtnStrikeThrough />
                      <BtnClearFormatting />
                      <BtnStyles />
                    </Toolbar>
                  </Editor>
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

        <div className="instruction-text">
          <label>Instruction Text</label>
          <div className="input-group">
            <input
              value={instruction}
              placeholder="Enter your instruction text"
              onChange={(event) => setInstruction(event.target.value)}
            />
          </div>
        </div>

        <div className="creation-form__buttons">
          <button type="button" className="btn btn-primary add-btn" onClick={() => addCard()}>
            Add New Card
          </button>
        </div>

        <div className="embed-code">
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
        <Flashcards cards={cards} instructionsText={instruction} />
      </div>
    </div>
  );
}
