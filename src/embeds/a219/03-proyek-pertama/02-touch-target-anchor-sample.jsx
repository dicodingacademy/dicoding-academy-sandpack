import React from 'react';
import StaticWebSandpack from '../../../components/sandpacks/StaticWebSandpack';

const files = {
  'index.html': {
    active: true,
    code: `\
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Touch Target Sample 1</title>
    
    <style>
      a {
        color: white;
        text-decoration: none;
      }

      .with-inline {
        /* Secara default, display bernilai inline */
        /*display: inline;*/
      }

      .with-inline-block {
        /* Atur display bernilai \`inline-block\` agar height bisa diatur juga */
        display: inline-block;
      }
    
      .btn {
        box-sizing: border-box;

        background-color: #2D3E50;
        min-width: 44px;
        min-height: 44px;
      }
    </style>
  </head>
  <body>
    <a href="#" class="btn with-inline">Make Payment!</a>
    <a href="#" class="btn with-inline-block">Make Payment!</a>
  </body>
</html>
`,
  },
};

export default function TouchTargetAnchorSample02() {
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
