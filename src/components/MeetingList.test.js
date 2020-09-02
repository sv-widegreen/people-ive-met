import React from 'react';
import { render, screen } from '@testing-library/react';
import MeetingList from './MeetingList';

describe('MeetingList', () => {
  it('renders MeetingList', () => {
    render(
      <MeetingList meetingList={[{ person: 'test person', city: 'Hamburg' }]} />
    );
    expect(screen.getByText('My recent meetings:')).toBeInTheDocument();
  });

  it('does not render the MeetingListItem when list is empty', () => {
    render(<MeetingList meetingList={[]} />);
    expect(screen.queryByRole('listitem')).toBeNull();
  });
});
