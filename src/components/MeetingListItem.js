import PropTypes from 'prop-types';
import React from 'react';

MeetingListItem.propTypes = {
  meeting: PropTypes.object,
};

export default function MeetingListItem({ meeting }) {
  let { person, month, day, city } = meeting;
  if (day < 10) {
    day = '0' + day;
  }
  if (month < 10) {
    month = '0' + month;
  }

  return (
    <li>
      <p>{person}</p>
      <p>
        on {month} / {day}
      </p>
      <p>in {city}</p>
    </li>
  );
}
