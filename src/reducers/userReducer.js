import * as actionTypes from 'constants/actionTypes';

const initialState = {
    items: [],
}
export default function (state = initialState, action) {
    switch (action.type) {
        case actionTypes.FETCH_USERS:
            return { ...state, items: action.user };
    }

    return state;
}
