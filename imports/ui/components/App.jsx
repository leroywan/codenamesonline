import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import ReactDOM from 'react-dom';
 
import { Tasks } from '../../api/tasks.js';

import Task from './Task.jsx';


import HostJoinContainer from './HostJoinContainer.jsx';
// App component - represents the whole app
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {

    const centered = {
      position: "absolute",
      top: "45%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      textAlign: "center"
    }

    return (

      <div style={ centered } id="container-element" className="container">
        <HostJoinContainer></HostJoinContainer>
      </div>
    );
  }
}

App.propTypes = {
  tasks: PropTypes.array.isRequired,
};
 
export default createContainer(() => {
  return {
    tasks: Tasks.find({}).fetch(),
  };
}, App);