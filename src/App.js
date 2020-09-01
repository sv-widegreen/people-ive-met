import React from 'react';
import AddMeetingForm from './components/AddMeetingForm';
import MeetingList from './components/MeetingList';
import { useLocalStorageState } from './utils/useLocalStorageState';

export default function App() {
  const [allMeetings, setAllMeetings] = useLocalStorageState('allMeetings');
  return (
    <>
      <h1>People I've met</h1>
      <AddMeetingForm addMeeting={updateMeetings} />
      <MeetingList meetingList={allMeetings} />
    </>
  );

  function updateMeetings(newMeeting) {
    setAllMeetings([...allMeetings, newMeeting]);
  }
}
