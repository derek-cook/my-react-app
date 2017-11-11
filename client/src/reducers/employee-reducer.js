var initialState = {
    all: []
}

export default (state = initialState, action) => {
    let newState = Object.assign({}, state);

    switch (action.type) {
        case ('CREATE_EMPLOYEE'):
            console.log('CREATE EMPLOYEE ACTION: ' + JSON.stringify(action));

            
            newState.all.unshift(action.payload);
            return newState;

        case ('FETCH_EMPLOYEES'):
            console.log("FETCH EEMPLOYEES ACTION RECIEVED", JSON.stringify(action));

            newState.all = action.payload;
            return newState;

        default:
            return state;
    }
}