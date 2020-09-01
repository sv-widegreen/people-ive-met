import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AddMeetingForm from './AddMeetingForm';

describe('AddMeetingForm', () => {
  it('renders AddMeetingForm', () => {
    const renderedForm = render(<AddMeetingForm />);
    expect(renderedForm).toBeTruthy();
  });

  it('should display the person required error message when no input is provided after submit', async () => {
    render(<AddMeetingForm />);
    expect(screen.queryByText('Please provide a name')).toBeNull();
    fireEvent.click(screen.getByText('Add', { selector: 'button' }));
    const errorMessage = await screen.findByText('Please provide a name');
    expect(errorMessage).toBeInTheDocument();
  });

  it('should display the person max length error message when more than 30 characters are typed in', async () => {
    render(<AddMeetingForm />);
    expect(screen.queryByText('Too many characters')).toBeNull();
    const personInput = screen.getByRole('textbox', {
      name: "Add who you've met:",
    });
    userEvent.type(personInput, 'Too many characters typed in 30');
    fireEvent.click(screen.getByText('Add', { selector: 'button' }));
    const errorMessage = await screen.findByText('Too many characters');
    expect(errorMessage).toBeInTheDocument();
  });

  it('should display the city required error message when no input is provided after submit', async () => {
    render(<AddMeetingForm />);
    expect(screen.queryByText('Please provide a city')).toBeNull();
    fireEvent.click(screen.getByText('Add', { selector: 'button' }));
    const errorMessage = await screen.findByText('Please provide a city');
    expect(errorMessage).toBeInTheDocument();
  });

  it('should display the city max length error message when more than 50 characters are typed in', async () => {
    render(<AddMeetingForm />);
    const personInput = screen.getByRole('textbox', {
      name: 'Type in the city:',
    });
    expect(screen.queryByText('Too many characters')).toBeNull();
    userEvent.type(
      personInput,
      'Too many characters typed in whereas a city name should be shorter'
    );
    fireEvent.click(screen.getByText('Add', { selector: 'button' }));
    const errorMessage = await screen.findByText('Too many characters');
    expect(errorMessage).toBeInTheDocument();
  });
});
