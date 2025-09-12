import React, { useState, useRef, useCallback } from 'react';
import './ResizableLayout.css';

function ResizableLayout({ leftPanel, rightPanel, initialLeftWidth = 40 }) {
  const [leftWidth, setLeftWidth] = useState(initialLeftWidth);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMouseDown = useCallback((e) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleMouseMove = useCallback((e) => {
    if (!isDragging || !containerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const newLeftWidth = ((e.clientX - containerRect.left) / containerRect.width) * 100;
    
    // Constrain between 20% and 80%
    const constrainedWidth = Math.min(Math.max(newLeftWidth, 20), 80);
    setLeftWidth(constrainedWidth);
  }, [isDragging]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  React.useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.body.style.cursor = 'col-resize';
      document.body.style.userSelect = 'none';
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
    };
  }, [isDragging, handleMouseMove, handleMouseUp]);

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      setLeftWidth(prev => Math.max(prev - 5, 20));
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      setLeftWidth(prev => Math.min(prev + 5, 80));
    }
  };

  return (
    <div 
      className="resizable-layout" 
      ref={containerRef}
      style={{ '--left-width': `${leftWidth}%` }}
    >
      <div className="resizable-panel resizable-panel--left">
        {leftPanel}
      </div>
      
      <div 
        className={`resizable-splitter ${isDragging ? 'resizable-splitter--dragging' : ''}`}
        onMouseDown={handleMouseDown}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        role="separator"
        aria-orientation="vertical"
        aria-label="Resize panels. Use arrow keys to adjust."
        aria-valuenow={Math.round(leftWidth)}
        aria-valuemin={20}
        aria-valuemax={80}
      >
        <div className="resizable-splitter__handle" />
      </div>
      
      <div className="resizable-panel resizable-panel--right">
        {rightPanel}
      </div>
    </div>
  );
}

export default ResizableLayout;
