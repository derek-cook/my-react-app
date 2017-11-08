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