var initialState = null;

export default function(state=initialState, action) {

    let newState = Object.assign({}, state);

    switch(action.type) {
        case "EMPLOYEE_SELECTED":
            newState = action.payload
            return newState;
        default:
            return state;
    }
}