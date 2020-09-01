import PropTypes from 'prop-types';
import React from 'react';

MeetingListItem.propTypes = {
  meeting: PropTypes.object,
};

export default function MeetingListItem({ meeting }) {
  const { person, day, city } = meeting;
  const dateMet = day.toDateString();

  return (
    <li>
      You have met
      <p>{person}</p>
      <p>on {dateMet}</p>
      <p>in {city}</p>
    </li>
  );
}
