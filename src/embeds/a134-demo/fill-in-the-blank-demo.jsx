import React from 'react';
import FillInTheBlank from '../../components/activities/fill-in-the-blank';

function FillInTheBlankDemo() {
  const template = 'Elemen dasar dalam HTML untuk membuat sebuah halaman web adalah elemen {1}. Elemen ini memiliki dua bagian utama, yaitu {2} dan {3}.';
  const answers = ['html', 'head', 'body'];

  return (
    <FillInTheBlank template={template} answers={answers} storageKey="a134-02" />
  );
}

export default FillInTheBlankDemo;
