import { clsx } from 'clsx';

export function generateIframe(src, title, height, width) {
  return `<iframe src="${src}" title="${title}" class='fr-draggable' height="${height}" width="${width}"></iframe>`;
}

export function cn(...inputs) {
  return clsx(inputs);
}
