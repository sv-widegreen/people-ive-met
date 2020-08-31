import React from 'react';
import { render, screen } from '@testing-library/react';
import MeetingListItem from './MeetingListItem';

describe('MeetingListItem', () => {
  it('render the MeetingListItem', () => {
    const today = new Date();
    render(<MeetingListItem meeting={{ person: 'test person', day: today }} />);
    expect(screen.getByText('test person')).toBeInTheDocument();
  });
});
