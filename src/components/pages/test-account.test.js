import React from 'react';
import {shallow} from 'enzyme';

import TestAccount from './test-account';

describe('<TestAccount />', () => {
    it('Renders without crashing', () => {
        shallow(<TestAccount />);
    });
});