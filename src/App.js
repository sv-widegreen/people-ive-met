import React, { useState } from 'react';
import AddMeetingForm from './components/AddMeetingForm';
import MeetingList from './components/MeetingList';

export default function App() {
  const [meetings, setMeetings] = useState([]);
  return (
    <>
      <h1>People I've met</h1>
      <AddMeetingForm onSubmit={updateMeetings} />
      <MeetingList meetingList={meetings} />
    </>
  );

  function updateMeetings(newMeeting, event) {
    event.target.reset();
    setMeetings([...meetings, newMeeting]);
    console.table(meetings);
  }
}
