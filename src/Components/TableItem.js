import React, {Component} from 'react';

class TableItem extends Component {
	render() {
		return (
			<tr>
				<td>{this.props.item.first_name}</td>
				<td>{this.props.item.last_name}</td>
				<td>{this.props.item.age}</td>
				<td>{this.props.item.gender}</td>
				<td>{this.props.item.height}</td>
				<td>{this.props.item.hair}</td>
			</tr>
		)
	}
}

export default TableItem;