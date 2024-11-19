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
  <title>Common Typefaces | Typography</title>
  
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <section>
    <h2>Common typefaces</h2>

    <div class="grid">
      <div class="grid-item arial">
        <h3>All work and no play makes Jack a dull boy<br>(Arial)</h3>
      </div>
      <div class="grid-item verdana">
        <h3>All work and no play makes Jack a dull boy<br>(Verdana)</h3>
      </div>
      <div class="grid-item open-sans">
        <h3>All work and no play makes Jack a dull boy<br>(Open Sans)</h3>
      </div>
      <div class="grid-item times">
        <h3>All work and no play makes Jack a dull boy<br>(Times New Roman)</h3>
      </div>
      <div class="grid-item georgia">
        <h3>All work and no play makes Jack a dull boy<br>(Georgia)</h3>
      </div>
      <div class="grid-item roboto-slab">
        <h3>All work and no play makes Jack a dull boy<br>(Roboto)</h3>
      </div>
    </div>
  </section>
  <hr>
  
  <section>
    <h2>Less common typefaces</h2>

    <div class="grid">
      <div class="grid-item parisienne">
        <h3>All work and no play makes Jack a dull boy<br>(Parisienne)</h3>
      </div>
      <div class="grid-item pinstripe">
        <h3>All work and no play makes Jack a dull boy<br>(Pinstripe)</h3>
      </div>
      <div class="grid-item silkscreen">
        <h3>All work and no play makes Jack a dull boy<br>(Silkscreen)</h3>
      </div>
      <div class="grid-item lucky">
        <h3>All work and no play makes Jack a dull boy<br>(Luckiest Guy)</h3>
      </div>
      <div class="grid-item blaka">
        <h3>All work and no play makes Jack a dull boy<br>(Blaka Hollow)</h3>
      </div>
      <div class="grid-item lobster">
        <h3>All work and no play makes Jack a dull boy<br>(Lobster)</h3>
      </div>
    </div>
  </section>
</body>
</html>
`,
  },
  'styles.css': {
    hidden: false,
    code: `\
@import url(https://fonts.googleapis.com/css2?family=Open+Sans);

@import url("https://fonts.googleapis.com/css2?family=Alumni+Sans+Pinstripe&family=Roboto+Slab");

@import url("https://fonts.googleapis.com/css2?family=Parisienne");

@import url("https://fonts.googleapis.com/css2?family=Alumni+Sans+Pinstripep");

@import url("https://fonts.googleapis.com/css2?family=Silkscreen");

@import url("https://fonts.googleapis.com/css2?family=Luckiest+Guy");

@import url("https://fonts.googleapis.com/css2?family=Blaka+Hollow");

@import url("https://fonts.googleapis.com/css2?family=Lobster");

body {
  margin: 2rem;
  font-family: "Open Sans", sans-serif;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  margin: 0 auto;
}

.grid-item {
  padding: 0 1.25rem;
  margin: 1rem;
  text-align: left;
  overflow: hidden;
}

h3 {
  font-size: 1.5rem;
}

.arial {
  font-family: Arial, sans-serif;
}

.verdana {
  font-family: Verdana, sans-serif;
}

.open-sans {
  font-family: "Open Sans", sans-serif;
}

.times {
  font-family: Times New Roman, serif;
}

.georgia {
  font-family: Georgia, serif;
}

.roboto-slab {
  font-family: "Roboto Slab", serif;
}

.parisienne {
  font-family: "Parisienne", cursive;
}

.pinstripe {
  font-family: "Alumni Sans Pinstripe", sans-serif;
}

.silkscreen {
  font-family: "Silkscreen", cursive;
}

.lucky {
  font-family: "Luckiest Guy", cursive;
}

.blaka {
  font-family: "Blaka Hollow", cursive;
}

.lobster {
  font-family: "Lobster", cursive;
}
`,
  },
  'index.js': {
    hidden: true,
    code: '',
  },
};

export default function CommonTypefaces06() {
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
