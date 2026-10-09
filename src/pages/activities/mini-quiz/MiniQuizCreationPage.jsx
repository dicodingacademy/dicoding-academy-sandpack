import React, {
  useEffect, useMemo, useReducer, useState,
} from 'react';
import MiniQuiz from '../../../components/activities/mini-quiz';
import ResizableLayout from '../../../components/activities/commons/ResizableLayout';
import AccessibleFormField from '../../../components/activities/commons/AccessibleFormField';
import LoadFromBase64 from '../../../components/activities/commons/LoadFromBase64';
import {
  DEFAULT_INSTRUCTIONS,
  MAX_OPTIONS,
  MIN_OPTIONS,
  QUIZ_TYPES,
  TRUE_FALSE_OPTIONS,
  createQuizPayload,
  createTrueFalseOptions,
  getAnswerSignature,
  getTrueFalseAnswer,
  isQuizType,
  keepFirstCorrect,
  nextOptionId,
  normalizeChoiceOptions,
  toggleCorrectOption,
  validateQuiz,
} from '../../../components/activities/mini-quiz/quiz';
import { generateIframe, unicodeToBase64 } from '../../../utils';
import useInput from '../../../hooks/useInput';

const TYPE_LABELS = {
  [QUIZ_TYPES.TRUE_FALSE]: 'Benar / Salah',
  [QUIZ_TYPES.SINGLE]: 'Pilih satu jawaban',
  [QUIZ_TYPES.MULTIPLE]: 'Pilih beberapa jawaban',
};

const ACTIONS = {
  CHANGE_TYPE: 'CHANGE_TYPE',
  SET_FIELD: 'SET_FIELD',
  ADD_OPTION: 'ADD_OPTION',
  REMOVE_OPTION: 'REMOVE_OPTION',
  UPDATE_OPTION_TEXT: 'UPDATE_OPTION_TEXT',
  TOGGLE_CORRECT: 'TOGGLE_CORRECT',
  LOAD: 'LOAD',
};

const initialFormState = {
  type: QUIZ_TYPES.SINGLE,
  instruction: DEFAULT_INSTRUCTIONS[QUIZ_TYPES.SINGLE],
  question: '',
  // Kept apart so switching type back and forth doesn't throw away what the admin typed.
  choiceOptions: [],
  trueFalseAnswer: 'true',
};

function loadForm(state, data) {
  const type = isQuizType(data.type) ? data.type : QUIZ_TYPES.SINGLE;
  const next = {
    ...state,
    type,
    question: typeof data.question === 'string' ? data.question : state.question,
    instruction: typeof data.instruction === 'string' ? data.instruction : state.instruction,
  };

  if (!Array.isArray(data.options)) return next;

  if (type === QUIZ_TYPES.TRUE_FALSE) {
    return { ...next, trueFalseAnswer: getTrueFalseAnswer(data.options) };
  }

  return { ...next, choiceOptions: normalizeChoiceOptions(data.options) };
}

function formReducer(state, action) {
  switch (action.type) {
    case ACTIONS.CHANGE_TYPE: {
      const { quizType } = action;

      return {
        ...state,
        type: quizType,
        // Only swap the instruction if the admin hasn't customised it.
        instruction: state.instruction === DEFAULT_INSTRUCTIONS[state.type]
          ? DEFAULT_INSTRUCTIONS[quizType]
          : state.instruction,
        choiceOptions: quizType === QUIZ_TYPES.SINGLE
          ? keepFirstCorrect(state.choiceOptions)
          : state.choiceOptions,
      };
    }
    case ACTIONS.SET_FIELD:
      return { ...state, [action.field]: action.value };
    case ACTIONS.ADD_OPTION:
      if (state.choiceOptions.length >= MAX_OPTIONS) return state;
      return {
        ...state,
        choiceOptions: [
          ...state.choiceOptions,
          { id: nextOptionId(state.choiceOptions), text: '', isCorrect: false },
        ],
      };
    case ACTIONS.REMOVE_OPTION:
      return {
        ...state,
        choiceOptions: state.choiceOptions.filter((option) => option.id !== action.id),
      };
    case ACTIONS.UPDATE_OPTION_TEXT:
      return {
        ...state,
        choiceOptions: state.choiceOptions.map((option) => (
          option.id === action.id ? { ...option, text: action.text } : option
        )),
      };
    case ACTIONS.TOGGLE_CORRECT:
      return {
        ...state,
        choiceOptions: toggleCorrectOption(state.type, state.choiceOptions, action.id),
      };
    case ACTIONS.LOAD:
      return loadForm(state, action.data);
    default:
      return state;
  }
}

