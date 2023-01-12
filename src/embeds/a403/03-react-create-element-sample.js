import React from 'react';
import ReactSandpack from '../../components/sandpacks/ReactSandpack';

const files = {
  'divContainer.js': {
    code: `import React from 'react';

const heading = React.createElement('h1', null, 'React');
const strong = React.createElement('strong', null, 'best tool');
const paragraph = React.createElement('p', null, ['The ', strong, ' for building UI']);
const divContainer = React.createElement('div', { className: 'container' }, [heading, paragraph]);

// abaikan kode di bawah ini
export default divContainer;`,
    hidden: false,
    active: true,
  },
  'App.js': {
    code: `import divContainer from './divContainer';

export default function App() {
  return divContainer;
}`,
    hidden: true,
  },
};
function ReactCreateElementSample03() {
  return (
    <ReactSandpack
      files={files}
      options={{
        editorWidthPercentage: 65,
      }}
    />
  );
}

export default ReactCreateElementSample03;
