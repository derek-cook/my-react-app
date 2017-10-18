import React, { Component } from 'react';
import {FormControl, Button} from 'react-bootstrap';

class NewEmployee extends Component {

	constructor(props) {
		super(props);
		this.state = {
			first_name: "",
			last_name: "",
			email: "",
			address: ""
		};

		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleInputChange(e) {
		const name = e.target.name;
		const value = e.target.value;

		this.setState({
			[name]: value
		});
		console.log("Input change: ", value);
	}

	handleSubmit() {
		// forward the sumbission to the parent container EmployeeTable for POST request in addEmployee()
		console.log("form submitted: ", this.state);
		this.props.addEmployee(Object.assign({}, this.state));
		this.setState({
			first_name: "",
			last_name: "",
			email: "",
			address: ""
		});
	}

	render() {

		return (
			<tr>
				<td><FormControl name="first_name" type="text" placeholder="First name" value={this.state.first_name} onChange={this.handleInputChange}/></td>
				<td><FormControl name="last_name" type="text" placeholder="Last name" value={this.state.last_name} onChange={this.handleInputChange}/></td>
				<td><FormControl name="email" type="email" placeholder="Email" value={this.state.email} onChange={this.handleInputChange}/></td>
				<td><FormControl name="address" type="text" placeholder="Address" value={this.state.address} onChange={this.handleInputChange}/></td>
				<td><Button bsStyle="primary" onClick={this.handleSubmit}>Submit</Button></td>
			</tr>

			
		)
	}
}
export default NewEmployee;