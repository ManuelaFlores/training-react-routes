import React, { Component } from 'react';
import Header from './Header';
import Main from './Main';


class AppTweet extends Component {
  constructor() {
    super()

    this.state = {
      user: {
        photoURL: 'http://lorempixel.com/400/200',
        email: 'fmanuela499@gmail.com',
        displayName: 'Manuela Flores',
      }
    }
  }
  render() {
    return (
      <div>
        <Header />
        <Main user={this.state.user} />
      </div>
    )
  }
}

export default AppTweet