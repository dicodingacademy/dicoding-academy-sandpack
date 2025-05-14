/* eslint-disable react/no-array-index-key,jsx-a11y/label-has-associated-control */

import '../creation-style.css';

import React, { useEffect, useState } from 'react';
import DragAndOrder from '../../../components/activities/drag-and-order';
import { generateIframe } from '../../../utils';
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

  useEffect(() => {
    const activitiesContainer = document.querySelector('.activities-container');

    const hintBoxHeight = 55 * 2;
    const heightCount = activitiesContainer.offsetHeight + hintBoxHeight;

    onHeightChange(heightCount.toString());
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

  function generateEmbedCode() {
    const rawData = {
      items,
      hintText,
      storageKey: `drag-and-order-${performance.now()}`,
    };

    const data = btoa(JSON.stringify(rawData));
    setEmbedCode(generateIframe(
      `${window.location.protocol}//${window.location.host}/activities/drag-and-order?data=${encodeURIComponent(data)}`,
      'Dicoding Learning Activities',
      height,
    ));
  }

  return (
    <div className="creation-container">
      <div className="creation-form">
        <h2>Drag and Drop Generator</h2>

        <div className="items-form">
          {items.map((item, index) => (
            <div key={item.id} className="input-group">
              <label htmlFor={`item-${item.id}`}>{`Item ${index + 1}:`}</label>
              <div className="input-with-button">
                <input
                  id={`item-${item.id}`}
                  placeholder="Tuliskan teksnya di sini"
                  value={item.text}
                  onChange={(event) => updateItemById(item.id, event.target.value)}
                />
                {items.length > 1 && (
                  <button
                    type="button"
                    className="btn btn-secondary remove-btn"
                    onClick={() => removeItemById(item.id)}
                  >
                    Remove
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="input-group">
          <label htmlFor="hint">Petunjuk siswa:</label>
          <textarea
            id="hint"
            placeholder="Masukkan petunjuk untuk membantu siswa."
            value={hintText}
            onChange={(event) => setHintText(event.target.value)}
          />
        </div>

        <div className="creation-form__buttons">
          <button type="button" className="btn btn-primary add-btn" onClick={() => addNewItem()}>
            Add New Item
          </button>
        </div>

        <div className="embed-code">
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

        <DragAndOrder items={items} hintText={hintText} />
      </div>
    </div>
  );
}
