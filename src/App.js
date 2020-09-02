import React from 'react';
import AddMeetingForm from './components/AddMeetingForm/AddMeetingForm';
import MeetingList from './components/MeetingList/MeetingList';
import { useLocalStorageState } from './utils/useLocalStorageState';

export default function App() {
  const [allMeetings, setAllMeetings] = useLocalStorageState('allMeetings');

  return (
    <>
      <h1>People I've met</h1>
      <h2>(in the last 14 days at least)</h2>
      <AddMeetingForm addMeeting={updateMeetings} />
      <MeetingList meetingList={allMeetings} />
    </>
  );

  function updateMeetings(newMeeting) {
    setAllMeetings([...allMeetings, newMeeting]);
  }
}
