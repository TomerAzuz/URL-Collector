import getMetadata from 'metadata-scraper';
import sanitizeHtml from 'sanitize-html';
import { preprocessUrl } from '../utils/urlUtils.js';

export async function fetchMetadata(url) {
  try {
    url = preprocessUrl(url);

    const metadata = await getMetadata(url);
    return {
      url,
      title: metadata.title ? sanitizeHtml(metadata.title) : '',
      description: metadata.description ? sanitizeHtml(metadata.description) : '',
      image: metadata.image || metadata.icon || '',
    };
  } catch (error) {
    return {
      url,
      error: 'Failed to fetch metadata',
      errorDetails: error.message,
      errorType: error.name,
    };
  }
}
