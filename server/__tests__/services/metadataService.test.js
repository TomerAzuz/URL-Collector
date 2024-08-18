import { fetchMetadata } from '../../services/metadataService.js';
import getMetadata from 'metadata-scraper';
import sanitizeHtml from 'sanitize-html';

jest.mock('metadata-scraper');
jest.mock('sanitize-html');
jest.mock('../../utils/urlUtils.js', () => ({
  preprocessUrl: jest.fn((url) => url),
}));

describe('fetchMetadata', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should return metadata for a valid URL', async () => {
    const mockMetadata = {
      title: 'Test Title',
      description: 'Test Description',
      image: 'https://example.com/image.jpg',
    };
    getMetadata.mockResolvedValue(mockMetadata);
    sanitizeHtml.mockImplementation((text) => text);

    const result = await fetchMetadata('https://example.com');

    expect(result).toEqual({
      url: 'https://example.com',
      title: 'Test Title',
      description: 'Test Description',
      image: 'https://example.com/image.jpg',
    });
  });

  test('should handle errors and return error object', async () => {
    getMetadata.mockRejectedValue(new Error('Fetch failed'));

    const result = await fetchMetadata('https://example.com');

    expect(result).toEqual({
      url: 'https://example.com',
      error: 'Failed to fetch metadata',
      errorDetails: 'Fetch failed',
      errorType: 'Error',
    });
  });
});
