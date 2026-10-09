import React from 'react';
import PropTypes from 'prop-types';
import Markdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/github.css';

// Inline mode keeps only phrasing formatting; block elements (p, pre, ...) are
// unwrapped so the content can sit inside a <label> or <span>.
const INLINE_ELEMENTS = ['strong', 'em', 'code'];

export default function MarkdownContent({ children, inline = false, className }) {
  if (inline) {
    return (
      <span className={className}>
        <Markdown allowedElements={INLINE_ELEMENTS} unwrapDisallowed>
          {children}
        </Markdown>
      </span>
    );
  }

  return (
    <div className={className}>
      <Markdown rehypePlugins={[[rehypeHighlight, { detect: true, ignoreMissing: true }]]}>
        {children}
      </Markdown>
    </div>
  );
}

MarkdownContent.propTypes = {
  children: PropTypes.string,
  inline: PropTypes.bool,
  className: PropTypes.string,
};
