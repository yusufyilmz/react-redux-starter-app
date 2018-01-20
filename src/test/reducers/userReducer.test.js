import cart from 'reducers/userReducer'
import * as actions from 'constants/actionTypes'

describe('reducers', () => {
    describe('user', () => {
        const INITIAL_STATE = {
            items: []
        }

        const STATE = {
            items: {
                name: "yusuf",
                website: "yusuf 2",
                company: "yusuf 3"
            }
        }

        it('provide the initial state', () => {
            expect(cart(undefined, {})).toEqual(INITIAL_STATE)
        })

        it('handle ADD_TO_CART action', () => {
            expect(cart(INITIAL_STATE, {
                type: actions.FETCH_USERS, user: {
                    name: "yusuf",
                    website: "yusuf 2",
                    company: "yusuf 3"
                }
            })).toEqual(STATE)
        })


    })
})
