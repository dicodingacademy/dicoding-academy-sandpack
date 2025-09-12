import React from 'react';
import './HomePage.css';

function HomePage() {
  return (
    <div className="homepage">
      <header className="homepage__header">
        <h1>Dicoding Learning Activities</h1>
        <p>Buat aktivitas pembelajaran interaktif dan embed code untuk konten Dicoding</p>
      </header>

      <main className="homepage__main">
        <section className="homepage__section">
          <h2>Interactive Activities</h2>
          <p>Buat aktivitas pembelajaran interaktif untuk meningkatkan engagement siswa</p>
          
          <div className="homepage__cards">
            <a href="/activities/fill-in-the-blank/create" className="homepage__card">
              <h3>Fill in the Blank</h3>
              <p>Buat aktivitas isian kosong dengan placeholder dan validasi jawaban</p>
            </a>
            
            <a href="/activities/flashcards/create" className="homepage__card">
              <h3>Flashcards</h3>
              <p>Buat kartu belajar interaktif dengan rich text editor</p>
            </a>
            
            <a href="/activities/drag-and-order/create" className="homepage__card">
              <h3>Drag and Order</h3>
              <p>Buat aktivitas drag and drop untuk mengurutkan item</p>
            </a>
          </div>
        </section>

        <section className="homepage__section">
          <h2>Embed Code Generator</h2>
          <p>Generate embed code untuk konten Dicoding Sandpack lainnya</p>
          
          <div className="homepage__cards">
            <a href="/embed-generator" className="homepage__card">
              <h3>Sandpack Embed Generator</h3>
              <p>Buat embed code untuk berbagai jenis konten pembelajaran</p>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default HomePage;
