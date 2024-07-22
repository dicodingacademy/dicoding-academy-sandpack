import React from 'react';
import StaticWebSandpack from '../../../components/sandpacks/StaticWebSandpack';

const files = {
  'index.html': {
    code: `\
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Sample Data</title>
    
    <link rel="stylesheet" href="./styles.css">
    <script type="module" src="./index.js"></script>
  </head>
  <body>
    <div id="notesList" class="list"></div>
  </body>
</html>
`,
  },
  'index.js': {
    active: true,
    code: `\
import { sampleNotes } from './sample-notes.js';

// Get elements
const notesListElement = document.querySelector('#notesList');

// Create note item
function createNoteItemElement({ id, title, body }) {
  const container = document.createElement('div');
  container.setAttribute('data-noteid', id);

  const titleElement = document.createElement('h3');
  titleElement.textContent = title;

  const bodyElement = document.createElement('p');
  bodyElement.innerText = body;

  container.append(titleElement, bodyElement);
  
  return container;
}

// Render all sample notes
sampleNotes.forEach((sampleNote) => {
  const element = createNoteItemElement(sampleNote);
  notesListElement.append(element);
});
`,
  },
  'sample-notes.js': {
    code: `\
/**
 * Sample data for displaying notes
 * 
 * Note object schema:
 * {
 *   id: number | string,
 *   title: string,
 *   body: string,
 * }
 */
export const sampleNotes = [
  {
    id: 'notes-01a-1a2b3c4d5e',
    title: 'Welcome to Notes, Budi!',
    body: 'Welcome to Notes! This is your first note. You can archive it, delete it, or create new ones.',
  },
  {
    id: 'notes-02b-cdefg67890',
    title: 'Team Meeting',
    body: 'Discuss project milestones and address any blockers for the sprint.',
  },
  {
    id: 'notes-03c-123456789',
    title: 'Grocery List',
    body: 'Tomatoes, chicken, rice, pasta, cheese.',
  },
  {
    id: 'notes-04d-6f5e4d3c2b',
    title: 'Career Goals',
    body: 'Complete online courses, update resume, network with industry professionals.',
  },
  {
    id: 'notes-05e-123456789',
    title: 'Recipe: Chicken Curry',
    body: 'Ingredients: chicken, curry powder, coconut milk, onions, garlic. Steps:...',
  },
];
`,
  },
  'styles.css': {
    code: `\
.list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.list > * {
  padding: 4px 8px;
  border: 1px solid #333;
}
`,
  },
};

function DisplaySampleData01() {
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

export default DisplaySampleData01;
