import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import UrlInputForm from '../components/UrlInput/UrlInputForm';
import api from '../api/api';

jest.mock('../api/api');

describe('UrlInputForm', () => {
  const setMetadata = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('submits form with valid URLs', async () => {
    const mockResponse = {
      data: [
        { url: 'https://example1.com', title: 'Example 1' },
        { url: 'https://example2.com', title: 'Example 2' },
        { url: 'https://example3.com', title: 'Example 3' },
      ],
    };
    api.post.mockResolvedValue(mockResponse);

    render(<UrlInputForm setMetadata={setMetadata} />);
    const input = screen.getByLabelText('Enter URL');
    const addButton = screen.getByRole('button', { name: /add/i });
    const submitButton = screen.getByRole('button', { name: /submit urls/i });

    for (let i = 1; i <= 3; i++) {
      fireEvent.change(input, { target: { value: `https://example${i}.com` } });
      fireEvent.click(addButton);
    }

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(api.post).toHaveBeenCalledWith(
        '/api/fetch-metadata',
        { urls: ['https://example1.com', 'https://example2.com', 'https://example3.com'] }
      );
      expect(setMetadata).toHaveBeenCalledWith(expect.any(Function));
    });

    const setMetadataCallback = setMetadata.mock.calls[0][0];
    const result = setMetadataCallback([]);
    expect(result).toEqual(mockResponse.data);
  });
});