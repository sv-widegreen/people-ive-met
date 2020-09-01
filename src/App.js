import React, { useState } from 'react';
import AddMeetingForm from './components/AddMeetingForm';
import MeetingList from './components/MeetingList';

export default function App() {
  const [meetings, setMeetings] = useState([]);
  return (
    <>
      <h1>People I've met</h1>
      <AddMeetingForm addMeeting={updateMeetings} />
      <MeetingList meetingList={meetings} />
    </>
  );

  function updateMeetings(newMeeting) {
    setMeetings([...meetings, newMeeting]);
    console.log(meetings);
    console.log(newMeeting.day);
  }
}
