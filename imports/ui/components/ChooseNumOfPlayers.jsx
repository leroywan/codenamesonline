import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Tasks } from '../../api/tasks.js';
import { Session } from 'meteor/session'

import Button from './Button.jsx';

export default class ChooseNumOfPlayers extends Component {

	constructor(props) {
		super(props);
		this.state = {
			numOfPlayers: 9
		};

		this.setNumOfPlayers = this.setNumOfPlayers.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}


	handleChange(event) {
		this.setState({numOfPlayers: event.target.value});
	}

	setNumOfPlayers() {
		Session.set({
			numOfPlayers: this.state.numOfPlayers
		})
		this.props.nextStage();
	}



	render() {
		let numOfPlayers = Session.get('numOfPlayers');

		let heading;
		if (numOfPlayers == 9) {
			heading = <h5 style={{ margin:"0" }}>Number of players: { this.state.numOfPlayers }</h5>
		} else {
			heading = (
				<div>
					<h5 style={{ margin:"0" }}>Number of players: { this.state.numOfPlayers }</h5>
					<h6 style={{ margin:"5px", color:"grey" 	}}>You currently have { numOfPlayers } players</h6>
				</div>
			)
		}
		
		return (
			<div>
				{ heading }
				<form style={{ width: "300px", margin:"auto", padding: "10px" }} action="#">
				    <p className="range-field">
				      <input onChange={ this.handleChange } type="range" id="test5" min="4" max="14" />
				    </p>
				</form>
		        <Button innerText="Back" prevStage={ this.props.prevStage } ></Button>
		        <button type="button" className="btn waves-effect waves-light" onClick={ this.setNumOfPlayers } >Next</button>
			</div>
		)
	}
}
