import React from 'react';
import LazysizesSandpack from '../../../components/sandpacks/LazysizesSandpack';

const files = {
  'index.html': {
    hidden: false,
    active: true,
    readOnly: false,
    code: `\
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
    <title>Lazysizes Example</title>
  
    <script defer src="index.js"></script>
  </head>
  <body>
    <ul class="images-list">
      <li>
        <img
          class="lazyload"
          src="https://picsum.photos/1200/800?random=1"
          data-src="https://picsum.photos/1200/800?random=1"
          alt="Gambar 1"
        >
      </li>
      <li>
        <img
          class="lazyload"
          src="https://raw.githubusercontent.com/dicodingacademy/a219-mfwde-labs/099-shared-files/shared-media/10-proyek-akhir/placeholder-image.jpg"
          data-src="https://picsum.photos/1200/800?random=2"
          alt="Gambar 2"
        >
      </li>
      <li>
        <img
          class="lazyload"
          src="https://raw.githubusercontent.com/dicodingacademy/a219-mfwde-labs/099-shared-files/shared-media/10-proyek-akhir/placeholder-image.jpg"
          data-src="https://picsum.photos/1200/800?random=3"
          alt="Gambar 3"
        >
      </li>
      <li>
        <img
          class="lazyload"
          src="https://raw.githubusercontent.com/dicodingacademy/a219-mfwde-labs/099-shared-files/shared-media/10-proyek-akhir/placeholder-image.jpg"
          data-src="https://picsum.photos/1200/800?random=4"
          alt="Gambar 4"
        >
      </li>
      <li>
        <img
          class="lazyload"
          src="https://raw.githubusercontent.com/dicodingacademy/a219-mfwde-labs/099-shared-files/shared-media/10-proyek-akhir/placeholder-image.jpg"
          data-src="https://picsum.photos/1200/800?random=5"
          alt="Gambar 5"
        >
      </li>
      <li>
        <img
          class="lazyload"
          src="https://raw.githubusercontent.com/dicodingacademy/a219-mfwde-labs/099-shared-files/shared-media/10-proyek-akhir/placeholder-image.jpg"
          data-src="https://picsum.photos/1200/800?random=6"
          alt="Gambar 6"
        >
      </li>
      <li>
        <img
          class="lazyload"
          src="https://raw.githubusercontent.com/dicodingacademy/a219-mfwde-labs/099-shared-files/shared-media/10-proyek-akhir/placeholder-image.jpg"
          data-src="https://picsum.photos/1200/800?random=7"
          alt="Gambar 7"
        >
      </li>
      <li>
        <img
          class="lazyload"
          src="https://raw.githubusercontent.com/dicodingacademy/a219-mfwde-labs/099-shared-files/shared-media/10-proyek-akhir/placeholder-image.jpg"
          data-src="https://picsum.photos/1200/800?random=8"
          alt="Gambar 8"
        >
      </li>
      <li>
        <img
          class="lazyload"
          src="https://raw.githubusercontent.com/dicodingacademy/a219-mfwde-labs/099-shared-files/shared-media/10-proyek-akhir/placeholder-image.jpg"
          data-src="https://picsum.photos/1200/800?random=9"
          alt="Gambar 9"
        >
      </li>
      <li>
        <img
          class="lazyload"
          src="https://raw.githubusercontent.com/dicodingacademy/a219-mfwde-labs/099-shared-files/shared-media/10-proyek-akhir/placeholder-image.jpg"
          data-src="https://picsum.photos/1200/800?random=10"
          alt="Gambar 10"
        >
      </li>
    </ul>
  </body>
</html>
`,
  },
};

export default function LazyLoadingImageUsingLazysizesSample02() {
  return (
    <LazysizesSandpack
      files={files}
      options={{
        editorWidthPercentage: 55,
        showConsole: false,
      }}
    />
  );
}
