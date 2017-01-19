import React, { Component, PropTypes } from 'react';

export default class Header extends Component {
  render() {

  	const logoStyle = {
  		marginLeft: '18px',
  		marginRight: '18px'
  	};

    return (
      <nav>
	    <div className="nav-wrapper">
	      <a href="/" style={ logoStyle } className="brand-logo">Codenames</a>
	      <ul id="nav-mobile" className="right hide-on-med-and-down">
	        <li><a href="/">Play</a></li>
	        <li><a href="/Instructions">Instructions</a></li>
	      </ul>
	    </div>
	  </nav>
    );
  }
}
