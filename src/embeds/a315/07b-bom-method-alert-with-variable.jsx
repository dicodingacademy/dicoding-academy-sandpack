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
let pesan = 'Halo, user!';

// Silakan hapus komentar di bawah ini untuk melihat hasilnya
// alert(pesan);
`,
    hidden: false,
    active: true,
  },
};

function BOMMethodAlertWithVariable07B() {
  return <StaticWebSandpack files={files} />;
}

export default BOMMethodAlertWithVariable07B;
