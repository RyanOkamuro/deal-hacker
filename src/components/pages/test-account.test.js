import React from 'react';
import {shallow, mount} from 'enzyme';

import TestAccount from './test-account';

describe('<TestAccount />', () => {
    it('Renders without crashing', () => {
        shallow(<TestAccount />);
    });
});