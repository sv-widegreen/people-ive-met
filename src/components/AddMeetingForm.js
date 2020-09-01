import { yupResolver } from '@hookform/resolvers';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import getCurrentLocation from '../utils/getCurrentLocation';

const AddMeetingSchema = yup.object().shape({
  person: yup.string().required().max(30),
  day: yup.date(),
  city: yup.string().required().max(50),
});

AddMeetingForm.propTypes = {
  onSubmit: PropTypes.func,
};

export default function AddMeetingForm({ addMeeting }) {
  const { handleSubmit, register, errors } = useForm({
    resolver: yupResolver(AddMeetingSchema),
  });

  const [location, setLocation] = useState();
  const [loading, setLoading] = useState();
  console.log(location);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="person">Add who you've met:</label>
      <input id="person" name="person" placeholder="Name" ref={register} />
      {errors.person && errors.person.type === 'required' && (
        <p>Please provide a name</p>
      )}
      {errors.person && errors.person.type === 'max' && (
        <p>Too many characters</p>
      )}

      <label htmlFor="day">Date:</label>
      <input type="date" id="day" name="day" ref={register} />
      {errors.day && <p>Please select a date</p>}

      <label htmlFor="city">Type in the city:</label>
      <div className="city">
        <input
          id="city"
          name="city"
          placeholder="City"
          value={location || ''}
          onChange={(event) => setLocation(event.target.value)}
          ref={register}
        />
        <button
          type="button"
          onClick={() => getCurrentLocation({ setLocation, setLoading })}
        >
          or use current location
        </button>
        {loading && <p>...loading...</p>}
      </div>
      {errors.city && errors.city.type === 'required' && (
        <p>Please provide a city</p>
      )}
      {errors.city && errors.city.type === 'max' && <p>Too many characters</p>}

      <button>Add</button>
    </form>
  );

  function onSubmit(newMeeting, event) {
    event.target.reset();
    setLocation('');
    addMeeting(newMeeting);
  }
}
