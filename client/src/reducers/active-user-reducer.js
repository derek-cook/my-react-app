export default function(state=null, action) {
    switch(action.type) {
        case "EMPLOYEE_SELECTED":
            return action.payload;
            break;
    }
    return state;
}