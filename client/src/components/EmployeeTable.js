import React, { Component } from 'react';
import TableItem from './TableItem';
import NewEmployee from './NewEmployee';
import { Link, Route } from 'react-router-dom';
// import APIManager from '../utils/APIManager';
import { Table, Glyphicon } from 'react-bootstrap';
// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions';

class EmployeeTable extends Component {
	constructor(props) {
		super(props);
		this.state = {
			// employees: [],
		}

		this.addEmployee = this.addEmployee.bind(this);
		this.deleteEmployee = this.deleteEmployee.bind(this);
		this.updateEmployee = this.updateEmployee.bind(this);
	}

	componentDidMount() {
		console.log("COMPONENT MOUNTED.\n");
		this.props.fetchEmployees(); // triggers async request

		// Any code writen here might be processed before the above GET request is finished!
		// The same also goes for most of the actions that are dispatched. Be careful about race conditions.

	}

	addEmployee(employee) {

		this.props.createEmployee(employee);
		this.props.selectEmployee(employee); // dispatch the selectEmployee action to keep the EmployeeDetail up-to-date.
		

		// TODO: move notification handling to APIManager callback because this will fire whether or not the request succeeded.
		this.props.handleNotification({
			title: (<Glyphicon data-notify="icon" glyph="glyphicon glyphicon-ok-sign"/>),
			message: (
				<div>
					Employee successfully added.
				</div>
			),
			level: 'success',
			position: 'tc',
			autoDismiss: 3,
		});

	}

	deleteEmployee(id) {
		
		this.props.deleteEmployee(id);
		// selectedEmployee is set to null in the DELETE_EMPLOYEE action by dispatching EMPLOYEE_SELECTED right after deletion.
		

		// TODO: move notification handling to APIManager callback because this will fire whether or not the request succeeded.
		this.props.handleNotification({
			title: (<Glyphicon data-notify="icon" glyph="glyphicon glyphicon-ok-sign"/>),
			message: (
				<div>
					Employee successfully deleted.
				</div>
			),
			level: 'error',
			position: 'tc',
			autoDismiss: 3,
		});
	}

	updateEmployee(id, employee) {

		this.props.updateEmployee(id, employee); // dispatch the update action
		this.props.selectEmployee(employee); // dispatch the selectEmployee action to keep the EmployeeDetail up-to-date.

		// TODO: move notification handling to APIManager callback because this will fire whether or not the request succeeded.
		this.props.handleNotification({
			title: (<Glyphicon data-notify="icon" glyph="glyphicon glyphicon-ok-sign"/>),
			message: (
				<div>
					Employee successfully updated.
				</div>
			),
			level: 'info',
			position: 'tc',
			autoDismiss: 3,
		});
	}


	render() {

		const employees = this.props.employee.all;

		let newItems;
		if (employees) {
			newItems = employees.map((item) => {
				console.log(JSON.stringify(item));
				return (
					<TableItem key={item._id} item={item} deleteEmployee={this.deleteEmployee} updateEmployee={this.updateEmployee} handleClick={ () => this.props.selectEmployee(item) }/>
				);
			});
		}

		return (
			<div className="employee-table col-md-5">
				<div className="btn-group table-options" role="group" aria-label="...">
				  <Link to={`${this.props.match.url}/new-employee`}><button type="button" className="btn btn-default"><span className="glyphicon glyphicon-plus"></span></button></Link>
				</div>
				<h2>{this.props.title}</h2>
				<Table hover className="table table-responsive table-container">
					<thead>
						<tr>
							<th></th>
							<th>First Name</th>
							<th>Last Name</th>
							<th>Email</th>
							<th>Address</th>
						</tr>
					</thead>
					<tbody>
						<Route path="/employees/new-employee" render={(props) => 
							<NewEmployee {...props} addEmployee={this.addEmployee}/>}></Route>
						{newItems}
					</tbody>
				</Table>

			</div>
		)
	}
}

let mapDispatchToProps = (dispatch) => {
	// alternative way of mapping action creators
	// return bindActionCreators({selectEmployee: selectEmployee}, dispatch);
	
	return {
		createEmployee: (employee) => dispatch(actions.createEmployee(employee)),
		selectEmployee: (employee) => dispatch(actions.selectEmployee(employee)),
		fetchEmployees: () => dispatch(actions.fetchEmployees()),
		deleteEmployee: (id) => dispatch(actions.deleteEmployee(id)),
		updateEmployee: (id, employee) => dispatch(actions.updateEmployee(id, employee))
	}
}

let mapStateToProps = (state) => {
	return {
		employee: state.employee
	};
}
export default connect(mapStateToProps, mapDispatchToProps)(EmployeeTable);