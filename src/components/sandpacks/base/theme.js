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
      size: '13px',
      lineHeight: '20px',
    },
  },
  dark: {
    colors: {
      surface1: '#191324',
      surface2: '#261e33',
      surface3: '#524763',
      clickable: '#aaaaaa',
      base: '#ffffff',
      disabled: '#aaaaaa',
      hover: '#ffffff',
      accent: '#82d8d8',
      error: '#e54b4b',
      errorSurface: '#191324',
    },
    syntax: {
      plain: '#ffffff',
      comment: {
        color: '#82d8d8',
        fontStyle: 'italic',
      },
      keyword: '#e54b4b',
      tag: '#ff26be',
      punctuation: '#9588aa',
      definition: '#82d8d8',
      property: '#82d8d8',
      static: '#82d8d8',
      string: '#a8fe39',
    },
    font: {
      body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      mono: '"MonoLisa", "Fira Mono", "DejaVu Sans Mono", Menlo, Consolas, "Liberation Mono", Monaco, "Lucida Console", monospace',
      size: '13px',
      lineHeight: '20px',
    },
  },
};

export default theme;
