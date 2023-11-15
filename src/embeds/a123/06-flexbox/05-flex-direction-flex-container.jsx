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
    <title>Flex Direction Flex Container</title>

    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <main>
      <div class="flex">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
      </div>
    </main>
  </body>
</html>
`,
  },
  'styles.css': {
    hidden: false,
    active: true,
    code: `\
main .flex {
  background-color: lightgrey;

  height: 50vh;
}

.flex {
  display: flex;
  
  /* Silakan coba seluruh nilainya */
  flex-direction: row;
  /*flex-direction: row-reverse;*/
  /*flex-direction: column;*/
  /*flex-direction: column-reverse;*/
}
`,
  },
  'index.js': {
    hidden: true,
    code: '',
  },
};

function FlexDirectionFlexContainer05() {
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

export default FlexDirectionFlexContainer05;
