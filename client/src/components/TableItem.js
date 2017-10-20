import React, {Component} from 'react';
import {Button, Glyphicon, ButtonToolbar, FormControl} from 'react-bootstrap';


class TableItem extends Component {

	// TODO: use a boolean attribute for the edit state of a row
	constructor(props) {
		super(props);
		this.state = {
			editMode: false,
			editDetails: {}

		}

		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
		this.toggleEdit = this.toggleEdit.bind(this);
		this.handleSave = this.handleSave.bind(this);
	}

	handleInputChange(e) {
		const name = e.target.name;
		const value = e.target.value;

		// Special syntax for computed values since it is a nested state object
		this.setState({
			...this.state,
			editDetails: {
				...this.state.editDetails,
				[name]: value
			}
		});
		console.log("Input change: ", value);
	}

	handleDelete() {
		// Note: this.props.key is not a usable prop, use this.props.item._id
		let id = this.props.item._id;
		this.props.deleteEmployee(id);
	}

	toggleEdit() {
		let flag = !this.state.editMode;
		this.setState({
			editMode: flag,
			editDetails: !flag ? {} : {
				first_name: this.props.item.first_name,
				last_name: this.props.item.last_name,
				email: this.props.item.email,
				address: this.props.item.address
			}
		});
	}

	handleSave() {		
		let id = this.props.item._id;
		this.props.updateEmployee(id, this.state.editDetails);
		this.toggleEdit();
	}

	render() {

		let editableRow = (
			<tr>
			<td id="td-actions">
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
					cancel</Button>
				</ButtonToolbar>
			</td>
			<td><FormControl name="first_name" type="text" placeholder="First name" value={this.state.editDetails.first_name} onChange={this.handleInputChange}/></td>
			<td><FormControl name="last_name" type="text" placeholder="Last name" value={this.state.editDetails.last_name} onChange={this.handleInputChange}/></td>
			<td><FormControl name="email" type="email" placeholder="Email" value={this.state.editDetails.email} onChange={this.handleInputChange}/></td>
			<td><FormControl name="address" type="text" placeholder="Address" value={this.state.editDetails.address} onChange={this.handleInputChange}/></td>
			<td><Button bsStyle="primary" onClick={this.handleSave}>Save</Button></td>
		</tr>
		);

		let setRow = (
			<tr>
				<td id="td-actions">
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

		return (!this.state.editMode ? setRow : editableRow);
	}
}

export default TableItem;