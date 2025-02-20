import React from 'react';
import DragAndOrder from '../../components/activities/drag-and-order';

function DragAndOrderDemo() {
  const items = ['DNS Lookup', 'HTTP Request', 'Server Response', 'HTML Parsing', 'CSS Parsing', 'Rendering'];

  return (
    <div>
      <DragAndOrder items={items} storageKey="a314-01" />
    </div>
  );
}

export default DragAndOrderDemo;
