import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AddMeetingForm from './AddMeetingForm';

describe('AddMeetingForm', () => {
  it('renders AddMeetingForm', () => {
    const renderedForm = render(<AddMeetingForm />);
    expect(renderedForm).toBeTruthy();
  });

  it('should display the required error message when no input is provided after submit', async () => {
    render(<AddMeetingForm />);
    fireEvent.click(screen.getByRole('button'));
    expect(screen.queryByText('Please provide a name')).toBeNull();
    const errorMessage = await screen.findByText('Please provide a name');
    expect(errorMessage).toBeInTheDocument();
  });

  it('should display the max length error message when more than 30 characters are typed in', async () => {
    render(<AddMeetingForm />);
    const personInput = screen.getByRole('textbox', {
      name: "Add who you've met:",
    });
    expect(screen.queryByText('Too many characters')).toBeNull();
    userEvent.type(personInput, 'Too many characters typed in 30');
    fireEvent.click(screen.getByRole('button'));
    const errorMessage = await screen.findByText('Too many characters');
    expect(errorMessage).toBeInTheDocument();
  });
});
