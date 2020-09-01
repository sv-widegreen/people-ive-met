import PropTypes from 'prop-types';
import React, { useState } from 'react';
import MeetingListItem from './MeetingListItem';
import SearchBar from './SearchBar';

MeetingList.propTypes = {
  meetingList: PropTypes.array,
};

export default function MeetingList({ meetingList }) {
  const fortnightAgo = new Date(Date.now() - 12096e5);
  const fortnightAgoList = meetingList.filter((meeting) => {
    const date = new Date(meeting.dateMet);
    return date > fortnightAgo;
  });
  console.log(fortnightAgoList);
  const [selectedList, setSelectedList] = useState(fortnightAgoList);
  console.log('selectedList', selectedList);

  return (
    <>
      <SearchBar searchList={fortnightAgoList} showSelection={selectMeetings} />
      <button type="button" onClick={() => clearSearch()}>
        Show all meetings
      </button>
      <button type="button" onClick={() => sortByPerson()}>
        Sort by person
      </button>
      <button type="button" onClick={() => sortByDate()}>
        Sort by date
      </button>

      {selectedList.length > 0 && (
        <>
          <h2>You have met:</h2>
          <ul>
            {selectedList.map((meeting, index) => (
              <MeetingListItem key={meeting.person + index} meeting={meeting} />
            ))}
          </ul>
        </>
      )}
    </>
  );

  function selectMeetings(searchTerm) {
    const selectedList = fortnightAgoList.filter(
      (meeting) => meeting.person === searchTerm
    );
    setSelectedList(selectedList);
  }

  function clearSearch() {
    setSelectedList(fortnightAgoList);
  }

  function sortByPerson() {
    const sortedList = [...selectedList].sort((a, b) => (a > b ? 1 : -1));
    setSelectedList(sortedList);
    console.log('sortedPerson', selectedList);
  }

  function sortByDate() {
    const sortedList = [...selectedList].sort((a, b) => {
      const dateA = new Date(a.dateMet);
      const dateB = new Date(b.dateMet);
      return dateA > dateB ? -1 : 1;
    });
    setSelectedList(sortedList);
    console.log('sortedDate', selectedList);
  }
}
