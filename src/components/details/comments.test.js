import React from 'react';
import {shallow, mount} from 'enzyme';

import Comments from './comments';

describe('Comments />', () => {
    it('Renders without crashing', () => {
        shallow(<Comments />);
    });
});