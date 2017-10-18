import React, {Component} from 'react';
import {Button, Glyphicon} from 'react-bootstrap';


class TableItem extends Component {
	render() {
		return (
			
			<tr>
				<td><Button bsStyle="danger" bsSize="xsmall"><Glyphicon glyph="remove"/> </Button></td>
				<td>{this.props.item.first_name}</td>
				<td>{this.props.item.last_name}</td>
				<td>{this.props.item.email}</td>
				<td>{this.props.item.address}</td>
			</tr>
		);
	}
}

export default TableItem;