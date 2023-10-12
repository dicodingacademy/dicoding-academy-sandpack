import React from 'react';
import WebComponentSandpack from '../../../components/sandpacks/WebComponentSandpack';

const files = {
  'index.html': {
    hidden: false,
    code: `\
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Shadow DOM Tanpa Custom Element</title>
    
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <h1>Ini adalah konten &lt;h1&gt; dalam shadow DOM</h1>

    <script src="main.js"></script>
  </body>
</html>
`,
  },
  'styles.css': {
    hidden: false,
    code: `\
h1 {
  color: red;
}
`,
  },
  'main.js': {
    hidden: false,
    active: true,
    code: `\
// Membuat shadow Host dengan <div>
const divElement = document.createElement('div');

// Membuat element untuk dimasukkan dalam shadow tree
const headingElement = document.createElement('h1');
headingElement.textContent = 'Ini adalah konten <h1> dalam shadow DOM';

// Membuat/melampirkan shadow root pada shadow host
// Caranya: mengatur mode shadow dengan \`open\`
const divElementShadowRoot = divElement.attachShadow({ mode: 'open' });

// Membuat element <style> untuk styling elemen dari dalam shadow tree
const styleElement = document.createElement('style');
styleElement.textContent = 'h1 { color: green; }';

// Memasukkan element ke dalam shadow tree
// Menjadi child element dari shadow root. Shadow root seperti <html>
divElementShadowRoot.append(styleElement, headingElement);

// Memasukkan shadow host (elemen) ke regular DOM (DOM utama)
document.body.appendChild(divElement);

// Tampilkan object shadow root
console.log(divElement);
console.log(headingElement);
console.log(styleElement);
console.log(divElementShadowRoot);
`,
  },
};

function ShadowDOMWithoutCustomElement08() {
  return (
    <WebComponentSandpack
      files={files}
      options={{
        showConsole: true,
        editorWidthPercentage: 55,
      }}
    />
  );
}

export default ShadowDOMWithoutCustomElement08;
