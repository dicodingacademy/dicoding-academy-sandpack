import React from 'react';
import StaticWebSandpack from '../../../components/sandpacks/StaticWebSandpack';

const files = {
  'index.html': {
    hidden: false,
    active: true,
    code: `\
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Judul Dokumen</title>
    
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <div class="container">
      <img
        src="https://raw.githubusercontent.com/dicodingacademy/a123-webdasar-labs/099-shared-files/shared-media/g-dicoding-logo.png"
        alt="g Dicoding Logo"
        width="200px"
      />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet asperiores commodi corporis
        doloribus eum ipsum obcaecati pariatur quam quo, voluptatum? A, assumenda atque delectus
        dolore nam natus neque quisquam repudiandae?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. At deserunt illum inventore
        numquam officia recusandae, sit! Ab asperiores delectus dolor, eius est explicabo impedit
        ipsa ipsum itaque mollitia neque nihil nisi officia praesentium sint! Accusantium libero
        obcaecati provident qui? Error!
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam debitis dolorem eaque eius
        eos error eum ex facilis fuga ipsa iste iusto mollitia nam natus necessitatibus praesentium
        quam qui quod, rerum sed sequi sint voluptates? Atque enim, ex facere fugiat ipsum mollitia
        quos sunt. At, autem commodi dolorum eos, est expedita, incidunt molestias nobis nostrum
        officia porro reiciendis saepe voluptatum.
      </p>
    </div>
  </body>
</html>
`,
  },
  'styles.css': {
    code: `\
.container {
  width: 800px;
  border: 4px solid black;
  padding: 10px;
}

img {
  float: left;
  margin: 10px;
}
`,
  },
  'index.js': {
    code: '',
    hidden: true,
  },
};

function Floating79() {
  return (
    <StaticWebSandpack files={files} />
  );
}

export default Floating79;
