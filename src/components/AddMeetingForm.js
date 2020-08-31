import { yupResolver } from '@hookform/resolvers';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

const AddMeetingSchema = yup.object().shape({
  person: yup.string().required().max(30),
});

AddMeetingForm.propTypes = {
  onSubmit: PropTypes.func,
};

export default function AddMeetingForm({ onSubmit }) {
  const { handleSubmit, register, errors } = useForm({
    resolver: yupResolver(AddMeetingSchema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Add who you've met:
        <input name="person" placeholder="name" ref={register} />
        {errors.person && errors.person.type === 'required' && (
          <p>Please provide a name</p>
        )}
        {errors.person && errors.person.type === 'max' && (
          <p>Too many characters</p>
        )}
      </label>
      <button>Add</button>
    </form>
  );
}
