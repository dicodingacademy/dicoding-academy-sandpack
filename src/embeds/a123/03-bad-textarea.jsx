import React from 'react';
import VanillaSandpack from '../../components/sandpacks/VanillaSandpack';

const files = {
  'index.html': {
    hidden: false,
    active: true,
    code: `\
<input
  type="text"
  value="Belajar
  Dasar
  Pemrograman
  Web"
/>
`,
  },
  'index.js': {
    hidden: true,
    code: `\
const button = document.createElement("button");
const paragraph = document.createElement("p");
const input = document.querySelector("input");

button.innerText = "Submit";

button.addEventListener("click", () => {
  paragraph.innerText = input.value;
});

document.body.appendChild(button);
document.body.appendChild(paragraph);
`,
  },
};

function BadTextarea03() {
  return (
    <VanillaSandpack files={files} />
  );
}

export default BadTextarea03;
