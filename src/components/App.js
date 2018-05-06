import React from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Choices from './Choices';
import Reveal from './Reveal';

import Start from './Start';

const App = props => (
  <Router>
    <Switch>
      <Route exact path='/' render={prop => (
        <Redirect to='/stage-1' {...prop}/>
      )}/>
      <Route path='/stage-1' component={Start}/>
      <Route path='/stage-2' component={Choices}/>
      <Route path='/stage-3' component={Reveal} />
    </Switch>
  </Router>
);

export default App;
