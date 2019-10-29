import * as actions from '.';


describe('actions', () => {

    describe('SAVE_MOVIES', () => {
        it('should have type of SAVE_MOVIES', () => {
            //Setup
            const movies = [
                {title: "Joker",
                id: 4,
                release_date: "2019-10-18"},
                {title: "Maleficent: Mistress of Evil",
                id: 56,
                release_date: "2019-10-04"},
                {title: "Zombieland: Double Tap",
                id: 70,
                release_date: "2019-10-18"},
            ]
            const expectedAction = {
                type: 'SAVE_MOVIES',
                movies: [
                    {title: "Joker",
                    id: 4,
                    release_date: "2019-10-18"},
                    {title: "Maleficent: Mistress of Evil",
                    id: 56,
                    release_date: "2019-10-04"},
                    {title: "Zombieland: Double Tap",
                    id: 70,
                    release_date: "2019-10-18"},
                ]
            }
            //Expectation
            const result = actions.saveMovies(movies)
            //Execution
            expect(result).toEqual(expectedAction)
        })
    })

    describe('SAVE_USER', () => {
        it('should have a type of SAVE_USER', () => {
            //Setup
            const name = 'Ronald';
            const email = 'default@gmail.com';
            const password = 'password';
            // const loggedIn = false;

            const expectedAction = {
                type: 'SAVE_USER',
                name: 'Ronald',
                email: 'default@gmail.com',
                password: 'password',
                // loggedIn: false
            };

            //Execution
            const result = actions.saveUser(name, email, password);

            //Expectation
            expect(result).toEqual(expectedAction)
        });
    });

    describe('SAVE_FAVORITES', () => {
        it('should have a type of SAVE_FAVORITES', () => {
            //Setup
            const id = 475557;
            const expectedAction = {
                type: 'SAVE_FAVORITES',
                id: 475557
            }
            
            //Execution
            const result = actions.saveFavorites(id)


            //Expectation
            expect(result).toEqual(expectedAction)
        });
    });

    describe('TOGGLE_LOGIN', () => {
        it.skip('should have a type of TOGGLE_LOGIN', () => {
            //Setup
            const id = 5;
            const expectedAction = {
                type: 'TOGGLE_LOGIN',
                id
            }
            //Execution
            const result = actions.toggleLogin(id);

            //Expectation

            expect(result).toEqual(expectedAction)
        })
    })
      
});

