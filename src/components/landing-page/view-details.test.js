import React from 'react';
import {shallow, mount} from 'enzyme';

import ViewDetails from './view-details';

describe('<ViewDetails />', () => {
    it('Renders without crashing', () => {
        shallow(<ViewDetails />);
    });
});