import React from 'react';
import PropTypes from 'prop-types';

MeetingListItem.propTypes = {
  meeting: PropTypes.object,
};

export default function MeetingListItem({ meeting }) {
  const { person, day } = meeting;
  const dateMet = day.toDateString();
  return (
    <li>
      You have met
      <p>{person}</p>
      <p>on {dateMet}</p>
    </li>
  );
}
