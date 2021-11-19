import { render, screen, within, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import App from './App';

describe('App',() => {
  let component;
  beforeEach( () => {
    component = render(<App />);
  });

  test('renders the home component', () => {
    const headerElement = screen.getByText(/favorite book/i);
    expect(headerElement).toBeInTheDocument();
  });

});



