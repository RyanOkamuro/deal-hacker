import React from 'react';
import {shallow, mount} from 'enzyme';

import SingleComment from './single-comment';

describe('SingleComment />', () => {
    const comment = {username: "JohnnyRocket", comment: "Perfect product"}
    it('Renders without crashing', () => {
        shallow(<SingleComment comment={comment} />);
    });
});
