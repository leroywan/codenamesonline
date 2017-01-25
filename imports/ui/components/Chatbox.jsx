import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Gameroom } from '../../api/gameroom.js';
import { Session } from 'meteor/session';

export default class Chatbox extends Component {
	render() {
		return (
			<h5>Chatbox</h5>
		)
	}
}