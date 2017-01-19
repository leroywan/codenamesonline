import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import ReactDOM from 'react-dom';
 
import { Tasks } from '../../api/tasks.js';

import Task from './Task.jsx';

export default class HostJoinContainer extends Component {

	constructor(props) {
		super(props);
	}

	render() {

		let button;

		if ( this.props.innerText == "Next" ){
			button = (<button type="button" className="btn waves-effect waves-light" onClick={ this.props.nextStage } >{ this.props.innerText }</button>)
		} else if (this.props.innerText == "Back" ) {
			button = (<button type="button" className="btn waves-effect waves-light" onClick={ this.props.prevStage } >{ this.props.innerText }</button>)
		} else {
			button = (<button type="button" className="btn waves-effect waves-light" onClick={ this.props.setStage } >{ this.props.innerText }</button>)
		}

		return (
			 <span style={{ margin: "5px" }}>
			 	{ button }
			 </span>
		)
	}

}