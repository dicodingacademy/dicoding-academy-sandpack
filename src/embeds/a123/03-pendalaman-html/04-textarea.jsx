import React from 'react';
import VanillaSandpack from '../../../components/sandpacks/VanillaSandpack';

const files = {
  'index.html': {
    hidden: false,
    active: true,
    code: `\
<textarea rows="6" cols="16">
Belajar
Dasar
Pemrograman
Web
</textarea>
`,
  },
  'index.js': {
    hidden: true,
    code: `\
const button = document.createElement("button");
const paragraph = document.createElement("p");
const input = document.querySelector("textarea");

input.rows = 4;

button.innerText = "Submit";

button.addEventListener("click", () => {
  paragraph.innerText = input.value;
});

document.body.appendChild(button);
document.body.appendChild(paragraph);
`,
  },
};

function Textarea04() {
  return (
    <VanillaSandpack files={files} />
  );
}

export default Textarea04;
