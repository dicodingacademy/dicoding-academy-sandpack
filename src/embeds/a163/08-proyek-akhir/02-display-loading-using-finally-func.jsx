import React from 'react';
import StaticWebSandpack from '../../../components/sandpacks/StaticWebSandpack';

const files = {
  'index.html': {
    code: `\
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Implementasi Indikator Loading pada Async Process</title>
    
    <link rel="stylesheet" href="./styles.css">
    <script type="module" src="./index.js"></script>
  </head>
  <body>
    <header><h1>Implementasi Indikator Loading pada Async Process</h1></header>

    <main>
      <section>
        <div id="loading" class="loading">
          Loading        
        </div>
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
import { createUserItemElement, showLoading, hideLoading, sleep } from './utils.js';

// Get elements
const usersListElement = document.querySelector('.usersList');
const loading = document.querySelector('#loading');

function getData() {
  // Tampilkan loading saat request mulai dibuat dan dikirim
  showLoading(loading);

  fetch('https://reqres.in/api/users')

    // Hanya simulasi saja!
    // Chaining \`then\` ini hanya untuk memperlama loading.
    // Anda bisa menghapusnya jika tidak dibutuhkan lagi. 
    .then(sleep)

    .then((response) => response.json())
    .then((response) => {
      const users = response.data;
      
      // Create all users
      const listOfUserItemHtmlString = users
        .map((user) => {
          return createUserItemElement(user);
        })
        .join('');
      
      // Pastikan kosongkan konten elemen dahulu
      usersListElement.innerHTML = '';
  
      // Render all users
      usersListElement.innerHTML = listOfUserItemHtmlString;
    })
    .catch((error) => {
      console.error('Error getting users:', error);
    })
    .finally(() => {
      // Hilangkan loading, baik saat berhasil maupun gagal
      hideLoading(loading);
    });
}

getData();
`,
  },
  'utils.js': {
    active: true,
    code: `\
// Create user item
export function createUserItemElement(user) {
  const { id, email, first_name: firstName, last_name: lastName } = user;  

  return \`
    <article data-userid="\${id}">
      <h3>\${firstName} \${lastName}</h3>
      <div>\${email}</div>
    </article>
  \`;
}

export function showLoading(element) {
  element.style.display = 'block';
}

export function hideLoading(element) {
  element.style.display = 'none';
}

// Hanya simulasi saja!
// Ini hanya digunakan untuk menambah waktu penyelesaian dari proses asynchronous.
export function sleep(response) {
  // Proses async ini seharusnya tidak memiliki kemungkinan gagal.
  return new Promise((resolve) => setTimeout(() => {
    resolve(response);
  }, 3000));
}
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

function DisplayLoadingUsingFinallyFunc02() {
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

export default DisplayLoadingUsingFinallyFunc02;
