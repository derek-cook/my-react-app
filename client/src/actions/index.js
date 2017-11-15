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

export function deleteEmployee(id) {
    return (dispatch) => {
        APIManager.delete('/api/employee/'+id, null, (err, res) => {
            
            if(err) {
                alert('ERROR: ' + err.message);
                return;
            }

            dispatch({type:"DELETE_EMPLOYEE", payload: id});
            dispatch({type:"EMPLOYEE_SELECTED", payload: null});

        });
    }
}

export function updateEmployee(id, employee) {
    return (dispatch) => {
        APIManager.put('/api/employee/'+id, employee, (err, res) => {
            
            if (err) {
                alert('ERROR: ' + err.message);
                return;
            }

            dispatch({type: "UPDATE_EMPLOYEE"});
            dispatch(fetchEmployees());

            // Alternatively, you can use only the first dispatch with a payload of the employee
            // and then update the matching employee in the reducer
        })
    }
}