export default function MiniQuizCreationPage() {
  const [form, dispatch] = useReducer(formReducer, initialFormState);
  const {
    type, instruction, question, choiceOptions, trueFalseAnswer,
  } = form;

  const [height, onHeightChange] = useInput('450');
  // Remember what the code was generated from; any later edit hides it so a stale
  // embed (e.g. with an old answer key) can't be copied by mistake.
  const [generated, setGenerated] = useState({ code: '', form: null, height: null });
  const embedCode = generated.form === form && generated.height === height ? generated.code : '';

  const options = useMemo(() => (
    type === QUIZ_TYPES.TRUE_FALSE ? createTrueFalseOptions(trueFalseAnswer) : choiceOptions
  ), [type, choiceOptions, trueFalseAnswer]);

  const errors = useMemo(
    () => validateQuiz({ type, question, options }),
    [type, question, options],
  );
  const hasErrors = Object.keys(errors).length > 0;

  // Like the other creators, only report option problems once an option has content,
  // so a fresh form isn't covered in errors. Generate still requires a valid quiz.
  const hasOptionContent = choiceOptions.some((option) => option.text.trim());

  useEffect(() => {
    const activitiesContainer = document.querySelector('.activities-container');
    if (activitiesContainer) {
      onHeightChange(activitiesContainer.offsetHeight.toString());
    }
  }, [type, question, instruction, options, onHeightChange]);

  const setField = (field, value) => dispatch({ type: ACTIONS.SET_FIELD, field, value });

  const handleLoadFromBase64 = (data) => {
    dispatch({ type: ACTIONS.LOAD, data });
  };

  const generateEmbedCode = () => {
    if (hasErrors) return;

    const quiz = createQuizPayload({
      type, instruction, question, options,
    });
    const data = unicodeToBase64(JSON.stringify(quiz));

    setGenerated({
      code: generateIframe(
        `${window.location.protocol}//${window.location.host}/activities/mini-quiz?data=${encodeURIComponent(data)}`,
        'Dicoding Learning Activities - Mini Quiz',
        height,
      ),
      form,
      height,
    });
  };

  const formPanel = (
    <div className="creation-form">
      <header>
        <h1>Mini Quiz Generator</h1>
        <p>Buat satu soal kuis singkat yang dijawab siswa sampai benar</p>
      </header>

      <LoadFromBase64
        onLoad={handleLoadFromBase64}
        activityType="mini-quiz"
      />

      <form onSubmit={(e) => e.preventDefault()}>
        <fieldset>
          <legend>Tipe Soal</legend>
          <div className="mini-quiz-creator__choices">
            {Object.values(QUIZ_TYPES).map((quizType) => (
              <label
                key={quizType}
                htmlFor={`quiz-type-${quizType}`}
                className="mini-quiz-creator__choice"
              >
                <input
                  id={`quiz-type-${quizType}`}
                  type="radio"
                  name="quiz-type"
                  value={quizType}
                  checked={type === quizType}
                  onChange={() => dispatch({ type: ACTIONS.CHANGE_TYPE, quizType })}
                />
                {TYPE_LABELS[quizType]}
              </label>
            ))}
          </div>
        </fieldset>

        <AccessibleFormField
          id="instruction"
          label="Instruction Text"
          value={instruction}
          onChange={(e) => setField('instruction', e.target.value)}
          placeholder="Masukkan instruksi untuk siswa"
          helpText="Kalimat perintah yang ditampilkan di atas pertanyaan"
        />

        <AccessibleFormField
          id="question"
          label="Pertanyaan"
          type="textarea"
          value={question}
          onChange={(e) => setField('question', e.target.value)}
          placeholder="Tulis pertanyaan di sini"
          helpText="Mendukung Markdown formatting, termasuk inline code dan code block."
          required
          rows={4}
          showMarkdownToolbar
        />

        {type === QUIZ_TYPES.TRUE_FALSE ? (
          <fieldset>
            <legend>Jawaban Benar</legend>
            <div className="mini-quiz-creator__choices">
              {TRUE_FALSE_OPTIONS.map((option) => (
                <label
                  key={option.id}
                  htmlFor={`true-false-${option.id}`}
                  className="mini-quiz-creator__choice"
                >
                  <input
                    id={`true-false-${option.id}`}
                    type="radio"
                    name="true-false-answer"
                    value={option.id}
                    checked={trueFalseAnswer === option.id}
                    onChange={() => setField('trueFalseAnswer', option.id)}
                  />
                  {option.text}
                </label>
              ))}
            </div>
          </fieldset>
        ) : (
          <fieldset>
            <legend>Opsi Jawaban</legend>
            {hasOptionContent && errors.options && (
              <div className="form-field__error" role="alert">
                {errors.options}
              </div>
            )}

            {choiceOptions.length === 0 && (
              <p className="form-field__help">
                Belum ada opsi jawaban. Klik &quot;Add New Option&quot; untuk menambahkan opsi.
              </p>
            )}

            {choiceOptions.map((option, index) => (
              <div key={option.id} className="form-field__card">
                <h3>{`Opsi ${index + 1}`}</h3>

                <AccessibleFormField
                  id={`option-${option.id}-text`}
                  label="Teks Opsi"
                  type="textarea"
                  value={option.text}
                  onChange={(e) => dispatch({
                    type: ACTIONS.UPDATE_OPTION_TEXT, id: option.id, text: e.target.value,
                  })}
                  placeholder={`Masukkan opsi ${index + 1}`}
                  helpText="Mendukung Markdown inline, misalnya `kode`, **tebal**, atau *miring*."
                  required
                  rows={2}
                  showMarkdownToolbar
                  inlineMarkdown
                />

                <div className="mini-quiz-creator__option-actions">
                  <label
                    htmlFor={`option-${option.id}-correct`}
                    className="mini-quiz-creator__choice"
                  >
                    <input
                      id={`option-${option.id}-correct`}
                      type={type === QUIZ_TYPES.SINGLE ? 'radio' : 'checkbox'}
                      name="correct-option"
                      checked={option.isCorrect}
                      onChange={() => dispatch({ type: ACTIONS.TOGGLE_CORRECT, id: option.id })}
                    />
                    Jawaban benar
                  </label>

                  <button
                    type="button"
                    className="form-field__button form-field__button--secondary"
                    onClick={() => dispatch({ type: ACTIONS.REMOVE_OPTION, id: option.id })}
                    aria-label={`Hapus opsi ${index + 1}`}
                  >
                    Remove Option
                  </button>
                </div>
              </div>
            ))}

            <div className="form-actions">
              <button
                type="button"
                className="form-field__button form-field__button--primary"
                onClick={() => dispatch({ type: ACTIONS.ADD_OPTION })}
                disabled={choiceOptions.length >= MAX_OPTIONS}
              >
                Add New Option
              </button>
              <div className="form-field__help">
                {`Minimal ${MIN_OPTIONS} dan maksimal ${MAX_OPTIONS} opsi. Urutan opsi akan diacak untuk siswa.`}
              </div>
            </div>
          </fieldset>
        )}

        <AccessibleFormField
          id="height"
          label="Height (pixels)"
          type="number"
          value={height}
          onChange={onHeightChange}
          helpText="Tinggi iframe dalam pixel"
          min="300"
          max="1000"
        />

        <div className="form-actions">
          <button
            type="button"
            className="form-field__button form-field__button--primary"
            onClick={generateEmbedCode}
            disabled={hasErrors}
            aria-describedby="generate-help"
          >
            Generate Embed Code
          </button>
          <div id="generate-help" className="form-field__help">
            Pastikan pertanyaan, opsi, dan jawaban benar sudah diisi
          </div>
        </div>

        <AccessibleFormField
          id="embed-code"
          label="Embed Code"
          type="textarea"
          value={embedCode}
          readOnly
          placeholder="Embed code akan muncul di sini setelah generate"
          helpText="Salin kode ini untuk menyematkan aktivitas di halaman web"
          rows={4}
        />
      </form>
    </div>
  );

  const previewPanel = (
    <div className="creation-preview">
      <header>
        <h2>Preview</h2>
        <p>Pratinjau mini quiz yang akan dibuat</p>
      </header>

      <div role="region" aria-label="Mini quiz preview">
        {/* Remount when grading changes so the preview never shows a stale result. */}
        <MiniQuiz
          key={getAnswerSignature(type, options)}
          type={type}
          question={question}
          options={options}
          instructionText={instruction}
        />
      </div>
    </div>
  );

  return (
    <ResizableLayout
      leftPanel={formPanel}
      rightPanel={previewPanel}
      initialLeftWidth={45}
    />
  );
}
