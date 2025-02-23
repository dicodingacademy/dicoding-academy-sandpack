/* eslint-disable react/no-array-index-key,jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import DragAndOrder from '../../../components/activities/drag-and-order';

import '../creation-style.css';

function DragAndOrderCreationPage() {
  const [items, setItems] = useState(['']);
  const [hint, setHint] = useState('');
  const [embedCode, setEmbedCode] = useState('');

  const addItem = () => {
    setItems([...items, '']);
  };

  const removeItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const updateItem = (index, value) => {
    const newItems = [...items];
    newItems[index] = value;
    setItems(newItems);
  };

  const generateEmbedCode = () => {
    const rawData = {
      items,
      hint,
      storageKey: `drag-and-order-${+new Date()}`,
    };

    const data = btoa(JSON.stringify(rawData));
    const code = `<iframe src="https://academy-sandpack.dicoding.dev/activities/drag-and-order?data=${data}" width="870" height="400"></iframe>`;
    setEmbedCode(code);
  };

  return (
    <div className="creation-container">
      <div className="creation-form">
        <h2>Generate Drag and Drop Activity</h2>
        <div className="items-form">
          {items.map((item, index) => (
            <div key={index} className="input-group">
              <label htmlFor={`item-${index}`}>
                Item
                {index + 1}
                :
              </label>
              <div className="input-with-button">
                <input
                  type="text"
                  id={`item-${index}`}
                  value={item}
                  onChange={(e) => updateItem(index, e.target.value)}
                  placeholder="Enter item text"
                />
                {items.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeItem(index)}
                    className="btn btn-secondary remove-btn"
                  >
                    Remove
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="input-group">
          <label htmlFor="hint">Hint:</label>
          <textarea
            id="hint"
            value={hint}
            onChange={(e) => setHint(e.target.value)}
            placeholder="Enter hint for when user makes 3 mistakes"
          />
        </div>
        <button type="button" onClick={addItem} className="btn btn-primary add-btn">
          Add New Item
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
        <DragAndOrder items={items.filter((item) => item.trim())} hint={hint} />
      </div>
    </div>
  );
}

export default DragAndOrderCreationPage;
