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
