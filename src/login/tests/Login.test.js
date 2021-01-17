import React from 'react';
import ReactDOM from 'react-dom';
import { axe, toHaveNoViolations } from 'jest-axe';
import Login from '../Login';

expect.extend(toHaveNoViolations);

it('should not violate accessibility rules', async () => {
    const LoginPage = document.createElement('main');

    ReactDOM.render((
        <Login history={{ push: jest.fn() }} />
    ), LoginPage);

    const results = await axe(LoginPage);
    expect(results).toHaveNoViolations();
});
