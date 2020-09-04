import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import MeetingListItem from './MeetingListItem';
import SearchBar from './SearchBar';

MeetingList.propTypes = {
  meetingList: PropTypes.array,
};

export default function MeetingList({ meetingList }) {
  const [selectedList, setSelectedList] = useState([]);

  useEffect(() => {
    setSelectedList(meetingList);
  }, [meetingList]);

  return (
    <StyledMeetingList>
      <h3>My recent meetings:</h3>
      <SearchBar searchList={meetingList} showSelection={selectMeetings} />
      <StyledButtonGroup>
        <button type="button" onClick={() => clearSearch()}>
          Show all meetings
        </button>
        <button type="button" onClick={() => sortByPerson()}>
          Sort by person
        </button>
        <button type="button" onClick={() => sortByDate()}>
          Sort by date
        </button>
      </StyledButtonGroup>
      <h3>I have met:</h3>
      <ul>
        {selectedList.length > 0 &&
          selectedList.map((meeting, index) => (
            <MeetingListItem key={meeting.person + index} meeting={meeting} />
          ))}
      </ul>
    </StyledMeetingList>
  );

  // filter the list for search term
  function selectMeetings(searchTerm) {
    const searchedMeetingList = [...meetingList].filter(
      (meeting) => meeting.person === searchTerm
    );
    setSelectedList(searchedMeetingList);
  }

  // show all entries to reset search selection
  function clearSearch() {
    setSelectedList(meetingList);
  }

  // sort functions
  function sortByPerson() {
    const sortedList = [...selectedList].sort((a, b) =>
      a.person > b.person ? 1 : -1
    );
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

const StyledMeetingList = styled.div`
  margin: 20px 0;
  display: flex;
  flex-flow: column wrap;
  max-width: 500px;

  h3 {
    margin: 0 0 10px 0;
  }
`;

const StyledButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 0 15px 0;
`;
