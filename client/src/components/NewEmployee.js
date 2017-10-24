import React, { Component } from 'react';
import {FormControl, Button} from 'react-bootstrap';
import { Redirect } from 'react-router-dom';

class NewEmployee extends Component {

	constructor(props) {
		super(props);
		this.state = {
			employee: {
				first_name: "",
				last_name: "",
				email: "",
				address: ""
			},
			shouldRedirect: false
		};

		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleInputChange(e) {
		const name = e.target.name;
		const value = e.target.value;
		let employee = Object.assign({}, this.state.employee);
		employee[name] = value;

		this.setState({employee});
		console.log("Input change: ", value);
	}

	handleSubmit() {
		// forward the sumbission to the parent container EmployeeTable for POST request in addEmployee()
		console.log("form submitted: ", this.state.employee);
		this.props.addEmployee(Object.assign({}, this.state.employee));
		this.setState({ shouldRedirect: true});
		// this.setState({
		// 	first_name: "",
		// 	last_name: "",
		// 	email: "",
		// 	address: ""
		// });
	}

	render() {
		return this.state.shouldRedirect ? <Redirect to="/employees"/> : (
			<tr>
				<td></td>
				<td><FormControl name="first_name" type="text" placeholder="First name" value={this.state.employee.first_name} onChange={this.handleInputChange}/></td>
				<td><FormControl name="last_name" type="text" placeholder="Last name" value={this.state.employee.last_name} onChange={this.handleInputChange}/></td>
				<td><FormControl name="email" type="email" placeholder="Email" value={this.state.employee.email} onChange={this.handleInputChange}/></td>
				<td><FormControl name="address" type="text" placeholder="Address" value={this.state.employee.address} onChange={this.handleInputChange}/></td>
				<td><Button bsStyle="primary" onClick={this.handleSubmit}>Submit</Button></td>
			</tr>
		)
	}
}
export default NewEmployee;