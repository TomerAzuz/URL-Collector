export const preprocessUrl = (url) => {
  url = url.trim();

  if (!url.startsWith('https://') && !url.startsWith('http://')) {
    url = 'https://' + url;
  }

  try {
    const parsedUrl = new URL(url);

    const hostname = parsedUrl.hostname;

    if (!hostname.startsWith('www.')) {
      parsedUrl.hostname = 'www.' + hostname;
    }

    return parsedUrl.toString();
  } catch (error) {
    console.error('Invalid URL:', url);
    return url;
  }
};
