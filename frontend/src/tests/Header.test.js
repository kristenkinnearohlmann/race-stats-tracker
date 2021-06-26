import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import Header from '../components/Header';

test('Renders Race Stats Tracker name', () => {
    render(<Header />);
    const textContent = screen.getAllByText(/Race Stats Tracker/i);
    expect(textContent).toEqual
});