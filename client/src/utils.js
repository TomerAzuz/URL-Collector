import validator from 'validator';

export const validateUrl = (url, existingUrls) => {
  if (!url) return 'URL cannot be empty';
  if (!validator.isURL(url)) return 'Invalid URL format';
  if (existingUrls.includes(url)) return 'URL already exists';
  return '';
};
