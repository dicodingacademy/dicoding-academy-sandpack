import { clsx } from 'clsx';
import { Slide } from 'react-toastify';

export function generateIframe(src, title, height = '600', width = '100%') {
  return `<iframe src="${src}" title="${title}" class='fr-draggable' height="${height}" width="${width}"></iframe>`;
}

export function cn(...inputs) {
  return clsx(inputs);
}

export const toastOption = {
  toastId: 1,
  position: 'top-center',
  autoClose: 3000,
  hideProgressBar: true,
  closeOnClick: false,
  pauseOnHover: false,
  draggable: false,
  theme: 'colored',
  transition: Slide,
};

export const unicodeToBase64 = (str) => {
  const utf8Bytes = new TextEncoder().encode(str);
  const binaryString = Array.from(utf8Bytes).map(byte => String.fromCharCode(byte)).join('');
  return btoa(binaryString);
}

export const base64ToUnicode = (base64) => {
  const binaryString = atob(base64);
  const bytes = Uint8Array.from(binaryString, char => char.charCodeAt(0));
  return new TextDecoder('utf-8').decode(bytes);
};

