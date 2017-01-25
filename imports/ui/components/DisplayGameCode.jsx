import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Gameroom } from '../../api/gameroom.js';
import { Session } from 'meteor/session';
import { Link } from 'react-router';

import initializePlayers from './scripts/initializePlayers.js';

import Button from './Button.jsx';

import App from './App.jsx';

Session.set({
	accessCode: 0,
	recievedCode: false
})

class DisplayGameCode extends Component {

	constructor(props) {
		super(props);
		this.state = {
			accessCode: 0,
			recievedCode: false
		}
	}

	getRandomInt(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min)) + min;
	}

	generateGameCode() {
		if (Session.get('recievedCode') == false) {
			console.log('generating game code...');
			// let gameCode = Gameroom.find({}, {limit: 1, sort: {age:-1}}).fetch()[0].accessCode + 1;
			let gameCode = this.getRandomInt(100000, 1000000);
			while (Gameroom.find({accessCode: gameCode}, {limit: 1}).fetch().length > 0) {
				console.log('duplicated access code found...regenerating code...')
				gameCode = this.getRandomInt(100000, 1000000);
			}
			this.setState({ accessCode: gameCode });
			Session.set({
				accessCode: gameCode,
				recievedCode: true
			});
			Meteor.call("gameroom.create", Session.get("numOfPlayers"), Session.get("accessCode"), function(err, result){
				Meteor.call(
					'gameroom.initializePlayers',
					result,
					initializePlayers(Session.get('numOfPlayers'))
				)
			});
			console.log('access code is: ' + gameCode);
		} 
	}

	handleClick() {
		let gameData = Gameroom.find({accessCode: Number.parseInt(Session.get('accessCode'))}).fetch();
		let numOfPlayers = gameData[0].game.players.length;
		let playerNumber;

		console.log(gameData[0].game.players[0].isInGameRoom)
		for (let i = 0; i < numOfPlayers; i++) {
			if (gameData[0].game.players[i].isInGameRoom  == false) {
				console.log('Added player ' + i + ' to game room');
				Meteor.call('gameroom.addPlayerToRoom', Session.get("accessCode"), i);
				window.location.href = '/gameroom/' + Session.get("accessCode") + '/' + i;
				return 
			}
			if (i == numOfPlayers) {
				Materialize.Toast('This game room is full!', 4000);
			}
		}

		
	}



	render() {


		let accessCode;
		if ( this.state.accessCode == 0 ) {
			accessCode = <span></span>
			accessLabel = <p></p>
			generateCodeButton = <button type="button" className="btn waves-effect waves-light blue darken-3" onClick={ this.generateGameCode.bind(this) } >Generate Access Code</button>
			backOrStartButton = <Button innerText="Back" prevStage={ this.props.prevStage } ></Button>
		} else {
			accessCode = <h5>{this.state.accessCode}</h5>
			generateCodeButton = <button type="button" className="btn waves-effect waves-light disabled blue darken-3" onClick={ this.generateGameCode.bind(this) } >Generate Access Code</button>
			backOrStartButton = <button type="button" className="btn waves-effect waves-light blue darken-3" onClick={ this.handleClick.bind(this) } >Start Game</button>
			accessLabel = <p style={{ color: "grey" }}>Simply send this to your friends to join!</p>
		}	

		return (
			<div>
				<div>
					{ accessCode }
					{ accessLabel }
				</div>
				{ backOrStartButton }
				{ generateCodeButton }
			</div>
		)
	}
}


export default createContainer(() => {
  return {
    
  };
}, DisplayGameCode);