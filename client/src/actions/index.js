export const selectEmployee = (employee) => {
    console.log("Selected Empl: ", JSON.stringify(employee));

    return {
        type: "USER_SELECTED",
        payload: employee
    }
}