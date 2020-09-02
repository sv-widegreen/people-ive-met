import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

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
    <StyledListItem>
      <p>{person}</p>
      <p>
        on {month} / {day}
      </p>
      <p>in {city}</p>
      <div></div>
    </StyledListItem>
  );
}

const StyledListItem = styled.li`
  margin: 10px 0;

  p {
    padding: 5px;
  }

  p:first-child {
    font-size: 1.1rem;
    font-weight: 600;
  }

  p:last-child {
    padding: 0 5px 5px 5px;
  }

  div {
    background: var(--morning-blue);
    width: 100%;
    height: 1px;
    margin: 5px 0;
  }
`;
