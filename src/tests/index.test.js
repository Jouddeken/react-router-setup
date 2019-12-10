import '../../setupTests';
import React from 'react';
import { shallow } from 'enzyme';
import Router from '../index';

describe('Router', () => {
   it('renders without crashing', () => {
      const routes = [
        {
          id: 'route',
          path: '/',
          exact: true,
          component: () => <span>Test</span>,
        },
      ];
      const router = shallow(<Router config={routes} />);
    });
});
