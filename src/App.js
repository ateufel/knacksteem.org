import React, { Component } from 'react';
import Home from './containers/Home/Home';
import sc2 from 'sc2-sdk';

class App extends Component {
  getOathURL(){
    let api = sc2.Initialize({
        app: 'knacksteem.app',
        callbackURL: 'http://localhost:3000/callback',
        scope: ['login', 'custom_json', 'claim_reward_balance', 'vote', 'comment']
    });
    return api.getLoginURL();
  }
  render() {
    return (
      <Home/>
    );
  }
}

export default App;
