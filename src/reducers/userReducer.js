import * as actionTypes from 'constants/actionTypes';

const initialState = {
    users: [],
}
export default function (state = initialState, action) {
    switch (action.type) {
        case actionTypes.FETCH_USERS:
            return { ...state, users: action.users };
    }

    return state;
}
