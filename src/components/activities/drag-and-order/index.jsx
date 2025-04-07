import './style.css';

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ActivitiesContainer from '../commons/ActivitiesContainer';

export default function DragAndOrder({
  items,
  hintText,
  instructionsText = 'Urutkan baris berikut sesuai urutan yang benar.',
  storageKey = 'temporary',
}) {
  const [orderedItems, setOrderedItems] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const [draggedItem, setDraggedItem] = useState(null);
  const [isCorrect, setIsCorrect] = useState(false);
  const [attemptsCount, setAttemptsCount] = useState(0);
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    if (storageKey !== 'temporary') {
      const savedOrder = localStorage.getItem(storageKey);

      if (savedOrder) {
        setOrderedItems(JSON.parse(savedOrder));
        return;
      }
    }

    setOrderedItems(() => {
      const shuffledItems = [...items].sort(() => Math.random() - 0.5);
      return shuffledItems;
    });
  }, [items]);

  useEffect(() => {
    if (attemptsCount >= 3) {
      setShowHint(true);
    }
  }, [attemptsCount]);

  function handleDragStart(event, orderedItem) {
    setIsDragging(true);
    setDraggedItem(orderedItem);
    event.dataTransfer.setData('text/plain', orderedItem);
  }

  function handleDragOver(event) {
    event.preventDefault();
  }

  function handleDrop(event, targetIndex) {
    event.preventDefault();

    setIsDragging(false);

    const draggedIndex = orderedItems.indexOf(draggedItem);
    const newItems = [...orderedItems];
    newItems.splice(draggedIndex, 1);
    newItems.splice(targetIndex, 0, draggedItem);

    setOrderedItems(newItems);
    localStorage.setItem(storageKey, JSON.stringify(newItems));
  }

  function checkOrder() {
    const isOrderCorrect = orderedItems.every((orderedItem, index) => {
      const firstItem = items[index];
      return orderedItem.text === firstItem.text;
    });
    setIsCorrect(isOrderCorrect);

    if (!isOrderCorrect) {
      setAttemptsCount((prevState) => prevState + 1);
      return;
    }

    // eslint-disable-next-line no-alert
    alert('Selamat! Anda telah menyelesaikan tugas ini.');
  }

  function resetOrder() {
    const shuffledItems = [...items].sort(() => Math.random() - 0.5);

    setOrderedItems(shuffledItems);
    localStorage.setItem(storageKey, JSON.stringify(shuffledItems));

    setIsCorrect(false);
    setAttemptsCount(0);
    setShowHint(false);
  }

  return (
    <ActivitiesContainer>
      <>
        <p className="activities__instructions">{instructionsText}</p>

        <div className="drag-drop">
          <div className="draggable-items">
            {orderedItems.map((orderedItem, index) => (
              <div
                key={orderedItem.id}
                className={['draggable-item', isDragging ? 'draggable-item__dragging' : ''].join(' ')}
              >
                <button
                  type="button"
                  className="draggable-item__button"
                  draggable
                  onDragStart={(event) => handleDragStart(event, orderedItem)}
                  onDragOver={(event) => handleDragOver(event)}
                  onDrop={(event) => handleDrop(event, index)}
                >
                  <img
                    src="/assets/icon-park-outline-drag.png"
                    alt="Draggable Item"
                    width={25}
                    height={25}
                  />
                </button>
                <div
                  role="button"
                  tabIndex="0"
                  className="draggable-item__text"
                  draggable
                  onDragStart={(event) => handleDragStart(event, orderedItem)}
                  onDragOver={(event) => handleDragOver(event)}
                  onDrop={(event) => handleDrop(event, index)}
                >
                  {orderedItem.text}
                </div>
              </div>
            ))}
          </div>
        </div>

        {showHint && (
          <div className="hint">
            <div><strong>Petunjuk:</strong></div>
            <p>{hintText.trim()}</p>
          </div>
        )}

        <div className="buttons">
          <button type="button" className="btn btn-secondary" onClick={() => resetOrder()}>
            Reset
          </button>
          <button type="button" className="btn btn-primary" onClick={() => checkOrder()}>
            Periksa urutan
          </button>
        </div>
      </>
    </ActivitiesContainer>
  );
}

// implement proptypes
DragAndOrder.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }),
  ).isRequired,
  hintText: PropTypes.string.isRequired,
  instructionsText: PropTypes.string,
  storageKey: PropTypes.string,
};
