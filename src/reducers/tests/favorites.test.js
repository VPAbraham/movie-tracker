import { favorites } from '../favorites';

describe('favorites', () => {
    it('should return the initial state', () => {
        const expected = [];
        const result = favorites(undefined, {});
        expect(result).toEqual(expected)
    })

    it('should be able to store favorite movies', () => {
        const initialState = []
        const action = {type: 'SAVE_FAVORITES', id: 3}
        const expected = 3
        const result = favorites(initialState, action)
        expect(result).toEqual(expected)
    })
})