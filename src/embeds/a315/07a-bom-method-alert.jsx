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
// Silakan hapus komentar di bawah ini untuk melihat hasilnya
// alert('Halo, user!');;
`,
    hidden: false,
    active: true,
  },
};

function BOMMethodAlert07A() {
  return <StaticWebSandpack files={files} />;
}

export default BOMMethodAlert07A;
