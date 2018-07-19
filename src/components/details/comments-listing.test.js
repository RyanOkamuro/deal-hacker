import React from 'react';
import {shallow} from 'enzyme';

import CommentsListing from './comments-listing';

describe('CommentsListing />', () => {
    it('Renders without crashing', () => {
        shallow(<CommentsListing />);
    });
});