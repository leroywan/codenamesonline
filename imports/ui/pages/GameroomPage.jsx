import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Gameroom } from '../../api/gameroom.js';
import { Session } from 'meteor/session';
import ReactDOM from 'react-dom';

import Game from '../components/Game.jsx';
class GameroomPage extends React.Component {

  

  render() {
  	Session.set({
		accessCode: this.props.params.accessCode
	})

	let game;
    if (this.props.params.accessCode.length == 6) {
      if (this.props.roomExist == 1) {
      	game = <Game></Game>
      }
    } else {
      game = <h5 style={{ textAlign: "center" }}>Sorry but this gameroom does not exist!</h5>
    }
	
    return (
      <div>
        { game }
      </div>
    );
  }
}

export default createContainer(() => {
  return {
    roomExist: Gameroom.find({ accessCode: Number.parseInt(Session.get("accessCode")) }).fetch().length,
    
  };
}, GameroomPage);