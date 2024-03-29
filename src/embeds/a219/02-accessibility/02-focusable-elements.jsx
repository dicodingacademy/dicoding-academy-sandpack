import React from 'react';
import StaticWebSandpackPreviewOnly from '../../../components/sandpacks/StaticWebSandpackPreviewOnly';

const files = {
  'index.html': {
    hidden: false,
    active: true,
    code: `\
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title>Focusable element</title>
  </head>
  <body>
    <h2>Checkbox</h2>
    <input id="checkbox" type="checkbox"/>
    <label for="checkbox">Saya setuju!</label>

    <h2>Radio Button</h2>
    <input id="radio1" type="radio" name="radio" value="0"/>
    <label for="radio1">Jeruk</label>
    <input id="radio2" type="radio" name="radio" value="0"/>
    <label for="radio2">Mangga</label>
    <input id="radio3" type="radio" name="radio" value="0"/>
    <label for="radio3">Melon</label>

    <h2>Text Input</h2>
    <input id="textinput" type="text" placeholder="Nama Depan">

    <h2>Text Area</h2>
    <textarea style="min-height: 100px" placeholder="Alamat"></textarea>

    <h2>Elemen dengan <code>contenteditable="true"</code> properties </h2>
    <div contenteditable="true" style="border: 1px solid black; width: 150px">Coba edit text ini!</div>

    <h2>Select Option</h2>
    <select>
      <option>Jeruk</option>
      <option>Mangga</option>
      <option>Apel</option>
      <option>Semangka</option>
      <option>Jambu</option>
    </select>

    <h2>Anchor (Navigation)</h2>
    <a href="https://dicoding.com">Menuju dicoding.com</a>

    <h2>Tombol</h2>
    <button>Coba click saya!</button>

    <h2>Lainnya</h2>
    <input type="date"><br><br>
    <label for="points">Points (between 0 and 10):</label><br>
    <input type="range" id="points" name="points" min="0" max="10"> <br>
    <input type="color">
  </body>
</html>
`,
  },
};

function FocusableElements02() {
  return (
    <StaticWebSandpackPreviewOnly
      files={files}
    />
  );
}

export default FocusableElements02;
