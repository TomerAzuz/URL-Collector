import { preprocessUrl } from '../../utils/urlUtils.js';

describe('preprocessUrl', () => {
  test('should add https:// to URLs without protocol', () => {
    expect(preprocessUrl('example.com')).toBe('https://www.example.com/');
  });

  test('should add www. to URLs without it', () => {
    expect(preprocessUrl('https://example.com')).toBe('https://www.example.com/');
  });

  test('should not modify URLs with both protocol and www', () => {
    expect(preprocessUrl('https://www.example.com')).toBe('https://www.example.com/');
  });

  test('should trim whitespace from input', () => {
    expect(preprocessUrl('  example.com  ')).toBe('https://www.example.com/');
  });

  test('should handle URLs with paths and query parameters', () => {
    expect(preprocessUrl('example.com/path?query=value')).toBe(
      'https://www.example.com/path?query=value'
    );
  });
});
