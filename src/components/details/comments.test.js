import React from 'react';
import {shallow} from 'enzyme';

import Comments from './comments';

describe('Comments />', () => {
    it('Renders without crashing', () => {
        shallow(<Comments />);
    });
});