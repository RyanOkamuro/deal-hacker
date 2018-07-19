import React from 'react';
import {shallow} from 'enzyme';

import ModifyButton from './modify-button';

describe('<ModifyButton />', () => {
    it('Renders without crashing', () => {
        shallow(<ModifyButton />);
    });
});