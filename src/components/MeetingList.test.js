import React from 'react';
import { render, screen } from '@testing-library/react';
import MeetingList from './MeetingList';

describe('MeetingList', () => {
  it('renders MeetingList', () => {
    const today = new Date();
    render(
      <MeetingList meetingList={[{ person: 'test person', day: today }]} />
    );
    expect(screen.getByRole('list')).toBeInTheDocument();
  });

  it('does not render the MeetingListItem when list is empty', () => {
    render(<MeetingList meetingList={[]} />);
    expect(screen.queryByRole('listitem')).toBeNull();
  });
});
