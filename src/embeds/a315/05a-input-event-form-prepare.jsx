import React from 'react';
import StaticWebSandpack from '../../components/sandpacks/StaticWebSandpack';

const files = {
  'index.html': {
    code: `\
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Form World</title>

    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <div class="contents">
      <h2 align="center">Input Event Form</h2>

      <div class="formContent">
        <form id="formDataDiri" autocomplete="off">
          <div class="form-element" id="fieldName">
            <label for="inputNama">Nama Panggilan:</label>
            <br />
            <input
              id="inputNama"
              type="text"
              name="nama"
              placeholder="Nama panggilan Anda"
              maxlength="15"
            />
            <br />
            <label id="notifikasiSisaKarakter">
              Sisa karakter: <span id="sisaKarakter"></span>
            </label>
          </div>

          <div class="form-element" id="fieldCopy">
            <label for="inputCopy"><i>Copy</i> tulisan ini:</label>
            <br />
            <input
              id="inputCopy"
              type="text"
              name="copy"
              value="Hello World!"
              readonly
            />
            <br />
          </div>

          <div class="form-element" id="fieldPaste">
            <label for="inputPaste"><i>Paste</i> tulisan di sini:</label>
            <br />
            <input
              id="inputPaste"
              type="text"
              name="paste"
              placeholder="Paste sesuatu di sini"
            />
            <br />
          </div>

          <div class="form-element" id="fieldCaptcha">
            <label for="inputCaptcha">Tulis <i>captcha</i> berikut.</label>
            <br />
            <img src="https://i.ibb.co/yy59QPB/Captcha.png" alt="Captcha" />
            <br />
            <input
              id="inputCaptcha"
              type="text"
              name="captcha"
              placeholder="Tulis captcha di sini"
            />
            <br />
            <p>
              Tekan Enter pada keyboard jika sudah selesai menulis
              <i>captcha</i>
            </p>
          </div>

          <div class="form-element" align="center">
            <input
              id="submitButton"
              type="submit"
              value="Submit Data"
              disabled
            />
          </div>
        </form>
      </div>
    </div>

    <script src="index.js"></script>
  </body>
</html>
`,
    hidden: false,
    active: true,
  },
  'styles.css': {
    code: `\
.contents {
  padding: 8px;
  border: 2px solid black;

  position: fixed;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);
}

.form-element {
  margin: 8px;
  text-align: left;
}

#notifikasiSisaKarakter {
  visibility: hidden;
}
`,
    hidden: false,
  },
  'index.js': {
    code: `\
document.addEventListener('DOMContentLoaded', function () {
  const inputMaxLengthOnLoad = document.getElementById('inputNama').maxLength;
  document.getElementById('sisaKarakter').innerText = inputMaxLengthOnLoad;
});
`,
    hidden: false,
  },
};

function InputEventFormPrepare05A() {
  return <StaticWebSandpack files={files} />;
}

export default InputEventFormPrepare05A;