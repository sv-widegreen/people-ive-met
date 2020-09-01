import React from 'react';
import AddMeetingForm from './components/AddMeetingForm';
import MeetingList from './components/MeetingList';
import { useLocalStorageState } from './utils/useLocalStorageState';

export default function App() {
  const [meetings, setMeetings] = useLocalStorageState('meetings');
  return (
    <>
      <h1>People I've met</h1>
      <AddMeetingForm addMeeting={updateMeetings} />
      <MeetingList meetingList={meetings} />
    </>
  );

  function updateMeetings(newMeeting) {
    setMeetings([...meetings, newMeeting]);
  }
}
