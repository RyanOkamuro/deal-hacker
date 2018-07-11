import React from 'react';
import {shallow, mount} from 'enzyme';

import CommentsListing from './comments-listing';

describe('CommentsListing />', () => {
    it('Renders without crashing', () => {
        shallow(<CommentsListing />);
    });
});