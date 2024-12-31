import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Login component', () => {
  render(<App />);
  
  // Check if the Login component is rendered
  const loginElement = screen.getByText(/login/i); 
  expect(loginElement).toBeInTheDocument();
});
