import React from 'react';
import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';

import Login from '../Login';

expect.extend(toHaveNoViolations);

it('should not violate accessibility rules', async () => {
    const { container } = render(
        <Login history={{ push: jest.fn() }} />
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
});
