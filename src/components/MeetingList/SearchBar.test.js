import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from './SearchBar';

describe('SearchBar', () => {
  it('renders the SearchBar', () => {
    render(<SearchBar searchList={[{ person: 'test person' }]} />);
    expect(screen.getByText('Search for a person:')).toBeInTheDocument();
  });

  it('renders the option list with change event', () => {
    render(<SearchBar searchList={[{ person: 'test person' }]} />);
    const searchInput = screen.getByPlaceholderText('Name');
    expect(screen.queryByText('person', { selector: 'span' })).toBeNull();
    fireEvent.change(searchInput, { target: { value: 'test' } });
    expect(
      screen.getByText('person', { selector: 'span' })
    ).toBeInTheDocument();
  });

  it('shows no results message with unmatching input', () => {
    render(<SearchBar searchList={[{ person: 'test person' }]} />);
    const searchInput = screen.getByPlaceholderText('Name');
    fireEvent.change(searchInput, { target: { value: 'a' } });
    expect(
      screen.getByText('No results found', { selector: 'span' })
    ).toBeInTheDocument();
  });
});
