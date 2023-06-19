import React from 'react';
import VanillaSandpack from '../../components/sandpacks/VanillaSandpack';

const files = {
  'index.html': {
    code: `\
<h1>Pemenang Piala Dunia Tiga Tahun Terakhir</h1>

<table>
  <tr>
    <th>Tahun</th>
    <th>Juara 1</th>
    <th>Juara 2</th>
    <th>Juara 3</th>
  </tr>
  <tr>
    <td>2018</td>
    <td>Prancis</td>
    <td>Kroasia</td>
    <td>Belgium</td>
  </tr>
  <tr>
    <td>2014</td>
    <td>Jerman</td>
    <td>Argentina</td>
    <td>Belanda</td>
  </tr>
  <tr>
    <td>2010</td>
    <td>Spanyol</td>
    <td>Belanda</td>
    <td>Jerman</td>
  </tr>
</table>
`,
    hidden: false,
    active: true,
  },
  'index.js': {
    code: '',
    hidden: true,
  },
};

function TableSample88() {
  return (
    <VanillaSandpack files={files} />
  );
}

export default TableSample88;
