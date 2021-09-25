import React from 'react';
import { mount } from 'enzyme';
import { axe, toHaveNoViolations } from 'jest-axe';

import Login from '../Login';

expect.extend(toHaveNoViolations);

it('should not violate accessibility rules', async () => {
    const LoginPage = mount(
        <main><Login history={{ push: jest.fn() }} /></main>
    );

    const results = await axe(LoginPage.getDOMNode());
    expect(results).toHaveNoViolations();
});
