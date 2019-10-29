import { isLoggedIn } from '../isLoggedIn'

describe('isLoggedIn', () => {
    it('should return the initial state', () => {
        const expected = false;

        const result = isLoggedIn(undefined, false)

        expect(result).toEqual(expected)
    })
    it.skip('should be able to log in a user', () => {
        const action = {
            type: 'LOGIN',
            loggedIn: true
        }
        const state = 
            { name: 'Eric', email: 'eric@gmail.com' , password:'password', id: 5 , loggedIn: false }
        
        const newState = 
            { name: 'Eric', email: 'eric@gmail.com', password: 'password', id: 5, loggedIn: true }
        

        const result = isLoggedIn(state, action);

        expect(result).toEqual(newState);
    });
    it.skip('should be able to log in a user', () => {
        const action = {
            type: 'LOGOUT',
            loggedIn: false
        }
        const state = 
            { name: 'Eric', email: 'eric@gmail.com' , password:'password', id: 5 , loggedIn: true }
        
        const newState = 
            { name: 'Eric', email: 'eric@gmail.com', password: 'password', id: 5, loggedIn: false }
        

        const result = isLoggedIn(state, action);

        expect(result).toEqual(newState);
    });
})