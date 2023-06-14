import React from 'react';
import VanillaSandpack from '../../components/sandpacks/VanillaSandpack';

const files = {
  'index.html': {
    code: `\
<ul>
  <li>List item 1</li>
  <li>List item 2</li>
  <li>
    List item 3
    <ul>
      <li>List item 3.1</li>
      <li>List item 3.2</li>
      <li>List item 3.3</li>
    </ul>
  </li>
  <li>List item 4</li>
</ul>`,
    hidden: false,
    active: true,
  },
  'index.js': {
    code: '',
    hidden: true,
  },
};

function ListSample07() {
  return (
    <VanillaSandpack files={files} />
  );
}

export default ListSample07;
