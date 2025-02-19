import React from 'react';
import FlashCardSandpack from '../../components/sandpacks/FlashCardSandpack';

function FlashcardDemo() {
  const cards = [
    { term: '<p>HTML</p>', description: '<p>Kode <em>mark-up</em> yang menyusun struktur website</p>' },
    { term: '<p>CSS</p>', description: '<p>bahasa yang digunakan untuk mengatur tampilan dan tata letak elemen pada halaman web</p>' },
    { term: '<p>JavaScript</p>', description: '<p>bahasa pemrograman untuk membuat web interaktif dan dinamis.</p>' },
  ];

  return <FlashCardSandpack cards={cards} />;
}

export default FlashcardDemo;
