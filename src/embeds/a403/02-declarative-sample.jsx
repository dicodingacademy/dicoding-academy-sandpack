import React from 'react';
import ReactSandpack from '../../components/sandpacks/ReactSandpack';

const files = {
  'Contacts.js': {
    code: `function Contacts() {
 const names = ['Asep', 'Alex', 'Bagus', 'Cika', 'Doni'];
 
 return (
   <ol className='contacts'>
     {names.map((name) => <li>{name}</li>)}
   </ol>
 );
}

export default Contacts;`,
    hidden: false,
    active: true,
  },
  'App.js': {
    code: `import Contacts from './Contacts';

export default function App() {
  return <Contacts />
}`,
    hidden: true,
  },
};

function DeclarativeSample02() {
  return (
    <ReactSandpack
      files={files}
      options={{ editorWidthPercentage: 75, showConsoleButton: false }}
    />
  );
}

export default DeclarativeSample02;
