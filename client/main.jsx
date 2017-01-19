import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { renderRoutes } from '../imports/router/routes.jsx';
 
import App from '../imports/ui/components/App.jsx';
 
Meteor.startup(() => {
  render(renderRoutes(), document.getElementById('render-target'));
});