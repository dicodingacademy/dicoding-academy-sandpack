/**
 * Build your own theme here: https://sandpack.codesandbox.io/theme
 */

const theme = {
  light: {
    colors: {
      surface1: '#ffffff',
      surface2: '#EFEFEF',
      surface3: '#F3F3F3',
      clickable: '#808080',
      base: '#323232',
      disabled: '#C5C5C5',
      hover: '#4D4D4D',
      accent: '#0971F1',
      error: '#ff453a',
      errorSurface: '#ffeceb',
    },
    syntax: {
      plain: '#151515',
      comment: {
        color: '#999',
        fontStyle: 'italic',
      },
      keyword: '#0971F1',
      tag: '#d28cf6',
      punctuation: '#3B3B3B',
      definition: '#042d60',
      property: '#0971F1',
      static: '#FF453A',
      string: '#bf5af2',
    },
    font: {
      body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      mono: '"Fira Mono", "DejaVu Sans Mono", Menlo, Consolas, "Liberation Mono", Monaco, "Lucida Console", monospace',
      size: '14px',
      lineHeight: '20px',
    },
  },
  dark: {
    colors: {
      surface1: '#151515',
      surface2: '#252525',
      surface3: '#2F2F2F',
      clickable: '#999999',
      base: '#808080',
      disabled: '#4D4D4D',
      hover: '#C5C5C5',
      accent: '#90e86f',
      error: '#E1CFF8',
      errorSurface: '#b08df8',
    },
    syntax: {
      plain: '#f0fdaf',
      comment: {
        color: '#757575',
        fontStyle: 'italic',
      },
      keyword: '#e5fd78',
      tag: '#f0fdaf',
      punctuation: '#ffffff',
      definition: '#eeeeee',
      property: '#90e86f',
      static: '#ffffff',
      string: '#dafecf',
    },
    font: {
      body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      mono: '"Fira Mono", "DejaVu Sans Mono", Menlo, Consolas, "Liberation Mono", Monaco, "Lucida Console", monospace',
      size: '13px',
      lineHeight: '20px',
    },
  },
};

export default theme;
