import React from 'react';
import {shallow} from 'enzyme';

import FavoriteProductDescription from './favorites-description';

describe('<FavoriteProductDescription />', () => {
    it('Renders without crashing', () => {
        const favoriteItemDetail ={price: 15, dealLink: 'https://www.walmart.com/ip/All-New-F-re-TV-with-4K-Ultra-HD-and-Alexa-Voice-Remote-2017-Edition-Pendant-Streaming-Media-Player/336757733", dealName: "Fire Stick", productDescription: "The next generation of our best-selling Fire TV Stick 2013 now with the Alexa Voice Remote. Walmart has the deal on sale for $15 Free shipping with purchases $35+'}
        shallow(<FavoriteProductDescription favoriteItemDetail={favoriteItemDetail} />);
    });
});