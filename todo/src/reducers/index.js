import { NEW_TODO } from '../actions';

const initialState = {
    text: '',
    number: 0
}

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case NEW_TODO:
        return {
        ...state,
        text: action.payload
        }
    default: 
        return state;
    }
}