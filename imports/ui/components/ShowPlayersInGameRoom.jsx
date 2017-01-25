import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Gameroom } from '../../api/gameroom.js';
import { Session } from 'meteor/session';

class ShowPlayersInGameRoom extends Component {

	constructor(props) {
		super(props);
	}


	render() {
		
		return (
			<h5>Players in Gameroom: { this.props.gameroom[0].game.player[0].playerID } </h5>
		)
	}
}

export default createContainer(() => {
	return {
		gameroom: Gameroom.find({accessCode: Number.parseInt(Session.get('accessCode'))}).fetch()
	};
}, ShowPlayersInGameRoom);