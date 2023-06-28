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

    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <div class="contents">
      <h2 align="center">Input Event Form</h2>

      <div class="formContent">
        <form id="formDataDiri" autocomplete="off">
          <div class="form-element" id="fieldName">
            <label for="inputNama">Nama Panggilan:</label><br />
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
            <label for="inputCopy"><i>Copy</i> tulisan ini:</label><br />
            <input id="inputCopy" type="text" name="copy" value="Hello World!" readonly />
            <br />
          </div>

          <div class="form-element" id="fieldPaste">
            <label for="inputPaste"><i>Paste</i> tulisan di sini:</label><br />
            <input id="inputPaste" type="text" name="paste" placeholder="Paste sesuatu di sini" />
            <br />
          </div>

          <div class="form-element" id="fieldCaptcha">
            <label for="inputCaptcha">Tulis <i>captcha</i> berikut.</label><br />
            <img src="https://i.ibb.co/yy59QPB/Captcha.png" alt="Captcha" /><br />
            <input
              id="inputCaptcha"
              type="text"
              name="captcha"
              placeholder="Tulis captcha di sini"
            />
            <br />
            <p>Tekan Enter pada keyboard jika sudah selesai menulis <i>captcha</i></p>
          </div>

          <div class="form-element" align="center">
            <input id="submitButton" type="submit" value="Submit Data" disabled />
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

  document.getElementById('inputNama').addEventListener('input', function () {
    const jumlahKarakterDiketik = document.getElementById('inputNama').value.length;
    const jumlahKarakterMaksimal = document.getElementById('inputNama').maxLength;

    console.log('jumlahKarakterDiketik: ', jumlahKarakterDiketik);
    console.log('jumlahKarakterMaksimal: ', jumlahKarakterMaksimal);
    const sisaKarakterUpdate = jumlahKarakterMaksimal - jumlahKarakterDiketik;
    document.getElementById('sisaKarakter').innerText = sisaKarakterUpdate.toString();

    if (sisaKarakterUpdate === 0) {
      document.getElementById('sisaKarakter').innerText = 'Batas maksimal tercapai!';
    } else if (sisaKarakterUpdate <= 5) {
      document.getElementById('notifikasiSisaKarakter').style.color = 'red';
    } else {
      document.getElementById('notifikasiSisaKarakter').style.color = 'black';
    }
  });

  document.getElementById('inputNama').addEventListener('focus', function () {
    console.log('inputNama: focus');
    document.getElementById('notifikasiSisaKarakter').style.visibility = 'visible';
  });

  document.getElementById('inputNama').addEventListener('blur', function () {
    console.log('inputNama: blur');
    document.getElementById('notifikasiSisaKarakter').style.visibility = 'hidden';
  });

  document.getElementById('inputCaptcha').addEventListener('change', function () {
    console.log('inputChaptcha: change');
    const inputCaptcha = document.getElementById('inputCaptcha').value;
    const submitButtonStatus = document.getElementById('submitButton');

    if (inputCaptcha === 'PRNU') {
      submitButtonStatus.removeAttribute('disabled');
    } else {
      submitButtonStatus.setAttribute('disabled', '');
    }
  });

  document.getElementById('formDataDiri').addEventListener('submit', function (event) {
    const inputCaptcha = document.getElementById('inputCaptcha').value;

    if (inputCaptcha === 'PRNU') {
      alert('Selamat! Captcha Anda lolos :D');
    } else {
      alert('Captcha Anda belum tepat :(');
      document.getElementById('submitButton').setAttribute('disabled', '');
    }
    event.preventDefault();
  });
  
  document.getElementById('inputCopy').addEventListener('copy', function () {
    alert('Anda telah men-copy sesuatu...');
  });
  
  document.getElementById('inputPaste').addEventListener('paste', function () {
    alert('Anda telah mem-paste sebuah teks...');
  });
});
`,
    hidden: false,
  },
};

function InputEventFormOnpaste05G() {
  return <StaticWebSandpack files={files} />;
}

export default InputEventFormOnpaste05G;
