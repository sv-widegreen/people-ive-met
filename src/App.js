import React, { useState } from 'react';
import AddMeetingForm from './components/AddMeetingForm';

export default function App() {
  const [meetings, setMeetings] = useState([]);
  return (
    <>
      <h1>People I've met</h1>
      <AddMeetingForm onSubmit={updateMeetings} />
    </>
  );

  function updateMeetings(newMeeting) {
    setMeetings([...meetings, newMeeting]);
    console.table(meetings);
  }
}
