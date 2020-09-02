import React from 'react';
import { render, screen } from '@testing-library/react';
import MeetingListItem from './MeetingListItem';

describe('MeetingListItem', () => {
  it('render the MeetingListItem', () => {
    render(<MeetingListItem meeting={{ person: 'test person' }} />);
    expect(screen.getByText('test person')).toBeInTheDocument();
  });
});
