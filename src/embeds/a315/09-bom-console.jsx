import React from 'react';
import StaticWebSandpack from '../../components/sandpacks/StaticWebSandpack';

const files = {
  'index.html': {
    code: `\
<!DOCTYPE html>
<html>
  <body>
    <script src="index.js"></script>
  </body>
</html>
`,
    hidden: true,
    active: false,
  },
  'styles.css': {
    code: '',
    hidden: true,
  },
  'index.js': {
    code: `\
console.log('Ini adalah console log');
console.info('Ini adalah console info');
console.warn('Ini adalah console warn');
console.error('Ini adalah console error');
`,
    hidden: false,
    active: true,
  },
};

function BOMConsole09() {
  return <StaticWebSandpack files={files} />;
}

export default BOMConsole09;
