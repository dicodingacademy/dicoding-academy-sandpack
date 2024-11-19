import React from 'react';
import StaticWebSandpack from '../../../components/sandpacks/StaticWebSandpack';

const files = {
  'index.html': {
    hidden: false,
    active: true,
    code: `\
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Focusable Elements</title>
</head>
<body>
  <section>
    <h2>Text Input</h2>

    <input id="textinput" type="text" placeholder="Nama Depan">
  </section>

  <section>
    <h2>Checkbox</h2>

    <input id="checkbox" type="checkbox">
    <label for="checkbox">Saya setuju!</label>
  </section>

  <section>
    <h2>Radio Button</h2>

    <input id="radio1" type="radio" name="radio" value="0">
    <label for="radio1">Jeruk</label>
    <input id="radio2" type="radio" name="radio" value="0">
    <label for="radio2">Mangga</label>
    <input id="radio3" type="radio" name="radio" value="0">
    <label for="radio3">Melon</label>
  </section>

  <section>
    <h2>Select Option</h2>

    <select>
      <option>Jeruk</option>
      <option>Mangga</option>
      <option>Apel</option>
      <option>Semangka</option>
      <option>Jambu</option>
    </select>
  </section>

  <section>
    <h2>Text Area</h2>

    <textarea style="min-height: 100px;" placeholder="Alamat"></textarea>
  </section>

  <section>
    <h2>Elemen dengan <code>contenteditable="true"</code></h2>

    <div contenteditable="true" style="border: 1px solid black; width: 150px;">
      Coba edit text ini!
    </div>
  </section>

  <section>
    <h2>Anchor (Navigation)</h2>
    <a href="https://dicoding.com" target="_blank">Menuju dicoding.com</a>
  </section>

  <section>
    <h2>Tombol</h2>
    <button>Coba click saya!</button>
  </section>

  <section>
    <h2>Lainnya</h2>

    <input type="date">
    <br><br>
    <label for="points">Points (between 0 and 10):</label>
    <br>
    <input type="range" id="points" name="points" min="0" max="10">
    <br>
    <input type="color">
  </section>
</body>
</html>
`,
  },
  'styles.css': {
    hidden: true,
    code: '',
  },
  'index.js': {
    hidden: true,
    code: '',
  },
};

export default function FocusableElements01() {
  return (
    <StaticWebSandpack
      files={files}
      options={{
        editorWidthPercentage: 55,
        showConsole: false,
      }}
    />
  );
}
