import React, { useEffect, useState } from 'react';
import DragAndOrder from '../../../components/activities/drag-and-order';
import ResizableLayout from '../../../components/activities/commons/ResizableLayout';
import AccessibleFormField from '../../../components/activities/commons/AccessibleFormField';
import LoadFromBase64 from '../../../components/activities/commons/LoadFromBase64';
import { generateIframe, unicodeToBase64 } from '../../../utils';
import useInput from '../../../hooks/useInput';

function generateId() {
  return `drag-and-order-${performance.now()}`;
}

export default function DragAndOrderCreationPage() {
  const [items, setItems] = useState([
    { id: generateId(), text: '' },
  ]);
  const [hintText, setHintText] = useState('');
  const [height, onHeightChange] = useInput('600');
  const [embedCode, setEmbedCode] = useState('');
  const [instruction, setInstruction] = useState('Drag and drop the items to the correct order.');
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const activitiesContainer = document.querySelector('.activities-container');
    if (activitiesContainer) {
      const hintBoxHeight = 55 * 2;
      const heightCount = activitiesContainer.offsetHeight + hintBoxHeight;
      onHeightChange(heightCount.toString());
    }
  }, [items, onHeightChange]);

  useEffect(() => {
    const newErrors = {};
    const emptyItems = items.filter(item => !item.text.trim()).length;
    
    if (emptyItems > 0) {
      newErrors.items = `${emptyItems} item masih kosong`;
    }
    
    if (items.length < 2) {
      newErrors.items = 'Minimal harus ada 2 item untuk aktivitas drag and drop';
    }
    
    setErrors(newErrors);
  }, [items]);

  function addNewItem() {
    const newItem = { id: generateId(), text: '' };
    setItems((prevItems) => [...prevItems, newItem]);
  }

  function removeItemById(itemId) {
    setItems((prevItems) => prevItems.filter(({ id }) => id !== itemId));
  }

  function updateItemById(itemId, textValue) {
    setItems((prevItems) => prevItems.map((prevItem) => {
      if (prevItem.id !== itemId) {
        return prevItem;
      }
      return { ...prevItem, text: textValue };
    }));
  }

  const handleLoadFromBase64 = (data) => {
    if (data.items && Array.isArray(data.items)) {
      const loadedItems = data.items.map(item => ({
        id: generateId(),
        text: item.text || ''
      }));
      setItems(loadedItems.length > 0 ? loadedItems : [{ id: generateId(), text: '' }]);
    }
    if (data.hintText) setHintText(data.hintText);
    if (data.instruction) setInstruction(data.instruction);
  };

  function generateEmbedCode() {
    if (Object.keys(errors).length > 0) {
      alert('Harap perbaiki kesalahan sebelum generate embed code');
      return;
    }

    const rawData = {
      items: items.filter(item => item.text.trim()),
      hintText,
      storageKey: `drag-and-order-${performance.now()}`,
      instruction,
    };

    const data = unicodeToBase64(JSON.stringify(rawData));
    setEmbedCode(generateIframe(
      `${window.location.protocol}//${window.location.host}/activities/drag-and-order?data=${encodeURIComponent(data)}`,
      'Dicoding Learning Activities - Drag and Order',
      height,
    ));
  }

  const formPanel = (
    <div className="creation-form">
      <header>
        <h1>Drag and Drop Generator</h1>
        <p>Buat aktivitas drag and drop untuk mengurutkan item</p>
      </header>

      <LoadFromBase64 
        onLoad={handleLoadFromBase64} 
        activityType="drag-and-order"
      />

      <form onSubmit={(e) => e.preventDefault()}>
        <fieldset>
          <legend>Items to Order</legend>
          {errors.items && (
            <div className="form-field__error" role="alert">
              {errors.items}
            </div>
          )}
          
          {items.map((item, index) => (
            <AccessibleFormField
              key={item.id}
              id={`item-${item.id}`}
              label={`Item ${index + 1}`}
              value={item.text}
              onChange={(event) => updateItemById(item.id, event.target.value)}
              placeholder="Tuliskan teksnya di sini"
              required
            >
              <div className="form-field__input-with-button">
                <input
                  type="text"
                  id={`item-${item.id}`}
                  className="form-field__input"
                  value={item.text}
                  onChange={(event) => updateItemById(item.id, event.target.value)}
                  placeholder="Tuliskan teksnya di sini"
                  required
                  aria-label={`Text for item ${index + 1}`}
                />
                {items.length > 1 && (
                  <button
                    type="button"
                    className="form-field__button form-field__button--secondary"
                    onClick={() => removeItemById(item.id)}
                    aria-label={`Remove item ${index + 1}`}
                  >
                    Remove
                  </button>
                )}
              </div>
            </AccessibleFormField>
          ))}
        </fieldset>

        <AccessibleFormField
          id="hint"
          label="Petunjuk siswa"
          type="textarea"
          value={hintText}
          onChange={(event) => setHintText(event.target.value)}
          placeholder="Masukkan petunjuk untuk membantu siswa."
          helpText="Petunjuk tambahan yang akan membantu siswa menyelesaikan aktivitas"
          rows={3}
        />

        <AccessibleFormField
          id="instruction"
          label="Instruksi"
          value={instruction}
          onChange={(event) => setInstruction(event.target.value)}
          placeholder="Masukkan instruksi untuk membantu siswa."
          helpText="Instruksi utama yang akan ditampilkan kepada siswa"
          required
        />

        <div className="form-actions">
          <button 
            type="button" 
            className="form-field__button form-field__button--primary" 
            onClick={addNewItem}
            aria-label="Add new item to the list"
          >
            Add New Item
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
            Pastikan semua item sudah diisi dengan benar
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
        <p>Pratinjau aktivitas drag and drop yang akan dibuat</p>
      </header>
      
      <div role="region" aria-label="Drag and drop activity preview">
        <DragAndOrder 
          items={items.filter(item => item.text.trim())} 
          hintText={hintText} 
          instructionText={instruction} 
        />
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
