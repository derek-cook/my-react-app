import React, {Component} from 'react';

class TableItem extends Component {
	render() {
		return (
			<tr>
				<td>{this.props.item.first_name}</td>
				<td>{this.props.item.last_name}</td>
				<td>{this.props.item.email}</td>
				<td>{this.props.item.address}</td>
			</tr>
		)
	}
}

export default TableItem;