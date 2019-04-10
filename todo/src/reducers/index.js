import { NEW_TODO } from '../actions';
import { TOGGLE } from '../actions';
//The one source of all truth...
const initialState = {
    todo: [{
        id: 0,
        text: 'does this work?',
        isCompleted: false,
    }]
}



export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case NEW_TODO:
        const newArray = Array.from(state.todo);
        const badArray = state.todo;
        console.log(`${state.todo === newArray} newArray`, `${state.todo === badArray} badArray`);
        newArray.push(action.payload);
        // return {
        //     todo: state.todo.push(action.payload)
        // }
        // return {
        //     todo: [
        //         ...state.todo,
        //         action.payload
        //     ]
        // }
        case TOGGLE: 
        console.log('hit the toggled case');
        return {
           todo: 
                state.todo.map((todo) => {
                    console.log(todo.id, action.payload);
                    if(todo.id !== parseInt(action.payload)) {
                        console.log('todo id doesn\'t match')
                        return todo;
                    } else { 
                        console.log('id matches');
                        const newObj = { ...todo }
                        newObj.isCompleted = !newObj.isCompleted
                        return newObj
                    }
            })
        }
    default: 
        return state;
    }
}