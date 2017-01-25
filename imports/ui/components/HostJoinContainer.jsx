import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import ReactDOM from 'react-dom';
 
import { Session } from 'meteor/session'

import Button from './Button.jsx';
import AddNickname from './AddNickname.jsx';
import ChooseNumOfPlayers from './ChooseNumOfPlayers.jsx';
import DisplayGameCode from './DisplayGameCode.jsx';
import EnterAccessCode from './EnterAccessCode.jsx';
import constants from './constants.js';

Session.set({
	nickname: '',
	numOfPlayers: 9
})

export default class HostJoinContainer extends Component {

	constructor(props) {
		super(props);
		this.state = {
			stage: 1
		}
		this.renderHost = this.renderHost.bind(this);
		this.renderJoin = this.renderJoin.bind(this);
		this.nextStage = this.nextStage.bind(this);
		this.prevStage = this.prevStage.bind(this);
		this.setStage = this.setStage.bind(this);

	}

	nextStage() {
		this.setState({ stage: this.state.stage + 1 }, ()=>{ console.log('incremented stage to: ' + this.state.stage) });
	}

	prevStage() {
		this.setState({ stage: this.state.stage - 1 }, ()=>{ console.log('decremented stage to: '+ this.state.stage ) });
	}

	setStage(myStage) {
		this.setState({ stage: myStage }, ()=>{ console.log('jumped to stage: '+ this.state.stage ) });
	}

	renderHost() {
		this.nextStage();
	    console.log('i want to host');
	}

	renderJoin() {
	    console.log('i want to join!');
	}

	handleChange(event) {
		this.setState({numOfPlayers: event.target.value});
	}

	render() {

		let nickname = Session.get('nickname');
		let numOfPlayers = Session.get('numOfPlayers');


		switch (this.state.stage) {

			case 1: 
				return (
					<div>
						<h1 style={{ textAlign: "center", fontSize: "1.2em", letterSpacing: "4px" }} >PLAY CODENAMES ONLINE</h1>
						<Button innerText="Host a Game" setStage={ ()=> this.setStage(2) } ></Button>
						<Button innerText="Join a Game" setStage={ ()=> this.setStage(constants.JOINSTAGE) }></Button>
					</div>
				)
			case 2: 
				return (
					<div>
						<ChooseNumOfPlayers nextStage={ this.nextStage } prevStage={ this.prevStage }></ChooseNumOfPlayers>
					</div>
				)
			case 3: 
				return (
					<div>
						<DisplayGameCode nextStage={ this.nextStage } prevStage={ this.prevStage }></DisplayGameCode>
					</div>
				)
			case 4: 
				return (
					<div>
						<AddNickname nextStage={ this.nextStage } prevStage={ this.prevStage }></AddNickname>
					</div>
				)
			case constants.JOINSTAGE: 
				return (
					<div>
						<EnterAccessCode setStage={ ()=> this.setStage(constants.MAIN) }></EnterAccessCode>
					</div>
				)
		}

	}
}

