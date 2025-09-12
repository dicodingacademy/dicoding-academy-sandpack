import React from 'react';
import './MarkdownToolbar.css';

function MarkdownToolbar({ onInsert, targetId }) {
  const insertFormat = (before, after = '', placeholder = 'text') => {
    const textarea = document.getElementById(targetId);
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = textarea.value.substring(start, end);
    const textToInsert = selectedText || placeholder;
    const newText = before + textToInsert + after;
    
    const newValue = textarea.value.substring(0, start) + newText + textarea.value.substring(end);
    
    if (onInsert) {
      onInsert(newValue);
    }
    
    // Set cursor position
    setTimeout(() => {
      const newStart = start + before.length;
      const newEnd = newStart + textToInsert.length;
      textarea.focus();
      textarea.setSelectionRange(newStart, newEnd);
    }, 0);
  };

  return (
    <div className="markdown-toolbar">
      <div className="markdown-toolbar__buttons">
        <button
          type="button"
          className="markdown-toolbar__btn"
          onClick={() => insertFormat('**', '**', 'bold text')}
          title="Bold (Ctrl+B)"
          aria-label="Insert bold formatting"
        >
          <strong>B</strong>
        </button>
        
        <button
          type="button"
          className="markdown-toolbar__btn"
          onClick={() => insertFormat('*', '*', 'italic text')}
          title="Italic (Ctrl+I)"
          aria-label="Insert italic formatting"
        >
          <em>I</em>
        </button>
        
        <button
          type="button"
          className="markdown-toolbar__btn"
          onClick={() => insertFormat('`', '`', 'code')}
          title="Inline code"
          aria-label="Insert inline code formatting"
        >
          {'</>'}
        </button>
        
        <button
          type="button"
          className="markdown-toolbar__btn"
          onClick={() => insertFormat('\n```\n', '\n```\n', 'code block')}
          title="Code block"
          aria-label="Insert code block formatting"
        >
          {'{ }'}
        </button>
      </div>
      
      <div className="markdown-toolbar__info">
        <span>Mendukung Markdown formatting</span>
        <a 
          href="https://www.markdownguide.org/basic-syntax/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="markdown-toolbar__link"
        >
          Panduan Markdown
        </a>
      </div>
    </div>
  );
}

export default MarkdownToolbar;
