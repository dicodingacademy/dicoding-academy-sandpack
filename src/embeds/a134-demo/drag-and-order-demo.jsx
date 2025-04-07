import React from 'react';
import DragAndOrder from '../../components/activities/drag-and-order';

export default function DragAndOrderDemo() {
  const items = [
    { id: '1', text: 'DNS Lookup' },
    { id: '2', text: 'HTTP Request' },
    { id: '3', text: 'Server Response' },
    { id: '4', text: 'HTML Parsing' },
    { id: '5', text: 'CSS Parsing' },
    { id: '6', text: 'Rendering' },
  ];
  const hintText = 'Urutan yang benar adalah -> DNS Lookup, HTTP Request, Server Response, HTML Parsing, CSS Parsing, Rendering.';

  return (
    <DragAndOrder hintText={hintText} items={items} storageKey="a314-01" />
  );
}
