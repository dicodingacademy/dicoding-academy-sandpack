import React from 'react';
import VanillaSandpack from '../../components/sandpacks/VanillaSandpack';

const files = {
  'index.html': {
    hidden: false,
    active: true,
    code: `\
<p>
  Dicoding adalah sebuah perusahaan startup yang bertujuan mengembangkan ekosistem developer di
  Indonesia. Berdiri sejak 5 Januari 2015, Dicoding memiliki platform pembelajaran elektronik di
  laman Dicoding.com.
</p>

<figure>
  <img
    src="https://raw.githubusercontent.com/dicodingacademy/a123-webdasar-labs/099-shared-files/shared-media/g-dicoding-logo.png"
    alt="g Dicoding Logo"
    width="200px"
  />
  <figcaption>Dicoding</figcaption>
</figure>

<p>
  Materi perdana yang menjadi magnet dari awal berdirinya Dicoding hingga kini adalah kelas Menjadi
  Android Developer Expert. Kelas ini dikembangkan oleh Google Developer Expert in Android, Sidiq
  Permana dan Head of Dicoding Academy, Ahmad Imaduddin. Seperti halnya kelas Picodiploma lain,
  modul online-nya juga hadir dalam bentuk buku berjudul sama yang telah mendapatkan ijin dan ISBN.
</p>
`,
  },
  'index.js': {
    code: '',
    hidden: true,
  },
};

function Figure95() {
  return (
    <VanillaSandpack files={files} />
  );
}

export default Figure95;
