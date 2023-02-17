import React from 'react';
import ReactSandpack from '../../components/sandpacks/ReactSandpack';

const files = {
  'jsx.js': {
    code: `const element = (
  <div className="container">
    <h1>React</h1>
    <p>
      The <strong>best tool</strong> for building UI
    </p>
  </div>
);

// abaikan kode di bawah ini
export default element;`,
    hidden: false,
    active: true,
  },
  'App.js': {
    code: `import jsx from './jsx';

export default function App() {
  return jsx;
}`,
    hidden: true,
  },
};
function JSXSample04() {
  return (
    <ReactSandpack
      files={files}
      options={{
        editorWidthPercentage: 65,
      }}
    />
  );
}

export default JSXSample04;
