import React, {Component} from 'react';
import {Button, Glyphicon, ButtonToolbar} from 'react-bootstrap';


class TableItem extends Component {

	// TODO: use a boolean attribute for the edit state of a row
	constructor(props) {
		super(props);
		this.state = {
			editMode: false
		}

		this.handleDelete = this.handleDelete.bind(this);
		this.toggleEdit = this.toggleEdit.bind(this);
	}


	handleDelete() {
		// Note: this.props.key is not a usable prop, use this.props.item._id
		let id = this.props.item._id;
		this.props.deleteEmployee(id);
	}

	toggleEdit() {
		this.setState({editMode: !this.state.editMode});
	}

	render() {
		return (
			
			<tr>
				<td className="td-actions">
					<ButtonToolbar className="button-toolbar">
						<Button 
							type="button"
							bsStyle="danger" 
							bsSize="xsmall"
							onClick={this.handleDelete}
						>
							<Glyphicon glyph="remove"/>
						</Button>
						<Button 
							type="button"
							bsStyle="info" 
							bsSize="xsmall"
							onClick={this.toggleEdit}
						>
							{!this.state.editMode ? <Glyphicon glyph="edit"/> : "cancel"}
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