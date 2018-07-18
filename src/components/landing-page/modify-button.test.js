import React from 'react';
import {shallow, mount} from 'enzyme';

import ModifyButton from './modify-button';

describe('<ModifyButton />', () => {
    it('Renders without crashing', () => {
        shallow(<ModifyButton />);
    });
});