import React from 'react';
import {shallow, mount} from 'enzyme';

import SingleComment from './single-comment';

describe('SingleComment />', () => {
    const comment = {username: "JohnnyRocket", comment: "Perfect product", commentCreated: "2018-07-12T19:24:55.219Z"}
    it('Renders without crashing', () => {
        shallow(<SingleComment comment={comment} />);
    });
});
