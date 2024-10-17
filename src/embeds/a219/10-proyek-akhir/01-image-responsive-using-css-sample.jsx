import React from 'react';
import StaticWebSandpack from '../../../components/sandpacks/StaticWebSandpack';

const files = {
  'index.html': {
    code: `\
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Image Responsive using CSS Sample</title>
    
    <link rel="stylesheet" href="./styles.css">
  </head>
  <body>
    <header>
      <h1>Image Responsive using CSS Sample</h1>
    </header>

    <main>
      <section>
        <h2>Hero</h2>
        <div class="hero-image"></div>
      </section>
    </main>
  </body>
</html>
`,
  },
  'index.js': {
    code: '',
  },
  'styles.css': {
    active: true,
    code: `\
.hero-image {
  height: 400px;
  background-image: url('https://raw.githubusercontent.com/dicodingacademy/a219-mfwde-labs/099-shared-files/shared-media/10-proyek-akhir/background-small.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

@media screen and (width > 600px) {
  .hero-image {
    background-image: url('https://raw.githubusercontent.com/dicodingacademy/a219-mfwde-labs/099-shared-files/shared-media/10-proyek-akhir/background-medium.jpg');
  }
}

@media screen and (width > 1000px) {
  .hero-image {
    height: 500px;
    background-image: url('https://raw.githubusercontent.com/dicodingacademy/a219-mfwde-labs/099-shared-files/shared-media/10-proyek-akhir/background-large.jpg');
  }
}
`,
  },
};

export default function ImageResponsiveUsingCSSSample01() {
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
