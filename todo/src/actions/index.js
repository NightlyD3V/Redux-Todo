// action type
export const NEW_TODO = 'NEW_TODO';
export const TOGGLE = 'TOGGLE';
// action creator
export const newTodo = text => {
    // action
    return {
        type: NEW_TODO,
        payload: {
            id: Date.now(),
            text,
            isCompleted: false,
        }
    }
}

export const toggle = isCompleted => {
    return {
        type: TOGGLE,
        payload: isCompleted
    }
}