import React, { useEffect, useState } from 'react';
import Editor, {
  BtnBold, BtnClearFormatting, BtnItalic, BtnStrikeThrough, BtnStyles, BtnUnderline, Toolbar,
} from 'react-simple-wysiwyg';
import Flashcards from '../../../components/activities/flashcards';
import ResizableLayout from '../../../components/activities/commons/ResizableLayout';
import AccessibleFormField from '../../../components/activities/commons/AccessibleFormField';
import LoadFromBase64 from '../../../components/activities/commons/LoadFromBase64';
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
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const activitiesContainer = document.querySelector('.activities-container');
    if (activitiesContainer) {
      onHeightChange(activitiesContainer.offsetHeight.toString());
    }
  }, [cards, onHeightChange]);

  useEffect(() => {
    const newErrors = {};
    const emptyCards = cards.filter(card => !card.front.trim() || !card.back.trim()).length;
    
    if (emptyCards > 0) {
      newErrors.cards = `${emptyCards} kartu masih memiliki sisi kosong`;
    }
    
    setErrors(newErrors);
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

  const handleLoadFromBase64 = (data) => {
    if (data.cards && Array.isArray(data.cards)) {
      const loadedCards = data.cards.map(card => ({
        id: generateId(),
        front: card.front || '',
        back: card.back || ''
      }));
      setCards(loadedCards.length > 0 ? loadedCards : [{ id: generateId(), front: '', back: '' }]);
    }
    if (data.instruction) setInstruction(data.instruction);
  };

  const generateEmbedCode = () => {
    if (Object.keys(errors).length > 0) {
      alert('Harap perbaiki kesalahan sebelum generate embed code');
      return;
    }

    const data = btoa(JSON.stringify({ cards, instruction }));

    setEmbedCode(generateIframe(
      `${window.location.protocol}//${window.location.host}/activities/flashcards?data=${encodeURIComponent(data)}`,
      'Dicoding Learning Activities - Flashcards',
      height,
    ));
  };

  const formPanel = (
    <div className="creation-form">
      <header>
        <h1>Flashcards Generator</h1>
        <p>Buat kartu belajar interaktif dengan editor rich text</p>
      </header>

      <LoadFromBase64 
        onLoad={handleLoadFromBase64} 
        activityType="flashcards"
      />

      <form onSubmit={(e) => e.preventDefault()}>
        <fieldset>
          <legend>Cards</legend>
          {errors.cards && (
            <div className="form-field__error" role="alert">
              {errors.cards}
            </div>
          )}
          
          {cards.map((card, index) => (
            <div key={card.id} className="form-field__card">
              <h3>Card {index + 1}</h3>
              
              <AccessibleFormField
                id={`card-${card.id}-front`}
                label="Front"
                helpText="Gunakan CTRL + B untuk bold, CTRL + I untuk italic"
              >
                <div className="editor-wrapper">
                  <Editor
                    value={card.front}
                    onChange={(event) => updateCard(card, 'front', event.target.value)}
                    placeholder="CTRL + B = bold, CTRL + I = italic"
                    containerProps={{
                      'aria-label': `Front side of card ${index + 1}`,
                      'aria-describedby': `card-${card.id}-front-help`
                    }}
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
                </div>
              </AccessibleFormField>

              <AccessibleFormField
                id={`card-${card.id}-back`}
                label="Back"
                helpText="Gunakan CTRL + B untuk bold, CTRL + I untuk italic"
              >
                <div className="editor-wrapper">
                  <Editor
                    value={card.back}
                    onChange={(event) => updateCard(card, 'back', event.target.value)}
                    placeholder="CTRL + B = bold, CTRL + I = italic"
                    containerProps={{
                      'aria-label': `Back side of card ${index + 1}`,
                      'aria-describedby': `card-${card.id}-back-help`
                    }}
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
                </div>
              </AccessibleFormField>

              {cards.length > 1 && (
                <button
                  type="button"
                  className="form-field__button form-field__button--secondary"
                  onClick={() => removeCard(card.id)}
                  aria-label={`Remove card ${index + 1}`}
                >
                  Remove Card
                </button>
              )}
            </div>
          ))}
        </fieldset>

        <AccessibleFormField
          id="instruction"
          label="Instruction Text"
          value={instruction}
          onChange={(event) => setInstruction(event.target.value)}
          placeholder="Enter your instruction text"
          helpText="Instruksi yang akan ditampilkan kepada siswa"
          required
        />

        <div className="form-actions">
          <button 
            type="button" 
            className="form-field__button form-field__button--primary" 
            onClick={addCard}
            aria-label="Add new flashcard"
          >
            Add New Card
          </button>
        </div>

        <AccessibleFormField
          id="height"
          label="Height (pixels)"
          type="number"
          value={height}
          onChange={onHeightChange}
          helpText="Tinggi iframe dalam pixel"
          min="300"
          max="1000"
        />

        <div className="form-actions">
          <button 
            type="button" 
            className="form-field__button form-field__button--primary" 
            onClick={generateEmbedCode}
            disabled={Object.keys(errors).length > 0}
            aria-describedby="generate-help"
          >
            Generate Embed Code
          </button>
          <div id="generate-help" className="form-field__help">
            Pastikan semua kartu sudah diisi dengan benar
          </div>
        </div>

        <AccessibleFormField
          id="embed-code"
          label="Embed Code"
          type="textarea"
          value={embedCode}
          readOnly
          placeholder="Embed code akan muncul di sini setelah generate"
          helpText="Salin kode ini untuk menyematkan aktivitas di halaman web"
          rows={4}
        />
      </form>
    </div>
  );

  const previewPanel = (
    <div className="creation-preview">
      <header>
        <h2>Preview</h2>
        <p>Pratinjau flashcards yang akan dibuat</p>
      </header>
      
      <div role="region" aria-label="Flashcards preview">
        <Flashcards cards={cards} instructionsText={instruction} />
      </div>
    </div>
  );

  return (
    <ResizableLayout 
      leftPanel={formPanel} 
      rightPanel={previewPanel}
      initialLeftWidth={45}
    />
  );
}
