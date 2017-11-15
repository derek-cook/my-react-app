import React, { Component } from 'react';
import { connect } from 'react-redux';

class EmployeeDetail extends Component {

  render() {
    let activeEmployee = this.props.activeEmployee;
    if (!activeEmployee) {
      return (<h3>Please select an employee</h3>);
    }
    return (
        <div className=" employee-detail">
            <h1>{activeEmployee.first_name + " " + activeEmployee.last_name}</h1>
            <h3>{activeEmployee.email}</h3>
            <h3>{activeEmployee.address}</h3>
        </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    activeEmployee: state.activeEmployee
  };
}



export default connect(mapStateToProps)(EmployeeDetail);

