import React from 'react';
import VanillaSandpack from '../../../components/sandpacks/VanillaSandpack';

const files = {
  'index.html': {
    hidden: false,
    active: true,
    code: `\
<h1>Bandung</h1>

<h2>Geografis</h2>
<p>
  Kota Bandung dikelilingi oleh pegunungan, sehingga bentuk morfologi wilayahnya bagaikan sebuah mangkok raksasa
</p>

<h2>Wisata</h2>
<p>
  Kota Bandung telah menjadi tujuan utama dalam menikmati liburan akhir pekan terutama dari masyarakat yang berasal dari Jakarta sekitarnya.
</p>

<h3>Farm House Lembang</h3>
<h4>Lokasi</h4>
<p>
  Berada di jalur utama Bandung-Lembang, Farm House menjadi objek wisata yang tidak pernah sepi pengunjung.
</p>

<h4>Kondisi</h4>
<p>
  Selain karena letaknya strategis, kawasan ini juga menghadirkan nuansa wisata khas Eropa. Semua itu diterapkan dalam bentuk spot swafoto Instagramable.
</p>

<h3>Observatorium Bosscha</h3>
<p>
  Memiliki beberapa teleskop, antara lain, Refraktor Ganda Zeiss, Schmidt Bimasakti, Refraktor Bamberg, Cassegrain GOTO, dan Teleskop Surya.
</p>
`,
  },
  'index.js': {
    hidden: true,
    code: '',
  },
};

function Heading91() {
  return (
    <VanillaSandpack files={files} />
  );
}

export default Heading91;
