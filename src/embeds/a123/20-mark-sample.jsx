import React from 'react';
import VanillaSandpack from '../../components/sandpacks/VanillaSandpack';

const files = {
  'index.html': {
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
    hidden: false,
    active: true,
  },
  'index.js': {
    code: '',
    hidden: true,
  },
};

function MarkSample20() {
  return (
    <VanillaSandpack files={files} />
  );
}

export default MarkSample20;
