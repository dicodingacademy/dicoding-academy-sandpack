import React from 'react';
import Flashcard from '../../components/activities/flashcards';

function FlashcardDemo() {
  const cards = [
    { front: '<p>HTTP</p>', back: '<p>Protokol yang digunakan untuk komunikasi antara klien dan server di web.</p>' },
    { front: '<p>GET</p>', back: '<p>Metode HTTP untuk mengambil data dari server.</p>' },
    { front: '<p>POST</p>', back: '<p>Metode HTTP untuk mengirim data ke server.</p>' },
  ];

  return <Flashcard cards={cards} />;
}

export default FlashcardDemo;
