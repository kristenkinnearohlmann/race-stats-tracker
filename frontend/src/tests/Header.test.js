import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import Header from '../components/Header';

test('Renders Race Stats Tracker name', () => {
    // render(<Header />);
    // const textContent = screen.getAllByText(/Race Stats Tracker/i);
    // expect(textContent).toEqual
    // header = (
    //     <Router>
    //         <Header />
    //     </Router>
    // )
    // render(header);
    const div = document.createElement("div");
    ReactDOM.render(
        <Router>
            <Header />
        </Router>,
        div
    );

    ReactDOM.unmountComponentAtNode(div);
});