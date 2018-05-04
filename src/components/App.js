import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Choices from './Choices';

import Start from './Start';

const App = props => (
  <Router>
    <Switch>
      <Route path='/stage-1' component={Start}/>
      <Route path='/stage-2' component={Choices}/>
    </Switch>
  </Router>
);

export default App;
