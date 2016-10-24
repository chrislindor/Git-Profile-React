import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute, hashHistory } from 'react-router';
import Profile from './components/Profile.js';
import Home from './components/Home.js';
import Main from './components/Main.js';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { }
  }

  render() {
    return  (
      <Router history={hashHistory}>
        <Route path="/" component={Main}>
          <Route path="profile/:username" component={Profile}></Route>
          <IndexRoute component={Home}></IndexRoute>
        </Route>
      </Router>
    )
  }
}

export default App;
