/* eslint-disable react/jsx-props-no-spreading, react/no-unstable-nested-components */
import './style.css';

import React, {
  useState, useEffect, useMemo, useCallback,
} from 'react';
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
  let className = 'input-container';
  if (correct === true) {
    className += ' correct';
  } else if (correct === false) {
    className += ' incorrect';
  }
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

InputInline.propTypes = {
  answerIndex: PropTypes.number.isRequired,
};

// Extracted components to avoid nested component definitions
function MarkdownRenderer({
  Tag, children, processChildren, ...rest
}) {
  return (
    <Tag {...rest}>
      {processChildren(children)}
    </Tag>
  );
}

MarkdownRenderer.propTypes = {
  Tag: PropTypes.string.isRequired,
  children: PropTypes.node,
  processChildren: PropTypes.func.isRequired,
};

function CodeRenderer({
  inline, className, children, processChildren, ...props
}) {
  const content = processChildren(children);
  if (inline) {
    return (
      <code className={className} {...props}>
        {content}
      </code>
    );
  }
  return (
    <pre className={className ? `code-block ${className}` : 'code-block'}>
      <code className={className} {...props}>
        {content}
      </code>
    </pre>
  );
}

CodeRenderer.propTypes = {
  inline: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node,
  processChildren: PropTypes.func.isRequired,
};

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

  // Memoize components map to avoid re-creating on each render
  const markdownComponents = useMemo(() => ({
    // Process common container/inline elements, including code/pre
    p: (props) => <MarkdownRenderer Tag="p" processChildren={processChildren} {...props} />,
    li: (props) => <MarkdownRenderer Tag="li" processChildren={processChildren} {...props} />,
    span: (props) => <MarkdownRenderer Tag="span" processChildren={processChildren} {...props} />,
    strong: (props) => <MarkdownRenderer Tag="strong" processChildren={processChildren} {...props} />,
    em: (props) => <MarkdownRenderer Tag="em" processChildren={processChildren} {...props} />,
    blockquote: (props) => <MarkdownRenderer Tag="blockquote" processChildren={processChildren} {...props} />,
    h1: (props) => <MarkdownRenderer Tag="h1" processChildren={processChildren} {...props} />,
    h2: (props) => <MarkdownRenderer Tag="h2" processChildren={processChildren} {...props} />,
    h3: (props) => <MarkdownRenderer Tag="h3" processChildren={processChildren} {...props} />,
    h4: (props) => <MarkdownRenderer Tag="h4" processChildren={processChildren} {...props} />,
    h5: (props) => <MarkdownRenderer Tag="h5" processChildren={processChildren} {...props} />,
    h6: (props) => <MarkdownRenderer Tag="h6" processChildren={processChildren} {...props} />,
    code: (props) => <CodeRenderer processChildren={processChildren} {...props} />,

  }), [processChildren]);

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
