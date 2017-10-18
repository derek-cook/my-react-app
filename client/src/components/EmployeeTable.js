import React, { Component } from 'react';
import TableItem from './TableItem';
import NewEmployee from './NewEmployee';
import { Link, Route,  } from 'react-router-dom';
import APIManager from '../utils/APIManager';
import { Table } from 'react-bootstrap';

class EmployeeTable extends Component {
	constructor(props) {
		super(props);
		this.state = {
			employees: []
		}

		this.addEmployee = this.addEmployee.bind(this);
		this.deleteEmployee = this.deleteEmployee.bind(this);
	}

	componentDidMount() {
		console.log("COMPONENT MOUNTED.\n");
		// use API Manager util (or make axios/fetch get request here)
		let updatedState = [];
		// no payload in GET request, second param is null
		APIManager.get('/api/employee', null, (err, res) => {
			res.results.forEach((employee) => {
				updatedState.push(employee);
			});
			this.setState({employees: updatedState});
		});

		// Any code writen here might be processed before the above GET request is finished!

		// this.setState({employees: [{"first_name":"Binky","last_name":"Gorgl","email":"bgorgl0@vkontakte.ru","address":"13198 Lakewood Alley"},
		// {"first_name":"Melli","last_name":"Hackney","email":"mhackney1@washington.edu","address":"1 Coleman Place"},
		// {"first_name":"Ave","last_name":"Disbrey","email":"adisbrey2@nps.gov","address":"79 Fieldstone Lane"},
		// {"first_name":"Frankie","last_name":"Duggan","email":"fduggan3@whitehouse.gov","address":"8 Montana Alley"},
		// {"first_name":"Paddie","last_name":"Lockner","email":"plockner4@blog.com","address":"6679 Dovetail Parkway"}]
		// });
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

			// handle redirect, this will clear the condsole before mounting new component
			// window.location.href = 'http://localhost:3000/employees';
		});
	}

	deleteEmployee(id) {
		console.log("DELETE ID: " + id);
	}


	render() {

		let newItems;
		if (this.state.employees) {
			newItems = this.state.employees.map((item) => {
				return (
					<TableItem key={item._id} item={item} deleteEmployee={this.deleteEmployee}/>
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
export default EmployeeTable;