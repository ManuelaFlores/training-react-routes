import React, {Component} from 'react';
import {Router , Route, IndexRoute, browserHistory, Link} from 'react-router';
import AppTweet from './AppTweet';
import 'normalize-css'


class AppIndex extends Component {
    render() {
  
      return(
        <AppTweet/>
      )
    }
  }

export default AppIndex;