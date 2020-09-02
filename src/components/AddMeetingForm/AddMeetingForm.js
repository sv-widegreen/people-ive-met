import { yupResolver } from '@hookform/resolvers';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import * as yup from 'yup';
import getCurrentLocation from '../../utils/getCurrentLocation';
import { maxDate, minDate } from '../../utils/setDateRange';

const AddMeetingSchema = yup.object().shape({
  person: yup.string().required().max(30),
  dateMet: yup.date(),
  city: yup.string().required().max(50),
});

AddMeetingForm.propTypes = {
  addMeeting: PropTypes.func,
};

export default function AddMeetingForm({ addMeeting }) {
  const { handleSubmit, register, errors } = useForm({
    resolver: yupResolver(AddMeetingSchema),
  });

  const [city, setCity] = useState();
  const [loading, setLoading] = useState();

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="person">Add who you've met:</label>
      <input id="person" name="person" placeholder="Name" ref={register} />
      {errors.person && errors.person.type === 'required' && (
        <p>Please provide a name</p>
      )}
      {errors.person && errors.person.type === 'max' && (
        <p>Too many characters</p>
      )}

      <label htmlFor="dateMet">Date:</label>
      <input
        type="date"
        min={minDate}
        max={maxDate}
        id="dateMet"
        name="dateMet"
        ref={register}
      />
      {errors.dateMet && <p>Please select a date</p>}

      <label htmlFor="city">Type in the city:</label>
      <div>
        <input
          id="city"
          name="city"
          placeholder="City"
          value={city || ''}
          onChange={(event) => setCity(event.target.value)}
          ref={register}
        />
        or
        <button
          type="button"
          onClick={() => getCurrentLocation({ setCity, setLoading })}
        >
          use current location
        </button>
        {loading && <p>...loading...</p>}
      </div>
      {errors.city && errors.city.type === 'required' && (
        <p>Please provide a city</p>
      )}
      {errors.city && errors.city.type === 'max' && <p>Too many characters</p>}

      <button className="add">Add</button>
    </StyledForm>
  );

  function onSubmit(input, event) {
    input.day = input.dateMet.getDate();
    input.month = input.dateMet.getMonth() + 1;
    input.dateMet = input.dateMet.toDateString();
    addMeeting(input);
    event.target.reset();
    setCity('');
  }
}

const StyledForm = styled.form`
  margin: 20px 0;
  display: flex;
  flex-flow: column wrap;
  max-width: 500px;

  label {
    margin: 10px 0 0 0;
  }

  input {
    margin: 10px 0 5px 0;
  }

  p {
    color: var(--persian-plum);
    font-size: 0.8rem;
  }

  div > button {
    margin: 0 0 0 5px;
    padding: 6px;
  }

  div > input {
    margin: 10px 5px 5px 0;
  }

  .add {
    margin: 20px 0;
    border-radius: 50%;
    align-self: center;
    width: 50px;
    height: 50px;
  }
`;
