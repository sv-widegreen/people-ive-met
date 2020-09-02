import PropTypes from 'prop-types';
import React, { useState } from 'react';
import MeetingListItem from './MeetingListItem';
import SearchBar from './SearchBar';
import styled from 'styled-components';

MeetingList.propTypes = {
  meetingList: PropTypes.array,
};

export default function MeetingList({ meetingList }) {
  const [selectedList, setSelectedList] = useState(meetingList);

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
        {selectedList.length < meetingList.length &&
          meetingList.map((meeting, index) => (
            <MeetingListItem key={meeting.person + index} meeting={meeting} />
          ))}
        {selectedList.length >= meetingList.length &&
          selectedList.map((meeting, index) => (
            <MeetingListItem key={meeting.person + index} meeting={meeting} />
          ))}
      </ul>
    </StyledMeetingList>
  );

  function selectMeetings(searchTerm) {
    const selectedList = meetingList.filter(
      (meeting) => meeting.person === searchTerm
    );
    setSelectedList(selectedList);
  }

  function clearSearch() {
    setSelectedList(meetingList);
  }

  function sortByPerson() {
    const sortedList = [...meetingList].sort((a, b) =>
      a.person > b.person ? 1 : -1
    );
    setSelectedList(sortedList);
  }

  function sortByDate() {
    const sortedList = [...meetingList].sort((a, b) => {
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
