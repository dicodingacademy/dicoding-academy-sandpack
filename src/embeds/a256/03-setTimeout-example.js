import React from 'react';
import ReactSandpack from '../../components/sandpacks/ReactSandpack';

const files = {
  'App.js': {
    code: `import "./main";

export default function App() {
  return <h1>Lihat output di console 👇🏻</h1>
}`,
    hidden: true,
  },
  'main.js': {
    code: `console.log("Selamat datang!");

setTimeout(() => {
  console.log("Terima kasih sudah mampir, silakan datang kembali!");
}, 3000);

console.log("Ada yang bisa dibantu?");`,
    hidden: true,
    active: true,
  },
};

function SetTimeoutExample03() {
  return (
    <ReactSandpack
      files={files}
      options={{
        showConsole: true,
        autorun: false,
      }}
    />
  );
}

export default SetTimeoutExample03;
