import React from 'react';
import StaticWebSandpack from '../../../components/sandpacks/StaticWebSandpack.jsx';

const files = {
  'index.html': {
    hidden: false,
    active: true,
    code: `\
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Judul Dokumen</title>
    
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <ul>
      <ul>
        <li><a href="#internal">Internal link</a></li>
        <li><a href="http://example.com">Example link</a></li>
        <li><a href="#InSensitive">Insensitive internal link</a></li>
        <li><a href="http://example.org">Example org link</a></li>
      </ul>
    </ul>
  </body>
</html>
`,
  },
  'styles.css': {
    code: `\
/* <a> element yang menerapkan href attribute */
a[href] {
  color: blue;
}

/* <a> element yang menerapkan nilai pada href dengan awalan "#" */
a[href^='#'] {
  background-color: gold;
}

/* <a> element yang menerapkan nilai pada href yang mengandung teks "example" */
a[href*='example'] {
  background-color: silver;
}

/* <a> element yang menerapkan nilai pada href yang mengandung teks "insensitive" tidak mementingkan huruf kapital*/
a[href*='insensitive' i] {
  color: cyan;
}

/* <a> element yang menerapkan nilai pada href dengan akhiran ".org" */
a[href$='.org'] {
  color: red;
}`,
  },
  'index.js': {
    code: '',
    hidden: true,
  },
};

function AttributeSelector38() {
  return (
    <StaticWebSandpack files={files} />
  );
}

export default AttributeSelector38;
