import React from 'react';
import StaticWebSandpack from '../../../components/sandpacks/StaticWebSandpack';

const files = {
  'index.html': {
    code: `\
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>focus() Method Demo</title>
  <link rel="stylesheet" href="styles.css">
  <script defer src="index.js"></script>
</head>
<body>
  <section>
    <h1 class="section-title">focus() Method Demo</h1>

    <div class="container">
      <form id="demoForm" class="form">
        <div class="form-group">
          <label for="name">Your Name</label>
          <input
            type="text"
            id="name"
            class="form-input"
            placeholder="Enter your name"
          />
          <span class="error-message" id="nameError"></span>
        </div>

        <button type="submit">Submit</button>
      </form>

      <button id="focusButton" class="focus-button">
        Click to Focus Name Input
      </button>
    </div>
  </section>
</body>
</html>
`,
  },
  'styles.css': {
    code: `\
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

:root {
  font-family: segoe UI, system-ui, -apple-system, sans-serif;
  --primary-color: #74a0c4;
  --error-color: #dc2626;
  --text-color: #1f2937;
  --bg-color: #f3f4f6;
}

body {
  background-color: var(--bg-color);
  color: var(--text-color);
  line-height: 1.5;
}

.section-title {
  padding: 2rem 1rem;
  color: var(--primary-color);
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
}

.container {
  max-width: 600px;
  margin-inline: auto;
  padding: 0 1rem;
}

.form {
  background-color: white;
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
  margin-bottom: 1rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: var(--primary-color);
}

.form-input {
  width: 100%;
  padding: 0.75rem;
  border: 2px solid var(--primary-color);
  border-radius: 0.375rem;
  font-size: 1rem;
  transition: all 0.2s ease;
}

.form-input:focus {
  outline: 4px dashed orange;
  border-color: var(--primary-color);
}

.form-input.error {
  border-color: var(--error-color);
}

.error-message {
  display: block;
  margin-top: 0.5rem;
  color: var(--error-color);
  font-size: 0.875rem;
}

button {
  width: 100%;
  padding: 0.75rem 1.5rem;
  background-color: var(--primary-color);
  color: white;
  font-weight: 600;
  border: none;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

button:hover {
  background-color: #5b87ab;
}

button:focus {
  outline: 4px dashed orange;
}

.focus-button {
  background-color: var(--primary-color);
}

.focus-button:hover {
  background-color: #5b87ab;
}
`,
  },
  'index.js': {
    active: true,
    code: `\
document.addEventListener('DOMContentLoaded', () => {
  const nameInput = document.getElementById('name');
  const form = document.getElementById('demoForm');
  const focusButton = document.getElementById('focusButton');
  const errorMessage = document.getElementById('nameError');

  // Contoh 1: Manual focus using button
  focusButton.addEventListener('click', () => {
    nameInput.focus();
  });

  // Contoh 2: Automatic focus on validation error
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    if (nameInput.value.trim() === '') {
      nameInput.classList.add('error');
      errorMessage.textContent = 'Please enter your name';
      nameInput.focus();
    } else {
      alert('Form submitted successfully!');
      form.reset();
    }
  });

  // Clear error when typing
  nameInput.addEventListener('input', () => {
    nameInput.classList.remove('error');
    errorMessage.textContent = '';
  });
});
`,
  },
};

export default function UsingFocusMethodSample12() {
  return (
    <StaticWebSandpack
      files={files}
      options={{
        editorWidthPercentage: 55,
        showConsole: false,
      }}
    />
  );
}
