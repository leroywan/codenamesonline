import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Session } from 'meteor/session'
import { Gameroom } from '../../api/gameroom.js'; 

import constants from './constants.js';
import Button from './Button.jsx';

export default class EnterAccessCode extends Component {

	constructor(props) {
		super(props);
		this.state = {
			accessCode: 0
		}

		this.handleChange = this.handleChange.bind(this);
		this.handleClick =this.handleClick.bind(this);
	}

	handleChange(event) {
		this.setState({accessCode: event.target.value});
	}

	handleClick() {
		if (Gameroom.find({ accessCode: Number.parseInt(this.state.accessCode) }).fetch().length == 1) {
			window.location.href = '/gameroom/' + this.state.accessCode;
		} else {
			Materialize.toast('The access code you entered does not exist!', 3000);
		}
		
	}

	render() {

		let accessCodeLabel = <label htmlFor="enter_access_code" style={{ textAlign: "left" }}>Enter Your Access Code</label>

		return (
			<div>
				<div className="row">
				    <form className="col s12">
				      <div className="row">
				        <div className="input-field col offset-s3 s6">
				          <input data-error="Please Enter Your Access Code" id="enter_access_code" onChange={ this.handleChange } type="text" className="validate"></input>
				          { accessCodeLabel }
				          <Button innerText="Back to Main" setStage={ this.props.setStage }></Button>
				          <button type="button" className="btn waves-effect waves-light blue darken-3" onClick={ this.handleClick } >Start Game</button>
				        </div>
				      </div>
				    </form>
				</div>
			</div>
		)
	}
}
