import React from 'react';
import VanillaSandpack from '../../components/sandpacks/VanillaSandpack';

const files = {
  'index.html': {
    hidden: false,
    active: true,
    code: `\
<p>
  Ini adalah periode perang saudara. Pesawat ruang angkasa pemberontak, menyerang dari pangkalan
  tersembunyi, telah memenangkan kemenangan pertama mereka melawan Kekaisaran Galactic yang jahat.
  Selama pertempuran,
  <mark>mata-mata Pemberontak berhasil mencuri rencana rahasia </mark>
  ke senjata pamungkas Kekaisaran, STAR DEATH, stasiun ruang angkasa berlapis baja dengan kekuatan
  yang cukup untuk menghancurkan seluruh planet.
</p>
`,
  },
  'index.js': {
    hidden: true,
    code: '',
  },
};

function MarkSample20() {
  return (
    <VanillaSandpack files={files} />
  );
}

export default MarkSample20;
