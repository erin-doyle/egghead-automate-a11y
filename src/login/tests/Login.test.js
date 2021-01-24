import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import Login from '../Login';

expect.extend(toHaveNoViolations);

describe('Using ReactDOM', () => {
    it('should not violate accessibility rules', async () => {
        const LoginPage = document.createElement('main');

        ReactDOM.render((
            <Login history={{ push: jest.fn() }} />
        ), LoginPage);

        const results = await axe(LoginPage);
        expect(results).toHaveNoViolations();
    });
});

describe('Using react-testing-library', () => {
    it('should not violate accessibility rules', async () => {
        const { container } = render(
            <Login history={{ push: jest.fn() }} />
        );

        const results = await axe(container);
        expect(results).toHaveNoViolations();
    });
});
