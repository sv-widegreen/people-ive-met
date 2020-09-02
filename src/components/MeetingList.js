import PropTypes from 'prop-types';
import React, { useState } from 'react';
import MeetingListItem from './MeetingListItem';
import SearchBar from './SearchBar';

MeetingList.propTypes = {
  meetingList: PropTypes.array,
};

export default function MeetingList({ meetingList }) {
  const fortnightAgo = new Date(Date.now() - 12096e5);
  const recentMeetingsList = meetingList.filter((meeting) => {
    const date = new Date(meeting.dateMet);
    return date > fortnightAgo;
  });

  const [selectedList, setSelectedList] = useState(recentMeetingsList);

  return (
    <>
      <h3>My recent meetings:</h3>
      <SearchBar
        searchList={recentMeetingsList}
        showSelection={selectMeetings}
      />
      <button type="button" onClick={() => clearSearch()}>
        Show all meetings
      </button>
      <button type="button" onClick={() => sortByPerson()}>
        Sort by person
      </button>
      <button type="button" onClick={() => sortByDate()}>
        Sort by date
      </button>
      <h3>I have met:</h3>
      <ul>
        {selectedList.map((meeting, index) => (
          <MeetingListItem key={meeting.person + index} meeting={meeting} />
        ))}
      </ul>
    </>
  );

  function selectMeetings(searchTerm) {
    const selectedList = recentMeetingsList.filter(
      (meeting) => meeting.person === searchTerm
    );
    setSelectedList(selectedList);
  }

  function clearSearch() {
    setSelectedList(recentMeetingsList);
  }

  function sortByPerson() {
    const sortedList = [...selectedList].sort((a, b) => (a > b ? 1 : -1));
    setSelectedList(sortedList);
  }

  function sortByDate() {
    const sortedList = [...selectedList].sort((a, b) => {
      const dateA = new Date(a.dateMet);
      const dateB = new Date(b.dateMet);
      return dateA > dateB ? -1 : 1;
    });
    setSelectedList(sortedList);
  }
}
