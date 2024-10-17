import React from 'react';
import StaticWebSandpack from '../../../components/sandpacks/StaticWebSandpack';

const files = {
  'index.html': {
    active: true,
    code: `\
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Restaurant Customer Review Sample</title>
    
    <link rel="stylesheet" href="styles.css">
    <script type="module" src="index.js"></script>
  </head>
  <body>
    <main>
      <section>
        <h2>Halaman Detail Restoran</h2>
        <div id="restaurant-detail-container"></div>  
      </section>
    </main>
  </body>
</html>
`,
  },
  'index.js': {
    code: `\
import { generateRestaurantDetailTemplate } from './utils.js';

// Get elements
const restaurantDetailContainer = document.querySelector('#restaurant-detail-container');

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

async function getRestaurantDetail() {
  try {
    const response = await fetch('https://restaurant-api.dicoding.dev/detail/s1knt6za9kkfw1e867');
    const responseJson = await response.json();
  
    return responseJson.restaurant;
  } catch (error) {
    console.error('Error getting users:', error);
  }
}

async function populateRestaurantDetail() {
  const restaurant = await getRestaurantDetail();
  restaurantDetailContainer.innerHTML = generateRestaurantDetailTemplate(restaurant);
}

/**
 * Tampilkan semua data server
 * 
 * Kita bisa memanfaatkan await di luar async function dalam top-level JavaScript module
 * Baca: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await#top_level_await
 */
await populateRestaurantDetail();
`,
  },
  'utils.js': {
    code: `\
export function generateRestaurantDetailTemplate(restaurant) { 
  const reviewsTemplate = restaurant.customerReviews.map((customerReview) => \`
    <li>\${customerReview.review}</li>
  \`).join('');

  return \`
    <article>
      <h3 class="restaurant__title">\${restaurant.name}</h3>
      <img class="restaurant__poster" src="https://restaurant-api.dicoding.dev/images/medium/\${restaurant.pictureId}" alt="\${restaurant.name}" />
      <div class="restaurant__info">
        <h4>Information</h4>
        <h5>Deskripsi</h5>
        <p>\${restaurant.description}</p>
      </div>
      <div class="restaurant__reviews">
        <h4>Reviews</h4>
        <ul id="reviews-list">\${reviewsTemplate}</ul>
      </div>
    </article>
  \`;
}
`,
  },
  'styles.css': {
    code: '',
  },
};

export default function CustomerReviewSample01() {
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
