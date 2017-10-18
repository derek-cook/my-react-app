import React, {Component} from 'react';
import {Button, Glyphicon, ButtonToolbar} from 'react-bootstrap';


class TableItem extends Component {
	render() {
		return (
			
			<tr>
				<td className="td-actions">
					<ButtonToolbar className="button-toolbar">
						<Button 
							type="button"
							bsStyle="danger" 
							bsSize="xsmall">
							<Glyphicon glyph="remove"/> 
						</Button>
						<Button 
							type="button"
							bsStyle="info" 
							bsSize="xsmall">
							<Glyphicon glyph="edit"/> 
						</Button>
					</ButtonToolbar>
				</td>
				<td>{this.props.item.first_name}</td>
				<td>{this.props.item.last_name}</td>
				<td>{this.props.item.email}</td>
				<td>{this.props.item.address}</td>
			</tr>
		);
	}
}

export default TableItem;