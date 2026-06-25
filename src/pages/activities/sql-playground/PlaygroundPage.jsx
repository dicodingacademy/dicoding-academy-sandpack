import React from 'react';
import { useSearchParams } from 'react-router-dom';
import ActivitiesError from '../../../components/activities/commons/ActivitiesError';
import SqlPlayground from '../../../components/activities/sql-playground';
import { base64ToUnicode } from '../../../utils';

export default function PlaygroundPage() {
  const [searchParam] = useSearchParams();
  const dataParam = searchParam.get('data');

  // No payload: render the playground with its built-in default schema/query.
  if (!dataParam) {
    return <SqlPlayground />;
  }

  try {
    const { setupSql, defaultQuery, instruction } = JSON.parse(base64ToUnicode(dataParam));

    return (
      <SqlPlayground
        setupSql={typeof setupSql === 'string' ? setupSql : undefined}
        defaultQuery={defaultQuery || undefined}
        instructionsText={instruction}
      />
    );
  } catch {
    return <ActivitiesError />;
  }
}
