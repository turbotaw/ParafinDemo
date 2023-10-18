import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom';
import FormPage from './FormPage';


global.fetch = jest.fn();

beforeEach(() => {
    (global.fetch as jest.Mock).mockReset();
  });

describe('<FormPage />', () => {
  test('renders without crashing', () => {
     render(<FormPage />, { wrapper: Router });
    expect(screen.getByText('Add New Customer Information')).toBeInTheDocument();
  });

  test('handles form input changes', () => {
     render(<FormPage />, { wrapper: Router });
    fireEvent.change(screen.getByPlaceholderText('Legal Name'), { target: { value: 'Test Name' } });
    expect(screen.getByPlaceholderText('Legal Name')).toHaveValue('Test Name');
  });
  
});