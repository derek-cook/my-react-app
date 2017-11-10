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

        return (dispatch) => {
            APIManager.post('/api/employee', employee, (err, res) => {
                if(err) {
                    alert('ERROR: ' + err.message);
                    return;
                }
                console.log('EMPLOYEE CREATED: ' + JSON.stringify(res));

                dispatch({type:"CREATE_EMPLOYEE", payload: res.result});

            });
        };
};