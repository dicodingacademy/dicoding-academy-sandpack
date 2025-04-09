import './style.css';

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ActivitiesContainer from '../commons/ActivitiesContainer';
import { useTheme } from '../../../contexts/ThemeContext';
import { cn } from '../../../utils';

export default function DragAndOrder({
  items,
  hintText,
  instructionsText = 'Urutkan baris berikut sesuai urutan yang benar.',
  storageKey = 'temporary',
}) {
  const { theme } = useTheme();

  const draggedItemIconUrl = '/assets/icon-park-outline-drag.png';

  const validIconDarkUrl = '/assets/checklist-dark.png';
  const validIconLightUrl = '/assets/checklist.png';
  const [validIconUrl, setValidIconUrl] = useState(validIconLightUrl);

  const invalidIconDarkUrl = '/assets/close-dark.png';
  const invalidIconLightUrl = '/assets/close.png';
  const [invalidIconUrl, setInvalidIconUrl] = useState(invalidIconLightUrl);

  const [orderedItems, setOrderedItems] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const [draggedItem, setDraggedItem] = useState(null);

  const [isAlreadyChecked, setIsAlreadyChecked] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [attemptsCount, setAttemptsCount] = useState(0);
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    setValidIconUrl(theme.toString() === 'light' ? validIconLightUrl : validIconDarkUrl);
    setInvalidIconUrl(theme.toString() === 'light' ? invalidIconLightUrl : invalidIconDarkUrl);
  }, [theme]);

  function reset() {
    const shuffledItems = [...items].sort(() => Math.random() - 0.5);
    localStorage.setItem(storageKey, JSON.stringify(shuffledItems));

    setOrderedItems(shuffledItems.map((item) => ({ ...item, isMatched: false })));

    setIsAlreadyChecked(false);
    setIsCorrect(false);
    setAttemptsCount(0);
    setShowHint(false);
  }

  useEffect(() => {
    if (storageKey !== 'temporary') {
      const savedOrder = localStorage.getItem(storageKey);

      if (savedOrder) {
        const parsedOrder = JSON
          .parse(savedOrder)
          .map((item, index) => {
            const currentItem = items[index];
            return { ...item, isMatched: item.id === currentItem.id };
          });
        setOrderedItems(parsedOrder);

        return;
      }
    }

    reset();
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
    const checkedReorderItems = orderedItems.map((orderedItem, index) => {
      const currentItem = items[index];
      return { ...orderedItem, isMatched: orderedItem.id === currentItem.id };
    });
    setOrderedItems(checkedReorderItems);

    setIsAlreadyChecked(true);

    const isOrderCorrect = checkedReorderItems.every(({ isMatched }) => isMatched);
    setIsCorrect(isOrderCorrect);

    if (!isOrderCorrect) {
      setAttemptsCount((prevState) => prevState + 1);
      return;
    }

    // eslint-disable-next-line no-alert
    alert('Selamat! Anda telah menyelesaikan tugas ini.');
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
                className={cn('draggable-item', {
                  'draggable-item__dragging': isDragging,
                  'draggable-item__valid': isAlreadyChecked && orderedItem.isMatched,
                  'draggable-item__invalid': isAlreadyChecked && !orderedItem.isMatched,
                })}
              >
                <button
                  type="button"
                  className="draggable-item__button"
                  draggable
                  onDragStart={(event) => handleDragStart(event, orderedItem)}
                  onDragOver={(event) => handleDragOver(event)}
                  onDrop={(event) => handleDrop(event, index)}
                >
                  <img src={draggedItemIconUrl} alt="Draggable Item" width={25} height={25} />
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
                  <span>{orderedItem.text}</span>
                  {isAlreadyChecked && (
                    <img
                      src={orderedItem.isMatched ? validIconUrl : invalidIconUrl}
                      alt={orderedItem.isMatched ? 'Valid Icon' : 'Invalid Icon'}
                      width={20}
                      height={20}
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {showHint && !isCorrect && (
          <div className="hint">
            <div><strong>Petunjuk:</strong></div>
            <p>{hintText.trim()}</p>
          </div>
        )}

        <div className="buttons">
          <button type="button" className="btn btn-secondary" onClick={() => reset()}>
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
