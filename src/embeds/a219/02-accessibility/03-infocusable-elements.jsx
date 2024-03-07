import React from 'react';
import StaticWebSandpackPreviewOnly from '../../../components/sandpacks/StaticWebSandpackPreviewOnly';

const files = {
  'index.html': {
    hidden: false,
    active: true,
    code: `\
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>Infocusable Elements</title>
  </head>
  <body>
    <h1>Enter the main heading, usually the same as the title.</h1>
    <p>Be <b>bold</b> in stating your key points. Put them in a list:</p>
    <ul>
      <li>The first item in your list</li>
      <li>The second item; <i>italicize</i> key words</li>
    </ul>
    <p>Improve your image by including an image.</p>
    <p>
      <img src="https://i.picsum.photos/id/24/536/354.jpg" alt="A Great HTML Resource" />
    </p>
  </body>
</html>
`,
  },
};

function InfocusableElements03() {
  return (
    <StaticWebSandpackPreviewOnly
      files={files}
    />
  );
}

export default InfocusableElements03;
