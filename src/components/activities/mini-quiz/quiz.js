export const SCHEMA_VERSION = 1;

export const QUIZ_TYPES = {
  TRUE_FALSE: 'true-false',
  SINGLE: 'single',
  MULTIPLE: 'multiple',
};

export const MIN_OPTIONS = 2;
export const MAX_OPTIONS = 4;

// Stable ids for choice options. Saved progress refers to these, not to indexes.
export const OPTION_IDS = ['a', 'b', 'c', 'd'];

export const TRUE_FALSE_OPTIONS = [
  { id: 'true', text: 'Benar' },
  { id: 'false', text: 'Salah' },
];

export const DEFAULT_INSTRUCTIONS = {
  [QUIZ_TYPES.TRUE_FALSE]: 'Tentukan apakah pernyataan berikut benar atau salah.',
  [QUIZ_TYPES.SINGLE]: 'Pilih satu jawaban yang paling tepat.',
  [QUIZ_TYPES.MULTIPLE]: 'Pilih semua jawaban yang benar.',
};

export const TEMPORARY_STORAGE_KEY = 'temporary';

export function isQuizType(type) {
  return Object.values(QUIZ_TYPES).includes(type);
}

export function nextOptionId(options) {
  return OPTION_IDS.find((id) => !options.some((option) => option.id === id));
}

export function createTrueFalseOptions(answer) {
  return TRUE_FALSE_OPTIONS.map((option) => ({ ...option, isCorrect: option.id === answer }));
}

export function getTrueFalseAnswer(options) {
  const correct = options.find((option) => option?.isCorrect);
  return correct?.id === 'false' ? 'false' : 'true';
}

// Turns options from an untrusted payload into choice options with fresh, stable ids.
export function normalizeChoiceOptions(options) {
  return options.slice(0, MAX_OPTIONS).map((option, index) => ({
    id: OPTION_IDS[index],
    text: typeof option?.text === 'string' ? option.text : '',
    isCorrect: option?.isCorrect === true,
  }));
}

// A single-answer question can only have one correct option: keep the first one.
export function keepFirstCorrect(options) {
  const firstCorrectId = options.find((option) => option.isCorrect)?.id;
  return options.map((option) => ({ ...option, isCorrect: option.id === firstCorrectId }));
}

export function toggleCorrectOption(type, options, id) {
  return options.map((option) => {
    if (type !== QUIZ_TYPES.MULTIPLE) {
      return { ...option, isCorrect: option.id === id };
    }
    return option.id === id ? { ...option, isCorrect: !option.isCorrect } : option;
  });
}

// crypto.randomUUID only exists in secure contexts (HTTPS or localhost).
function createStorageKey() {
  const id = typeof crypto.randomUUID === 'function'
    ? crypto.randomUUID()
    : `${Date.now()}-${Math.random().toString(36).slice(2)}`;
  return `mini-quiz-${id}`;
}

// Builds the payload the user page reads, so the format is defined next to validateQuiz.
export function createQuizPayload({
  type, instruction, question, options,
}) {
  return {
    v: SCHEMA_VERSION,
    type,
    instruction: instruction.trim(),
    question: question.trim(),
    options: options.map((option) => ({ ...option, text: option.text.trim() })),
    storageKey: createStorageKey(),
  };
}

/**
 * Returns an object of error messages keyed by field (`type`, `question`, `options`).
 * An empty object means the quiz is valid.
 */
export function validateQuiz(quiz) {
  if (!quiz || typeof quiz !== 'object') {
    return { type: 'Data kuis tidak valid' };
  }

  const errors = {};
  const { type, question, options } = quiz;

  if (!isQuizType(type)) {
    errors.type = 'Tipe soal tidak dikenali';
  }

  if (typeof question !== 'string' || !question.trim()) {
    errors.question = 'Pertanyaan wajib diisi';
  }

  // Optional fields still need the right type: a non-string would crash while rendering,
  // where the page's try/catch can't reach.
  if (quiz.instruction != null && typeof quiz.instruction !== 'string') {
    errors.instruction = 'Instruksi harus berupa teks';
  }

  if (quiz.storageKey != null && typeof quiz.storageKey !== 'string') {
    errors.storageKey = 'storageKey harus berupa teks';
  }

  if (!Array.isArray(options) || options.some((option) => !option || typeof option !== 'object')) {
    errors.options = 'Opsi jawaban tidak valid';
    return errors;
  }

  const expectedCount = type === QUIZ_TYPES.TRUE_FALSE ? MIN_OPTIONS : null;
  const correctCount = options.filter((option) => option.isCorrect === true).length;
  const texts = options.map((option) => (typeof option.text === 'string' ? option.text.trim() : ''));
  const ids = options.map((option) => option.id);

  if (expectedCount !== null && options.length !== expectedCount) {
    errors.options = 'Soal Benar/Salah harus memiliki tepat 2 opsi';
  } else if (options.length < MIN_OPTIONS || options.length > MAX_OPTIONS) {
    errors.options = `Jumlah opsi harus ${MIN_OPTIONS}–${MAX_OPTIONS}`;
  } else if (ids.some((id) => typeof id !== 'string' || !id) || new Set(ids).size !== ids.length) {
    errors.options = 'Setiap opsi harus memiliki id yang unik';
  } else if (texts.some((text) => !text)) {
    errors.options = `${texts.filter((text) => !text).length} opsi masih kosong`;
  } else if (new Set(texts).size !== texts.length) {
    errors.options = 'Teks opsi tidak boleh sama';
  } else if (type === QUIZ_TYPES.MULTIPLE && correctCount < 1) {
    errors.options = 'Tandai minimal satu jawaban benar';
  } else if (type !== QUIZ_TYPES.MULTIPLE && correctCount !== 1) {
    errors.options = 'Tandai tepat satu jawaban benar';
  }

  return errors;
}

/**
 * Compares the selection against the answer key.
 * `wrongIds` only contains selected options, so unselected wrong options stay hidden.
 */
export function evaluateAnswer(options, selectedIds) {
  const correctIds = options.filter((option) => option.isCorrect).map((option) => option.id);
  const wrongIds = selectedIds.filter((id) => !correctIds.includes(id));
  const missingCount = correctIds.filter((id) => !selectedIds.includes(id)).length;

  return {
    isCorrect: wrongIds.length === 0 && missingCount === 0,
    wrongIds,
    missingCount,
  };
}

// Fisher–Yates; sort(() => Math.random() - 0.5) gives a biased order.
export function shuffle(items) {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

// Changes whenever something that affects grading changes, but not when only text changes.
export function getAnswerSignature(type, options) {
  return `${type}:${options.map((option) => `${option.id}${option.isCorrect ? '+' : '-'}`).join(',')}`;
}
