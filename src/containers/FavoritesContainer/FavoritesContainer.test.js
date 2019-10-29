import React from 'react';
import { shallow } from 'enzyme';
import { FavoritesContainer }from './FavoritesContainer';


describe('favorites', () => {
    it.skip('should return the initial state', () => {
        const expected = [];
        const result = favorites(undefined, {});
        expect(result).toEqual(expected)
    })
})