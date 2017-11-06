import { combineReducers } from 'redux';
import EmployeeReducer from './employee-reducer';
import ActiveEmployeeReducer from './active-user-reducer';

const allReducers = combineReducers({
    activeEmployee: ActiveEmployeeReducer,
    employee: EmployeeReducer
});

export default allReducers;