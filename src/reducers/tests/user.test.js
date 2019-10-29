import { users } from '../users'

describe('USER', () => {
    it('should return the initial state', () => {
        
        const expected = [];

        const result = users(undefined, [])

        expect(result).toEqual(expected)
    });

    it('should be able to save users', () => {

        const initialState = []

        const action = {
            type: 'SAVE_USER',
            name: 'Victor',
            email: 'victor@victor.com',
            password: 'vicky123'
        }

        const expected = [{
            name: 'Victor',
            email: 'victor@victor.com',
            password: 'vicky123'
        }]

        const result = users(initialState, action)

        expect(result).toEqual(expected)
    });

    
});