import React, { Component } from 'react';
import TableItem from './TableItem';
import NewEmployee from './NewEmployee';
import { Link, Route } from 'react-router-dom';

class EmployeeTable extends Component {
	constructor(props) {
		super(props);
		this.state = {
			employees: []
		}

		this.addEmployee = this.addEmployee.bind(this);
	}

	componentDidMount() {
		this.setState({employees: [{"first_name":"Binky","last_name":"Gorgl","email":"bgorgl0@vkontakte.ru","address":"13198 Lakewood Alley"},
		{"first_name":"Melli","last_name":"Hackney","email":"mhackney1@washington.edu","address":"1 Coleman Place"},
		{"first_name":"Ave","last_name":"Disbrey","email":"adisbrey2@nps.gov","address":"79 Fieldstone Lane"},
		{"first_name":"Frankie","last_name":"Duggan","email":"fduggan3@whitehouse.gov","address":"8 Montana Alley"},
		{"first_name":"Paddie","last_name":"Lockner","email":"plockner4@blog.com","address":"6679 Dovetail Parkway"}]
		});
		console.log("COMPONENT MOUNTED.\n");
	}

	addEmployee(employee) {
		let newList = this.state.employees;
		newList.unshift(employee);
		this.setState({
			employees: newList
		});
	}


	render() {

		let newItems;
		if (this.state.employees) {
			newItems = this.state.employees.map((item) => {
				return (
					<TableItem key={item.first_name} item={item} />
				);
			});
		}

		return (
			<div className="container table-container">
				<div className="btn-group table-options" role="group" aria-label="...">
				  <Link to={`${this.props.match.url}/new-employee`}><button type="button" className="btn btn-default"><span className="glyphicon glyphicon-plus"></span></button></Link>
				</div>
				<h2>{this.props.title}</h2>
				<table className="table table-responsive table-bordered table-hover">
					<thead>
						<tr>
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
				</table>

			</div>
		)
	}
}
export default EmployeeTable;