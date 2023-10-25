import React from 'react';
import VanillaSandpack from '../../components/sandpacks/VanillaSandpack';

const files = {
  'index.html': {
    hidden: false,
    active: true,
    code: `\
<table border="1">
  <tr>
    <th rowspan="3">18:00</th>
    <td>Avenger Infinity Wars</td>
  </tr>
  <tr>
    <td>One Piece: Stampede</td>
  </tr>
  <tr>
    <td>Gundala</td>
  </tr>
</table>
`,
  },
  'index.js': {
    code: '',
    hidden: true,
  },
};

function RowSpan89() {
  return (
    <VanillaSandpack files={files} />
  );
}

export default RowSpan89;
