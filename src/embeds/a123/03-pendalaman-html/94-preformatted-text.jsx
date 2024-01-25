import React from 'react';
import VanillaSandpack from '../../../components/sandpacks/VanillaSandpack';

const files = {
  'index.html': {
    hidden: false,
    active: true,
    code: `\
<pre>
  SAJAK PUTIH

Bersandar pada tari warna pelangi
Kau depanku bertudung sutra senja
Di hitam matamu kembang mawar dan melati
Harum rambutmu mengalun bergelut senda

Sepi menyanyi, malam dalam mendoa tiba
Meriak muka air kolam jiwa
Dan dalam dadaku memerdu lagu
Menarik menari seluruh aku

Hidup dari hidupku, pintu terbuka
Selama matamu bagiku menengadah
Selama kau darah mengalir dari luka
Antara kita Mati datang tidak membelah...

                  Karya: Chairil Anwar
</pre>
`,
  },
  'index.js': {
    hidden: true,
    code: '',
  },
};

function PreformattedText94() {
  return (
    <VanillaSandpack files={files} />
  );
}

export default PreformattedText94;
