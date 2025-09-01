/* eslint-disable react/no-array-index-key */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable object-curly-newline */

import './style.css';

import React, { useState, useEffect, useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';
import { toast, ToastContainer } from 'react-toastify';
import Markdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/github.css';
import { toastOption } from '../../../utils';
import ActivitiesContainer from '../commons/ActivitiesContainer';

// Context to supply latest values to stable Markdown renderers without remounting
const FillBlankContext = React.createContext({
  userAnswers: [],
  answers: [],
  correctness: [],
  onChange: () => {},
});

function InputInline({ answerIndex }) {
  const ctx = React.useContext(FillBlankContext);
  const expectedLength = ctx.answers[answerIndex]?.length || 5;
  const correct = ctx.correctness.length > 0 ? !!ctx.correctness[answerIndex] : null;
  const className = `input-container${correct === null ? '' : (correct ? ' correct' : ' incorrect')}`;
  const value = ctx.userAnswers[answerIndex] || '';

  return (
    <span className={className}>
      <input
        type="text"
        value={value}
        onChange={(e) => ctx.onChange(answerIndex, e.target.value)}
        style={{ width: `${expectedLength * 1}em` }}
        maxLength={expectedLength + 5}
      />
    </span>
  );
}

function FillInTheBlank({
  template, answers, storageKey, hint, instructionText,
}) {
  const [userAnswers, setUserAnswers] = useState([]);
  const [attempts, setAttempts] = useState(0);
  const [correctness, setCorrectness] = useState([]);

  useEffect(() => {
    if (storageKey !== 'temporary') {
      const savedAnswers = localStorage.getItem(storageKey);

      if (savedAnswers) {
        setUserAnswers(JSON.parse(savedAnswers));
        return;
      }
    }

    setUserAnswers(new Array(answers.length).fill(''));
  }, [answers.length, storageKey]);

  const handleInputChange = useCallback((index, value) => {
    setUserAnswers((prev) => {
      const newAnswers = [...prev];
      newAnswers[index] = value;
      try {
        localStorage.setItem(storageKey, JSON.stringify(newAnswers));
      } catch (e) {
        // ignore storage errors
      }
      return newAnswers;
    });
  }, [storageKey]);

  const providerValue = useMemo(() => ({
    userAnswers,
    answers,
    correctness,
    onChange: handleInputChange,
  }), [userAnswers, answers, correctness, handleInputChange]);

  const checkAnswers = () => {
    const results = userAnswers.map(
      (answer, index) => (answer || '').toLowerCase() === (answers[index] || '').toLowerCase(),
    );

    setCorrectness(results);
    const isAllCorrect = results.every((result) => result);

    if (!isAllCorrect) {
      const newAttempts = attempts + 1;
      setAttempts(newAttempts);

      if (newAttempts >= 3) {
        toast.warn(`Petunjuk: ${hint}`, toastOption);
        return;
      }

      toast.error('Jawaban belum tepat. Coba lagi ya!', toastOption);
      return;
    }

    toast.success('Jawaban benar.', toastOption);
  };

  const resetAnswers = () => {
    const emptyAnswers = new Array(answers.length).fill('');
    setUserAnswers(emptyAnswers);
    setAttempts(0);
    localStorage.setItem(storageKey, JSON.stringify(emptyAnswers));
    setCorrectness([]);
  };

  // Render inputs inline within markdown by replacing {n} placeholders in text nodes
  const PLACEHOLDER_REGEX = /\{(\d+)}/g;

  const renderInput = (answerIndex, key) => (
    <InputInline key={key} answerIndex={answerIndex} />
  );

  const processChildren = (children) => {
    const result = [];

    React.Children.forEach(children, (child) => {
      if (typeof child === 'string') {
        const text = child;
        let lastIndex = 0;
        let match;
        // Reset regex state
        PLACEHOLDER_REGEX.lastIndex = 0;
        // Iterate over all {n} occurrences
        // eslint-disable-next-line no-cond-assign
        while ((match = PLACEHOLDER_REGEX.exec(text)) !== null) {
          const before = text.slice(lastIndex, match.index);
          if (before) result.push(before);
          const placeholderNumber = parseInt(match[1], 10);
          const answerIndex = placeholderNumber - 1;
          result.push(renderInput(answerIndex, `${answerIndex}-${match.index}`));
          lastIndex = match.index + match[0].length;
        }
        const after = text.slice(lastIndex);
        if (after) result.push(after);
      } else if (Array.isArray(child)) {
        result.push(...processChildren(child));
      } else if (React.isValidElement(child)) {
        // Recursively process children of React elements (e.g., spans from syntax highlighter)
        const hasChildren = Object.prototype.hasOwnProperty.call(child.props || {}, 'children');
        if (hasChildren && child.props.children) {
          const processed = processChildren(child.props.children);
          result.push(React.cloneElement(child, { ...child.props, children: processed }));
        } else {
          result.push(child);
        }
      } else {
        result.push(child);
      }
    });

    return result;
  };

  const makeRenderer = (Tag) => function Renderer(props) {
    const { children, ...rest } = props;
    return (
      <Tag {...rest}>
        {processChildren(children)}
      </Tag>
    );
  };

  // Memoize components map to avoid re-creating on each render
  const markdownComponents = useMemo(() => ({
    // Process common container/inline elements, including code/pre
    p: makeRenderer('p'),
    li: makeRenderer('li'),
    span: makeRenderer('span'),
    strong: makeRenderer('strong'),
    em: makeRenderer('em'),
    blockquote: makeRenderer('blockquote'),
    h1: makeRenderer('h1'),
    h2: makeRenderer('h2'),
    h3: makeRenderer('h3'),
    h4: makeRenderer('h4'),
    h5: makeRenderer('h5'),
    h6: makeRenderer('h6'),
    code: ({ inline, className, children, ...props }) => {
      const content = processChildren(children);
      if (inline) {
        return (
          // inline code
          <code className={className} {...props}>
            {content}
          </code>
        );
      }
      // fenced code block
      return (
        <pre className={className ? `code-block ${className}` : 'code-block'}>
          <code className={className} {...props}>
            {content}
          </code>
        </pre>
      );
    },
  }), []);

  return (
    <ActivitiesContainer>
      <ToastContainer />
      <p className="activities__instructions">{instructionText}</p>
      <div className="fill-blank">
        <div className="fill-blank-text">
          <FillBlankContext.Provider value={providerValue}>
            <Markdown
              rehypePlugins={[[rehypeHighlight, { detect: true, ignoreMissing: true }]]}
              components={markdownComponents}
            >
              {template}
            </Markdown>
          </FillBlankContext.Provider>
        </div>
      </div>

      <div className="buttons">
        <button type="button" onClick={resetAnswers} className="btn btn-secondary">
          Reset
        </button>
        <button type="button" onClick={checkAnswers} className="btn btn-primary">
          Periksa jawaban
        </button>
      </div>
    </ActivitiesContainer>
  );
}

// define prop-types
FillInTheBlank.propTypes = {
  template: PropTypes.string.isRequired,
  answers: PropTypes.arrayOf(PropTypes.string).isRequired,
  storageKey: PropTypes.string,
  hint: PropTypes.string.isRequired,
  instructionText: PropTypes.string,
};

FillInTheBlank.defaultProps = {
  storageKey: 'temporary',
  instructionText: 'Lengkapi kalimat berikut dengan kata yang tepat.',
};

export default FillInTheBlank;
