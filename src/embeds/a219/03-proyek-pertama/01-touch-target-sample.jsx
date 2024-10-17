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
      .btn {
        box-sizing: border-box;
        min-width: 44px;
        min-height: 44px;
      }
    </style>
  </head>
  <body>
    <button class="btn">Klik Aku!</button>
  </body>
</html>
`,
  },
};

export default function TouchTargetSample01() {
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
