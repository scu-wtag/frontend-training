import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

test('renders the button and increments count', () => {
    render(<App />);

    const button = screen.getByRole('button', { name: /count is 0/i });
    expect(button).toBeInTheDocument();

    fireEvent.click(button);

    expect(button).toHaveTextContent('count is 1');

    fireEvent.click(button);

    expect(button).toHaveTextContent('count is 2');

});
