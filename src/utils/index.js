import { clsx } from 'clsx';

export function generateIframe(src, title, height = '600', width = '100%') {
  return `<iframe src="${src}" title="${title}" class='fr-draggable' height="${height}" width="${width}"></iframe>`;
}

export function cn(...inputs) {
  return clsx(inputs);
}
