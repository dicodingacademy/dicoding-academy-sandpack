import React from 'react';
import { useSearchParams } from 'react-router-dom';
import DragAndOrder from '../../../components/activities/drag-and-order';
import ActivitiesError from '../../../components/activities/commons/ActivitiesError';

export default function DragAndOrderPage() {
  const [searchParams] = useSearchParams();
  const dataParam = searchParams.get('data');

  if (dataParam === null) {
    return <ActivitiesError />;
  }

  try {
    const jsonString = atob(dataParam);
    const { items, hintText = '', storageKey } = JSON.parse(jsonString);

    if (!Array.isArray(items)) {
      return <ActivitiesError />;
    }

    if (!storageKey) {
      return <ActivitiesError />;
    }

    return <DragAndOrder items={items} hintText={hintText} storageKey={storageKey} />;
  } catch {
    return <ActivitiesError />;
  }
}
