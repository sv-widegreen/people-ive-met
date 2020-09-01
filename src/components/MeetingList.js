import PropTypes from 'prop-types';
import React from 'react';
import MeetingListItem from './MeetingListItem';
import SearchBar from './SearchBar';

MeetingList.propTypes = {
  meetingList: PropTypes.array,
};

export default function MeetingList({ meetingList }) {
  const fortniteAgo = new Date(Date.now() - 12096e5);

  const last14daysList = meetingList
    .filter((meeting) => {
      const date = new Date(meeting.dateMet);
      return date > fortniteAgo;
    })
    .sort((a, b) => {
      const dateA = new Date(a.dateMet);
      const dateB = new Date(b.dateMet);
      return dateA > dateB ? -1 : 1;
    });

  console.log('last14daysList', last14daysList);
  return (
    <>
      <SearchBar searchList={last14daysList} />
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
