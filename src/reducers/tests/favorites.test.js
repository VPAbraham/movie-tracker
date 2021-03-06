import { favorites } from '../favorites';

describe('favorites', () => {
    it.skip('should return the initial state', () => {
        const expected = [];
        const result = favorites(undefined, {});
        expect(result).toEqual(expected)
    })

    it.skip('should be able to store favorite movies', () => {
        const initialState = []
        const action = {type: 'SAVE_FAVORITES', id: 3}
        const expected = 3
        const result = favorites(initialState, action)
        expect(result).toEqual(expected)
    })
})