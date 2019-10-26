import { movies } from '../movies';

describe('movies', () => {
    it('should return the initial state', () => {
        const expected = []
        const result = movies(undefined, [])

        expect(result).toEqual(expected)
    });
    it('should be able to return movies', () => {
        const initialState = [];
        const action = {type: 'SAVE_MOVIES', movies: [
            {title: "Joker",
            id: 4,
            release_date: "2019-10-18"},
            {title: "Maleficent: Mistress of Evil",
            id: 56,
            release_date: "2019-10-04"},
            {title: "Zombieland: Double Tap",
            id: 70,
            release_date: "2019-10-18"}
        ]}
        const expected = [
            {title: "Joker",
            id: 4,
            release_date: "2019-10-18"},
            {title: "Maleficent: Mistress of Evil",
            id: 56,
            release_date: "2019-10-04"},
            {title: "Zombieland: Double Tap",
            id: 70,
            release_date: "2019-10-18"}
        ]

        const result = movies(initialState, action)

        expect(result).toEqual(expected)
    })
})