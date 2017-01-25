import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Session } from 'meteor/session'

import Button from './Button.jsx';

export default class AddNickname extends Component {

	constructor(props) {
		super(props);
		this.state = {
			nickname: ''
		};

		this.storeNickname = this.storeNickname.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.setState({nickname: event.target.value});
	}

	storeNickname() {
		console.log('Your nickname is: ' + this.state.nickname )
		if (this.state.nickname == "" && Session.get('nickname').length == 0) {
			Materialize.toast('You have to enter a name!', 3000);
		} else if (this.state.nickname == "" && Session.get('nickname').length > 0) {
			this.props.nextStage();
		} else {
			Materialize.toast('Welcome, ' + this.state.nickname, 1000);
			Session.set({
				nickname: this.state.nickname
			})
			this.props.nextStage();
		}

	}

	render() {

		let nickname = Session.get('nickname');
		let nicknameLabel;

		if ( nickname.length == 0 ) {
			nicknameLabel = <label htmlFor="enter_nickname" style={{ textAlign: "left" }}>Enter Your Nickname</label>
		} else {
			nicknameLabel = <label htmlFor="enter_nickname" style={{ textAlign: "left" }}>Your current name is: {nickname}</label>
		}
		

		return (
			<div>
				<div className="row">
				    <form className="col s12">
				      <div className="row">
				        <div className="input-field col offset-s3 s6">
				          <input data-error="Please Enter A Name" id="enter_nickname" value={ this.state.nickname } onChange={ this.handleChange } type="text" className="validate"></input>
				          { nicknameLabel }
				          <button type="button" className="btn waves-effect waves-light" onClick={ this.storeNickname } >Next</button>
				        </div>
				      </div>
				    </form>
				</div>
			</div>
		)
	}
}
