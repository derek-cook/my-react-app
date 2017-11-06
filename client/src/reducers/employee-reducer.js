var initialState = {
    all: [{"_id":"59ece17e45f5fb30033a0359","__v":0,"address":"123 Main St","email":"dcook","last_name":"Cook","first_name":"Derekk"}]
}

export default (state = initialState, action) => {
    let newState = Object.assign({}, state);

    switch (action.type) {
        case ('CREATE_EMPLOYEE'):
            console.log('CREATE EMPLOYEE ACTION: ' + JSON.stringify(action));

            let all = Object.assign([], newState.all);
            all.push(action.payload);
            newState[all] = all;
            return newState;

        default:
            return state;
    }
}