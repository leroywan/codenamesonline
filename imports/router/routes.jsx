import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

// route components
import GameroomPage from '../ui/pages/GameroomPage.jsx';
import HomePage from '../ui/pages/HomePage.jsx';
import InstructionsPage from '../ui/pages/InstructionsPage.jsx';


export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={HomePage}></Route>
    <Route path="instructions" component={InstructionsPage}></Route>
    <Route path="gameroom/:accessCode/:playerId" component={ GameroomPage }></Route>
  </Router>
);