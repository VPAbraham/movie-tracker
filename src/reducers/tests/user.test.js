import { user } from '../user'

describe('USER', () => {
    it('should return the initial state', () => {
        
        const expected = {};

        const result = user(undefined, {})

        expect(result).toEqual(expected)
    });
    it('should be able to save users', () => {

        const initialState = {}

        const action = {
            type: 'SAVE_USER',
            name: 'Victor',
            email: 'victor@victor.com',
            password: 'vicky123',
            id: 4
        }

        const expected = {
            name: 'Victor',
            email: 'victor@victor.com',
            password: 'vicky123',
            id: 4
        }

        const result = user(initialState, action)

        expect(result).toEqual(expected)
    })
})