import React from 'react';
import {shallow} from 'enzyme';

import RegistrationPage from './registration-page';

describe('<RegistrationPage />', () => {
    it('Renders without crashing', () => {
        shallow(<RegistrationPage />);
    });
});