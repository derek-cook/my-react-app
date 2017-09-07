import React, { Component } from 'react';
import TableItem from './TableItem';

class Table extends Component {



	render() {

		let tableItems;
		if (this.props.items) {
			tableItems = this.props.items.map(item => {
				return (
					<TableItem key={item.id} item={item} />
				);
			});
		}

		return (
			<div className="container table-container">
				<div className="btn-group table-options" role="group" aria-label="...">
				  <button type="button" className="btn btn-default"><span className="glyphicon glyphicon-plus"></span></button>
				</div>
				<h2>{this.props.title}</h2>
				<table className="table table-responsive table-bordered table-hover">
					<thead>
						<tr>
							<th>First Name</th>
							<th>Last Name</th>
							<th>Age</th>
							<th>Gender</th>
							<th>Height</th>
							<th>Hair</th>
						</tr>
					</thead>
					<tbody>
						{tableItems}
					</tbody>
				</table>
			</div>
		)
	}
}
export default Table;