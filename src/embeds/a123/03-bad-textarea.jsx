import React from 'react';
import VanillaSandpack from '../../components/sandpacks/VanillaSandpack';

const files = {
  'index.html': {
    code: `\
<input
  type="text"
  value="Belajar
  Dasar
  Pemrograman
  Web"
/>
`,
    hidden: false,
    active: true,
  },
  'index.js': {
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
    hidden: true,
  },
};

function BadTextarea04() {
  return (
    <VanillaSandpack files={files} />
  );
}

export default BadTextarea04;
