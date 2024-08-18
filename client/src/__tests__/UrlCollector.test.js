import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import UrlCollector from '../components/UrlCollector';

describe('UrlCollector', () => {
  test('adds URLS to the list when submitted', () => {
    render(<UrlCollector />);
    const input = screen.getByLabelText('Enter URL');
    const button = screen.getByLabelText('Add URL');

    fireEvent.change(input, { target: { value: 'https://test.com' } });
    fireEvent.click(button);

    expect(screen.getByText('https://test.com')).toBeInTheDocument();
  });

  test('removes URL from the list when delete button is clicked', () => {
    render(<UrlCollector />);
    const input = screen.getByLabelText('Enter URL');
    const addButton = screen.getByLabelText('Add URL');

    fireEvent.change(input, { target: { value: 'https://test.com' } });
    fireEvent.click(addButton);

    const deleteButton = screen.getByLabelText('delete');
    fireEvent.click(deleteButton);

    expect(screen.queryByText('https://test.com')).not.toBeInTheDocument();
  });
});
