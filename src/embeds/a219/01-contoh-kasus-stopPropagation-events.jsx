import React from 'react';
import StaticWebSandpack from '../../components/sandpacks/StaticWebSandpack';

const files = {
  'index.html': {
    hidden: false,
    active: true,
    code: `\
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Web Storage World</title>

    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <main>
      <h1>The stopPropagation() Method</h1>
      
      <p>Click DIV 1:</p>
      <div onclick="func2()">
        DIV 2
        <div onclick="func1(event)">DIV 1</div>
      </div>
      
      Stop propagation:
      <input type="checkbox" id="check" />
      
      <p></p>
      
      <p>Because DIV 1 is inside Div 2, both DIVs get clicked when you click on DIV 1.</p>
      <p>Check the stop propagation checkbox, and try again.</p>
      <p>The stopPropagation() method allows you to prevent propagation of the current event.</p>
    </main>

    <script src="index.js"></script>
  </body>
</html>
`,
  },
  'styles.css': {
    hidden: false,
    code: `\
div {
  padding: 50px;
  background-color: rgba(255, 0, 0, 0.2);
  text-align: center;
  cursor: pointer;
}
`,
  },
  'index.js': {
    hidden: false,
    code: `\
function func1(event) {
  alert('DIV 1');
  if (document.getElementById('check').checked) {
    event.stopPropagation();
  }
}

function func2() {
  alert('DIV 2');
}
`,
  },
};

function ContohKasusStopPropagationEvents01() {
  return (
    <StaticWebSandpack
      files={files}
      options={{
        editorWidthPercentage: 55,
      }}
    />
  );
}

export default ContohKasusStopPropagationEvents01;
