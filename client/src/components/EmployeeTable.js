import React, { Component } from 'react';
import TableItem from './TableItem';
import NewEmployee from './NewEmployee';
import { Link, Route } from 'react-router-dom';
import APIManager from '../utils/APIManager';
import { Table, Glyphicon } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectEmployee } from '../actions';

class EmployeeTable extends Component {
	constructor(props) {
		super(props);
		this.state = {
			employees: [],
		}

		this.populateEmployees = this.populateEmployees.bind(this);
		this.addEmployee = this.addEmployee.bind(this);
		this.deleteEmployee = this.deleteEmployee.bind(this);
		this.updateEmployee = this.updateEmployee.bind(this);
	}

	componentDidMount() {
		console.log("COMPONENT MOUNTED.\n");
		this.populateEmployees();
		console.log("PROPS: "+ JSON.stringify(this.props));

		// Any code writen here might be processed before the above GET request is finished!

		// this.setState({employees: [{"first_name":"Binky","last_name":"Gorgl","email":"bgorgl0@vkontakte.ru","address":"13198 Lakewood Alley"},
		// {"first_name":"Melli","last_name":"Hackney","email":"mhackney1@washington.edu","address":"1 Coleman Place"},
		// {"first_name":"Ave","last_name":"Disbrey","email":"adisbrey2@nps.gov","address":"79 Fieldstone Lane"},
		// {"first_name":"Frankie","last_name":"Duggan","email":"fduggan3@whitehouse.gov","address":"8 Montana Alley"},
		// {"first_name":"Paddie","last_name":"Lockner","email":"plockner4@blog.com","address":"6679 Dovetail Parkway"}]
		// });
	}

	populateEmployees() {
		let updatedState = [];
		// no payload in GET request, second param is null
		APIManager.get('/api/employee', null, (err, res) => {
			res.results.forEach((employee) => {
				updatedState.push(employee);
			});
			this.setState({
				employees: updatedState
			});
		});
	}

	addEmployee(employee) {

		// the payload (or body of request) is employee, second param
		APIManager.post('/api/employee', employee, (err, res) => {
			if(err) {
				alert('ERROR: ' + err.message);
				return;
			}
			console.log('EMPLOYEE CREATED: ' + JSON.stringify(res));

			// set state
			var createdEmployee = res.result;
			let newState = Object.assign({}, this.state);
			newState.employees.unshift(createdEmployee);
			this.setState(newState);

			// this.setState({shouldRedirect: true});
			// console.log("Set should redirect to true");

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

			// Warning: handle redirect, this will clear the console and notifications before mounting new component
			// window.location.href = 'http://localhost:3000/employees';
		});
	}

	deleteEmployee(id) {
		console.log("Processing deletion: " + id);

		APIManager.delete('/api/employee/'+id, null, (err, res) => {

			if(err) {
				alert('ERROR: ' + err.message);
				return;
			}

			// Note: possible optimization could be to give each row an index upon mounting,
			// then delete that index from the employee array.
			// let newEmployees = this.state.employees.filter((employee) => {
			// 	return employee._id !== id;
			// });
			// this.setState({employees: newEmployees});
			this.populateEmployees();

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

			console.log("Employee deleted. RES: " + JSON.stringify(res));
		});
	}

	updateEmployee(id, employee) {
		
		APIManager.put('/api/employee/'+id, employee, (err, res) => {

			if (err) {
				alert('ERROR: ' + err.message);
				return;
			}

			this.populateEmployees();

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
		})
	}


	render() {
		console.log("PROPS", this.props)

		let newItems;
		if (this.state.employees) {
			newItems = this.state.employees.map((item) => {
				return (
					<TableItem key={item._id} item={item} deleteEmployee={this.deleteEmployee} updateEmployee={this.updateEmployee} handleClick={ () => this.props.dispatch(selectEmployee(item)) }/>
				);
			});
		}

		return (
			<div className="container">
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

let matchDispatchToProps = (dispatch) => {
	return bindActionCreators({selectEmployee: selectEmployee}, dispatch);
}

let mapStateToProps = (state) => {
	return {
		employees: state.employees
	};
}
export default connect(mapStateToProps)(EmployeeTable);