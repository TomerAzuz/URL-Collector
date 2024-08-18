import { validateUrl } from '../utils';

describe('validateUrl', () => {
  const existingUrls = ['https://example.com', 'https://test.com'];

  test('returns error message for empty URL', () => {
    expect(validateUrl('', existingUrls)).toBe('URL cannot be empty');
  });

  test('returns error message for invalid URL format', () => {
    expect(validateUrl('not-a-url', existingUrls)).toBe('Invalid URL format');
  });

  test('returns error message for existing URL', () => {
    expect(validateUrl('https://example.com', existingUrls)).toBe('URL already exists');
  });

  test('returns empty string for valid and unique URL', () => {
    expect(validateUrl('https://newurl.com', existingUrls)).toBe('');
  });
});
