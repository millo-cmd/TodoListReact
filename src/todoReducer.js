export const todoReducer = (initialState = [], action) => {

    switch (action.type) {
        case 'ABC':
            throw new Error('Invalid action. ABC is not implemented.');
            
        default: 
            return initialState;
    }
}