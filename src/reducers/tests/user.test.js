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

    it.skip('should be able to log in a user', () => {
        const action = {
            type: 'TOGGLE_LOGIN',
            loggedIn: true
        }
        const state = [
            { name: 'Eric', email: 'eric@gmail.com' , password:'password', id: 5 , loggedIn: true },
            { name: 'Jessie', email: 'jessie@yahoo.com', password: 'password', id: 1, loggedIn: true },
            { name: 'Victor' , email: 'victor@hotmail.com', password: 'password', id: 6, loggedIn: true }
        ]
        const newState = [
            { name: 'Eric', email: 'eric@gmail.com', password: 'password', id: 5, loggedIn: true },
            { name: 'Jessie', email: 'jessie@yahoo.com', password: 'password', id: 1, loggedIn: true },
            { name: 'Victor', email: 'victor@hotmail.com', password: 'password', id: 6, loggedIn: false }
        ]

        const result = users(state, action);

        expect(result).toEqual(newState);
    });
    it.skip('should be able to toggle a user\'s login status to false', () => {
        const action = {
            type: 'TOGGLE_LOGIN',
            id: 1
        }
        const state = [
            { name: 'Eric', email: 'eric@gmail.com', password: 'password', id: 5, loggedIn: false },
            { name: 'Jessie', email: 'jessie@yahoo.com', password: 'password', id: 1, loggedIn: true },
            { name: 'Victor', email: 'victor@hotmail.com', password: 'password', id: 6, loggedIn: false }
        ]
        const newState = [
            { name: 'Eric', email: 'eric@gmail.com', password: 'password', id: 5, loggedIn: false },
            { name: 'Jessie', email: 'jessie@yahoo.com', password: 'password', id: 1, loggedIn: false },
            { name: 'Victor', email: 'victor@hotmail.com', password: 'password', id: 6, loggedIn: false }
        ]

        const result = user(state, action);

        expect(result).toEqual(newState);
    })
});