import React from 'react';
import PropTypes from 'prop-types';

MeetingListItem.propTypes = {
  meeting: PropTypes.object,
};

export default function MeetingListItem({ meeting }) {
  return <li>{meeting.person}</li>;
}
