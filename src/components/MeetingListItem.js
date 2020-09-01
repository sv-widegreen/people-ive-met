import PropTypes from 'prop-types';
import React from 'react';

MeetingListItem.propTypes = {
  meeting: PropTypes.object,
};

export default function MeetingListItem({ meeting }) {
  const { person, month, day, city } = meeting;

  return (
    <li>
      You have met
      <p>{person}</p>
      <p>
        on {month}/{day}
      </p>
      <p>in {city}</p>
    </li>
  );
}
