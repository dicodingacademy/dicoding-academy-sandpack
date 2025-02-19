import React from 'react';
import PropTypes from 'prop-types';
import BaseSandpackPreviewOnly from './base/BaseSandpackPreviewOnly';

function FlashCardSandpack({
  cards,
}) {
  const files = {
    'index.html': {
      hidden: false,
      active: true,
      code: `\
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="styles.css">
    <title>Flash Card Learning</title>
  </head>
  <body>
    <div id="app"></div>
    <script src="index.js"></script>
  </body>
</html>
`,
    },
    'styles.css': {
      hidden: false,
      code: `\
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

:root {
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;
  color-scheme: light dark;
  color: #213547;
  background-color: #e0e0e0;
}

body {
  margin: 0;
  min-width: 320px;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
}

#app {
 display: flex;
 min-height: 100vh;
 align-items: center;
 justify-content: center;
}

.container {
  width: 100%;
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 2rem;
}

.cards-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin-bottom: 2rem;
  padding: 1rem;
}

.card {
  perspective: 1000px;
  width: 300px;
  flex: 0 0 calc(33.333% - 1.334rem);
  aspect-ratio: 3/4;
}

.card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  cursor: pointer;
}

.card.flipped .card-inner {
  transform: rotateY(180deg);
}

.card-front,
.card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  box-sizing: border-box;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.card-back {
  transform: rotateY(180deg);
  background: #4338ca;
  color: white;
}

.card p {
  margin: 0;
  font-size: 1.25rem;
  line-height: 1.5;
}

.reset-button {
  background: #4338ca;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
  margin: 0 auto;
  transition: background-color 0.2s;
}

.reset-button:hover {
  background: #3730a3;
}

@media (max-width: 640px) {
  .container {
    padding: 0 1rem;
    margin: 1rem auto;
  }
  
  .cards-grid {
    gap: 1rem;
  }
  
  .card {
    flex: 0 0 100%;
    width: 100%;
  }
  
  .card p {
    font-size: 1.125rem;
  }
}

@media (prefers-color-scheme: dark) {
  :root {
    color: rgba(255, 255, 255, 0.87);
    background-color: #1a1a1a;
  }
  .card-front {
    background: #2d2d2d;
    color: white;
  }
  .card-back {
    background: #4338ca;
  }
}
`,
    },
    'index.js': {
      hidden: false,
      code: `\
const flashCards = ${JSON.stringify(cards)}

function createCard(card, index) {
  return \`
    <div class="card" data-index="\${index}">
      <div class="card-inner">
        <div class="card-front">
          \${card.term}
        </div>
        <div class="card-back">
          \${card.description}
        </div>
      </div>
    </div>
  \`
}

function renderApp() {
  const app = document.querySelector('#app')
  app.innerHTML = \`
    <div class="container">
      <div class="cards-grid">
        \${flashCards.map((card, index) => createCard(card, index)).join('')}
      </div>
      <button class="reset-button">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
          <path d="M8 3.5a4.5 4.5 0 1 0 4.5 4.5H14a6 6 0 1 1-6-6V0L9.5 2 8 4V3.5z"/>
        </svg>
        Reset
      </button>
    </div>
  \`

  // Add event listeners
  const cards = document.querySelectorAll('.card')
  cards.forEach(card => {
    card.addEventListener('click', () => {
      card.classList.toggle('flipped')
    })
  })

  const resetButton = document.querySelector('.reset-button')
  resetButton.addEventListener('click', () => {
    cards.forEach(card => {
      card.classList.remove('flipped')
    })
  })
}

// Initial render
renderApp()
`,
    },
  };

  return (
    <BaseSandpackPreviewOnly
      template="static"
      files={files}
      showRefreshButton={false}
      showOpenInCodeSandbox={false}
    />
  );
}

FlashCardSandpack.propTypes = {
  cards: PropTypes.any,
};

FlashCardSandpack.defaultProps = {
  cards: [],
};

export default FlashCardSandpack;
