import React from 'react';
import { useSearchParams } from 'react-router-dom';
import DragAndOrder from '../../../components/activities/drag-and-order';

function DragAndOrderPage() {
  const [searchParams] = useSearchParams();
  const dataParam = searchParams.get('data');

  if (dataParam === null) {
    return (<p>failed to show activities</p>);
  }

  try {
    const data = JSON.parse(
      atob(dataParam),
    );

    const { items, hint = '', storageKey } = data;

    if (!Array.isArray(items)) {
      return (<p>failed to show activities</p>);
    }

    if (!storageKey) {
      return (<p>failed to show activities</p>);
    }

    return (
      <DragAndOrder items={items} hint={hint} storageKey={storageKey} />
    );
  } catch {
    return (<p>failed to show activities</p>);
  }
}

export default DragAndOrderPage;
