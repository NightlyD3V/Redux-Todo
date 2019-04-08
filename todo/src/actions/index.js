
export const NEW_TODO = 'NEW_TODO'

export const myAction = text => {
    return {
        type: NEW_TODO,
        payload: text
    }
}