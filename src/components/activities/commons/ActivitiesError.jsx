import React from 'react';
import { CircleAlert } from 'lucide-react';
import ActivitiesContainer from './ActivitiesContainer';

export default function ActivitiesError() {
  return (
    <ActivitiesContainer>
      <div className="activities__error">
        <CircleAlert />
        <span>Terjadi kesalahan saat memuat komponen interaktif.</span>
      </div>
    </ActivitiesContainer>
  );
}
