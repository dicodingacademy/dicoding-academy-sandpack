import React from 'react';
import StaticWebSandpack from '../../../components/sandpacks/StaticWebSandpack';

const files = {
  'index.html': {
    hidden: false,
    active: true,
    code: `\
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Focusable Element Custom Style</title>
  
  <link rel="stylesheet" href="styles.css" >
</head>
<body>
  <section>
    <h1>Focus styling</h1>

    <a href="#" class="style1">Focus style #1</a>
    <a href="#" class="style2">Focus style #2</a>
    <a href="#" class="style3">Focus style #3</a>
    <a href="#" class="style4">Focus style #4</a>
    <a href="#" class="style5">Focus style #5</a>
  </section>
</body>
</html>
`,
  },
  'styles.css': {
    hidden: false,
    code: `\
:root {
  font-family: segoe UI, system-ui, -apple-system, sans-serif;
}

body {
  margin: 2rem;
}

a {
  float: left;
  clear: both;
  margin-bottom: 1rem;

  text-decoration: none;
  color: #000000;
}

a:focus-visible {
  outline: none;
}

/* Mengembalikan styling bawaan browser dari focus indicator */
a.style1:focus-visible {
  outline: auto 5px Highlight; /* for non-webkit browsers */
  outline: auto 5px -webkit-focus-ring-color; /* for webkit browsers */
}

/* Memberi outline tebal berwarna hijau dengan border-radius */
a.style2:focus-visible {
  outline: 0.5rem solid #25aa00;
  border-radius: 5px;
}

/* Memberikan outline tebal sedang dengan warna ungu titik-titik */
a.style3:focus-visible {
  outline: medium dashed #bf40bf;
}

/* Diperbolehkan - Memberikan dekorasi teks berwarna biru dengan gaya ombak (wave) */
a.style4:focus-visible {
  text-decoration: wavy underline 2px #0000ff;
}

/* Diperbolehkan - Memberikan warna background hijau */
a.style5:focus-visible {
  background-color: #25aa00;
}
`,
  },
  'index.js': {
    hidden: true,
    code: '',
  },
};

export default function FocusableElementCustomStyle04() {
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
