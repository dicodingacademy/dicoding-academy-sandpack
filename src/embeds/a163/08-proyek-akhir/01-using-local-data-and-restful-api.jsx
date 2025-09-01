import React from 'react';
import StaticWebSandpack from '../../../components/sandpacks/StaticWebSandpack';

const files = {
  'index.html': {
    code: `\
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Using Local Data dan RESTful API</title>
    
    <link rel="stylesheet" href="./styles.css">
    <script type="module" src="./index.js"></script>
  </head>
  <body>
    <header><h1>Implementasi Penggunaan Sumber Data Lokal dan Server</h1></header>

    <main>
      <section id="usingLocalData">
        <h2>Menggunakan Sampel Data Lokal</h2>
        <div class="list usersList"></div>
      </section>
      <hr>
      <section id="usingRestfulApi">
        <h2>Menggunakan Data Server</h2>
        <div class="list usersList"></div>
      </section>
    </main>
  </body>
</html>
`,
  },
  'index.js': {
    active: true,
    code: `\
import { sampleUsers } from './sample-users.js';

// Get elements
const usersListElementForLocal = document.querySelector('#usingLocalData .usersList');
const usersListElementForServer = document.querySelector('#usingRestfulApi .usersList');

// Create user item
function createUserItemElement(user) {
  const { id, email, first_name: firstName, last_name: lastName } = user;  

  return \`
    <article data-userid="\${id}">
      <h3>\${firstName} \${lastName}</h3>
      <div>\${email}</div>
    </article>
  \`;
}

function usingLocalData() {
  // Create all users
  const listOfUserItemHtmlString = sampleUsers
    .map((sampleUser) => {
      return createUserItemElement(sampleUser);
    })
    .join('');
    
  // Pastikan kosongkan konten elemen dahulu
  usersListElementForLocal.innerHTML = '';

  // Render all users
  usersListElementForLocal.innerHTML = listOfUserItemHtmlString;
}

async function usingRestfulApi() {
  try {
    const response = await fetch('https://reqres.in/api/users');
    const data = await response.json();
    const users = data.data;
  
    // Create all users
    const listOfUserItemHtmlString = users
      .map((user) => {
        return createUserItemElement(user);
      })
      .join('');
    
    // Pastikan kosongkan konten elemen dahulu
    usersListElementForServer.innerHTML = '';

    // Render all users
    usersListElementForServer.innerHTML = listOfUserItemHtmlString;
  } catch (error) {
    console.error('Error getting users:', error);
  }
}

// Tampilkan data lokal
usingLocalData();

/**
 * Tampilkan semua data server
 * 
 * Kita bisa memanfaatkan await di luar async function dalam top-level JavaScript module
 * Baca: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await#top_level_await
 */
await usingRestfulApi();
`,
  },
  'sample-users.js': {
    code: `\
export const sampleUsers = [
  {
    id: 1,
    email: "george.bluth@reqres.in",
    first_name: "George",
    last_name: "Bluth",
    avatar: "https://reqres.in/img/faces/1-image.jpg",
  },
  {
    id: 2,
    email: "janet.weaver@reqres.in",
    first_name: "Janet",
    last_name: "Weaver",
    avatar: "https://reqres.in/img/faces/2-image.jpg",
  },
  {
    id: 3,
    email: "emma.wong@reqres.in",
    first_name: "Emma",
    last_name: "Wong",
    avatar: "https://reqres.in/img/faces/3-image.jpg",
  },
  {
    id: 4,
    email: "eve.holt@reqres.in",
    first_name: "Eve",
    last_name: "Holt",
    avatar: "https://reqres.in/img/faces/4-image.jpg",
  },
  {
    id: 5,
    email: "charles.morris@reqres.in",
    first_name: "Charles",
    last_name: "Morris",
    avatar: "https://reqres.in/img/faces/5-image.jpg",
  },
  {
    id: 6,
    email: "tracey.ramos@reqres.in",
    first_name: "Tracey",
    last_name: "Ramos",
    avatar: "https://reqres.in/img/faces/6-image.jpg",
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

function UsingLocalDataAndRestfulApi01() {
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

export default UsingLocalDataAndRestfulApi01;
