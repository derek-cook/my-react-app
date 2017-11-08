import APIManager from '../utils/APIManager';

export function fetchEmployees() {
    let list = [];
    return (dispatch) => {
        APIManager.get('/api/employee', null, (err, res) => {
			res.results.forEach((employee) => {
				list.push(employee);
			});
			dispatch({type: "FETCH_EMPLOYEES", payload: list});
		});
    }
};

export function selectEmployee(employee) {
        console.log("Selected Empl: ", JSON.stringify(employee));

        return {
            type: "EMPLOYEE_SELECTED",
            payload: employee
        }
};

export function createEmployee(employee) {
        console.log("ADD EMPLOYEE ACTION");

        return {
            type: "CREATE_EMPLOYEE",
            payload: employee
        }
};