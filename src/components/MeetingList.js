import PropTypes from 'prop-types';
import React from 'react';
import MeetingListItem from './MeetingListItem';

MeetingList.propTypes = {
  meetingList: PropTypes.array,
};

export default function MeetingList({ meetingList }) {
  const fortniteAgo = new Date(Date.now() - 12096e5);
  console.log(fortniteAgo);
  const last14daysList = meetingList
    .filter((meeting) => meeting.day > fortniteAgo && meeting.day < new Date())
    .sort((a, b) => (a.day > b.day ? -1 : 1));

  return (
    <>
      {last14daysList.length > 0 && (
        <>
          <h2>All meetings of the last 14 days:</h2>
          <ul>
            {last14daysList.map((meeting, index) => (
              <MeetingListItem key={meeting.person + index} meeting={meeting} />
            ))}
          </ul>
        </>
      )}
    </>
  );
}
