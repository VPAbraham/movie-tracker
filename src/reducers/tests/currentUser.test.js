import { currentUser } from '../currentUser'

describe('currentUser', () => {
    it('should return the intial state', () => {
        const expected = {}

        const result = currentUser(undefined, {})

        expect(result).toEqual(expected)
    });
    it('should be able to set the current user', () => {
        const initialState = {}

        const action = {
            type: 'SET_CURRENT_USER',
            user: { 
                name: 'Victor',
                email: 'victor@gmail.com',
                password: 'Vicky123'
            }
        }

        const expected = {
            
                name: 'Victor',
                email: 'victor@gmail.com',
                password: 'Vicky123'
           
        }
        
        const result = currentUser(initialState, action)

        expect(result).toEqual(expected)
    })
})