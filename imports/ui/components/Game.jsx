import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Gameroom } from '../../api/gameroom.js';
import { Session } from 'meteor/session';

import AddNickname from './AddNickname.jsx';
import Chatbox from './Chatbox.jsx';
import ShowPlayersInGameRoom from './ShowPlayersInGameRoom.jsx';
export default class Game extends Component {

	render() {
		

		return (
			<div>
				<h6>Gameroom: { Session.get('accessCode') }</h6>
				<ShowPlayersInGameRoom></ShowPlayersInGameRoom>
				<div className="container absolute fully-centered" style={{ textAlign: "center" }}>
					<div className="row">
				      <div className="col s2 offset-s1"><span className="flow-text">text</span></div>
				      <div className="col s2 offset"><span className="flow-text">text</span></div>
				      <div className="col s2 offset"><span className="flow-text">text</span></div>
				      <div className="col s2 offset"><span className="flow-text">text</span></div>
				      <div className="col s2 offset"><span className="flow-text">text</span></div>
				    </div>
				    <div className="row">
				      <div className="col s2 offset-s1"><span className="flow-text">text</span></div>
				      <div className="col s2 offset"><span className="flow-text">text</span></div>
				      <div className="col s2 offset"><span className="flow-text">text</span></div>
				      <div className="col s2 offset"><span className="flow-text">text</span></div>
				      <div className="col s2 offset"><span className="flow-text">text</span></div>
				    </div>
				    <div className="row">
				      <div className="col s2 offset-s1"><span className="flow-text">text</span></div>
				      <div className="col s2 offset"><span className="flow-text">text</span></div>
				      <div className="col s2 offset"><span className="flow-text">text</span></div>
				      <div className="col s2 offset"><span className="flow-text">text</span></div>
				      <div className="col s2 offset"><span className="flow-text">text</span></div>
				    </div>
				    <div className="row">
				      <div className="col s2 offset-s1"><span className="flow-text">text</span></div>
				      <div className="col s2 offset"><span className="flow-text">text</span></div>
				      <div className="col s2 offset"><span className="flow-text">text</span></div>
				      <div className="col s2 offset"><span className="flow-text">text</span></div>
				      <div className="col s2 offset"><span className="flow-text">text</span></div>
				    </div>
				    <div className="row">
				      <div className="col s2 offset-s1"><span className="flow-text">text</span></div>
				      <div className="col s2 offset"><span className="flow-text">text</span></div>
				      <div className="col s2 offset"><span className="flow-text">text</span></div>
				      <div className="col s2 offset"><span className="flow-text">text</span></div>
				      <div className="col s2 offset"><span className="flow-text">text</span></div>
				    </div>
				</div>
			</div>
		)
	}
}