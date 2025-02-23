import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ActivitiesContainer from '../commons/ActivitiesContainer';

import './style.css';

function DragAndOrder({ items, storageKey, hint }) {
  const [orderedItems, setOrderedItems] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const [draggedItem, setDraggedItem] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [attempts, setAttempts] = useState(0);
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    if (storageKey !== 'temporary') {
      const savedOrder = localStorage.getItem(storageKey);

      if (savedOrder) {
        setOrderedItems(JSON.parse(savedOrder));
        return;
      }
    }

    setOrderedItems([...items].sort(() => Math.random() - 0.5));
  }, [items]);

  const handleDragStart = (e, item) => {
    setIsDragging(true);
    setDraggedItem(item);
    e.dataTransfer.setData('text/plain', item);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, targetIndex) => {
    e.preventDefault();
    setIsDragging(false);

    const newItems = [...orderedItems];
    const draggedIndex = orderedItems.indexOf(draggedItem);
    newItems.splice(draggedIndex, 1);
    newItems.splice(targetIndex, 0, draggedItem);

    setOrderedItems(newItems);
    localStorage.setItem(storageKey, JSON.stringify(newItems));
  };

  const checkOrder = () => {
    const isOrderCorrect = orderedItems.every((item, index) => item === items[index]);
    setIsCorrect(isOrderCorrect);

    if (!isOrderCorrect) {
      const newAttempts = attempts + 1;
      setAttempts(newAttempts);
      if (newAttempts >= 3) {
        setShowHint(true);
      }
    }
  };

  const resetOrder = () => {
    const shuffledItems = [...items].sort(() => Math.random() - 0.5);
    setOrderedItems(shuffledItems);
    localStorage.setItem(storageKey, JSON.stringify(shuffledItems));
    setIsCorrect(null);
    setAttempts(0);
    setShowHint(false);
  };

  return (
    <ActivitiesContainer>
      <div className="drag-drop">
        <div>
          {orderedItems.map((item, index) => (
            <div
              key={item}
              draggable
              onDragStart={(e) => handleDragStart(e, item)}
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, index)}
              className={`draggable-item ${isDragging ? 'dragging' : ''}`}
            >
              {item}
            </div>
          ))}
        </div>

        <div className="buttons">
          <button type="button" onClick={checkOrder} className="btn btn-primary">
            Check Order
          </button>
          <button type="button" onClick={resetOrder} className="btn btn-secondary">
            Reset
          </button>
        </div>

        {isCorrect !== null && (
        <div className={`feedback ${isCorrect ? 'success' : 'error'}`}>
          {isCorrect ? 'Correct order!' : 'Try again!'}
        </div>
        )}

        {showHint && !isCorrect && (
        <div className="hint">
          <p>
            Hint:
            {' '}
            {hint}
          </p>
        </div>
        )}
      </div>
    </ActivitiesContainer>
  );
}

// implement proptypes
DragAndOrder.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  storageKey: PropTypes.string,
  hint: PropTypes.string.isRequired,
};

DragAndOrder.defaultProps = {
  storageKey: 'temporary',
};

export default DragAndOrder;
