var initialState = {
    all: []
}

export default (state = initialState, action) => {
    let newState = Object.assign({}, state);

    switch (action.type) {
        case ('CREATE_EMPLOYEE'):
            // console.log('CREATE EMPLOYEE ACTION: ' + JSON.stringify(action));

            
            newState.all.unshift(action.payload);
            return newState;

        case ('FETCH_EMPLOYEES'):
            // console.log("FETCH EEMPLOYEES ACTION RECIEVED", JSON.stringify(action));

            newState.all = action.payload;
            return newState;

        case ('DELETE_EMPLOYEE'):
            newState.all = newState.all.filter((empl) => {
                return empl._id !== action.payload;
            });

            return newState;

        case ('UPDATE_EMPLOYEE'):
            // since we are dispatching the fetchEmployees action too,
            // we don't update the state here, it is updated in the FETCH_EMPLOYEES reducer.
            // Alternatively, get the employee in the payload, then map through the all list to update the matching employee.
            return newState;
            

        default:
            return state;
    }
}