import React from 'react';
import StaticWebSandpack from '../../components/sandpacks/StaticWebSandpack';

const files = {
  'index.html': {
    hidden: false,
    active: true,
    code: `\
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Form World</title>

    <link rel="stylesheet" href="styles.css" >
  </head>
  <body>
    <div class="contents">
      <h2 align="center">Isi data diri</h2>

      <div class="formContent">
        <form id="formDataDiri">
          <div class="form-element">
            <label for="inputNama">Nama:</label>
            <br>
            <input id="inputNama" type="text" name="nama" placeholder="Nama Anda" required>
            <br>
          </div>

          <div class="form-element">
            <label for="inputDomisili">Domisili:</label>
            <br>
            <input
              id="inputDomisili"
              type="text"
              name="domisili"
              placeholder="Domisili Anda"
              required
            >
            <br>
          </div>

          <div class="form-element">
            <input id="submitButton" type="submit" value="Submit Data">
          </div>
        </form>
      </div>

      <h3 id="messageAfterSubmit"></h3>
    </div>

    <script src="index.js"></script>
  </body>
</html>
`,
  },
  'styles.css': {
    hidden: false,
    code: `\
.contents {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 2px solid black;
  padding: 15px;
}

.form-element {
  margin: 8px;
  text-align: left;
}
`,
  },
  'index.js': {
    hidden: false,
    code: `\
const submitAction = document.getElementById('formDataDiri');

submitAction.addEventListener('submit', function (event) {
  const inputNama = document.getElementById('inputNama').value;
  const inputDomisili = document.getElementById('inputDomisili').value;
  const hiddenMessage = \`Halo, \${inputNama}. Bagaimana cuacanya di \${inputDomisili}?\`;

  document.getElementById('messageAfterSubmit').innerText = hiddenMessage;
  event.preventDefault();
});
`,
  },
};

function FormOnsubmit04() {
  return <StaticWebSandpack files={files} />;
}

export default FormOnsubmit04;
