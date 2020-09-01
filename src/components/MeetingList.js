import PropTypes from 'prop-types';
import React, { useState } from 'react';
import MeetingListItem from './MeetingListItem';
import SearchBar from './SearchBar';

MeetingList.propTypes = {
  meetingList: PropTypes.array,
};

export default function MeetingList({ meetingList }) {
  const fortnightAgo = new Date(Date.now() - 12096e5);
  const fortnightAgoList = meetingList
    .filter((meeting) => {
      const date = new Date(meeting.dateMet);
      return date > fortnightAgo;
    })
    .sort((a, b) => {
      const dateA = new Date(a.dateMet);
      const dateB = new Date(b.dateMet);
      return dateA > dateB ? -1 : 1;
    });

  const [selectedList, setSelectedList] = useState([]);

  return (
    <>
      <SearchBar searchList={fortnightAgoList} showSelection={selectMeetings} />
      {fortnightAgoList.length > 0 && selectedList.length === 0 && (
        <>
          <h2>All meetings of the last 14 days:</h2>
          <ul>
            {fortnightAgoList.map((meeting, index) => (
              <MeetingListItem key={meeting.person + index} meeting={meeting} />
            ))}
          </ul>
        </>
      )}

      {selectedList.length > 0 && (
        <ul>
          {selectedList.map((meeting, index) => (
            <MeetingListItem key={meeting.person + index} meeting={meeting} />
          ))}
        </ul>
      )}
    </>
  );

  function selectMeetings(searchTerm) {
    const selectedList = fortnightAgoList.filter(
      (meeting) => meeting.person === searchTerm
    );
    setSelectedList(selectedList);
  }
}
