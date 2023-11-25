import React from 'react';
import StaticWebSandpack from '../../../components/sandpacks/StaticWebSandpack';

const files = {
  'index.html': {
    hidden: false,
    code: `\
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Centering With Float</title>

    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <div class="container">
      <div class="box1" style="background-color: lightcoral">
         ABCDE 
         <!--<img
           src="https://raw.githubusercontent.com/dicodingacademy/a123-webdasar-labs/099-shared-files/shared-media/g-dicoding-logo.png"
           alt="Logo Dicoding g"
           width="100"
         />-->
      </div>
      <div class="box2" style="background-color: lightgreen">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum corporis
        blanditiis maiores doloribus libero voluptatem fugit ipsam molestias impedit?
        Sapiente ea a ab magnam officia, nobis provident, suscipit iste neque atque
        numquam ipsam eius voluptatum repellendus? At id ut praesentium reiciendis harum
        quia. Nostrum exercitationem praesentium tenetur commodi accusamus repudiandae?
      </div>
    </div>
  </body>
</html>
`,
  },
  'styles.css': {
    hidden: false,
    active: true,
    code: `\
.box1 {
  font-size: 5rem;
  max-width: 100%;
  height: 250px;

  /* Centering horizontally */
  text-align: center;

  /* Centering vertically */
  line-height: 250px;
  /* line-height: 300px; */
}
`,
  },
  'index.js': {
    hidden: true,
    code: '',
  },
};

function CenteringWithFloat01() {
  return (
    <StaticWebSandpack
      files={files}
      options={{
        showConsoleButton: false,
        editorWidthPercentage: 55,
      }}
    />
  );
}

export default CenteringWithFloat01;
