import React from 'react';
import PropTypes from 'prop-types';
import MeetingListItem from './MeetingListItem';

MeetingList.propTypes = {
  meetingList: PropTypes.array,
};

export default function MeetingList({ meetingList }) {
  return (
    <>
      <h2>Recent meetings</h2>
      {meetingList && (
        <ul>
          {meetingList.map((meeting, index) => (
            <MeetingListItem key={meeting.person + index} meeting={meeting} />
          ))}
        </ul>
      )}
    </>
  );
}
