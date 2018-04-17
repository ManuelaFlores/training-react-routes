import React, { Component } from 'react';
import uuid from 'uuid';
import MessageList from './MessageList';
import InputText from './InputText';
import ProfileBar from './ProfileBar';

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: Object.assign({}, this.props.user, { retweets: [] }, { favorites: [] }),
      openText: false,
      messages: [
        {
          id: uuid.v4(),
          text: 'Mensaje de prueba!',
          picture: 'http://lorempixel.com/400/200',
          displayName: 'Manuela Flores',
          userName: 'fmanuela499',
          date: Date.now() - 180000,
          retweets: 0,
          favorites: 0
        },
        {
          id: uuid.v4(),
          text: 'Segundo mensaje de prueba!',
          picture: 'http://lorempixel.com/400/200',
          displayName: 'Manuela Flores',
          userName: 'fmanuela499',
          date: Date.now() - 1800000,
          retweets: 0,
          favorites: 0
        }
      ]
    }
    this.handleOpenText = this.handleOpenText.bind(this);
    this.handleSendText = this.handleSendText.bind(this);
    this.handleCloseText = this.handleCloseText.bind(this);
    this.handleRetweet = this.handleRetweet.bind(this);
    this.handleFavorite = this.handleFavorite.bind(this)


  }

  handleSendText(event) {
    event.preventDefault();
    let newMessage = {
      id: uuid.v4(),
      username: this.props.user.email.split('@')[0],
      displayName: this.props.user.displayName,
      date: Date.now(),
      picture: this.props.user.photoURL,
      text: event.target.text.value,
      retweets: 0,
      favorites: 0
    }
    if (newMessage.text !== '') {
      this.setState({
        messages: this.state.messages.concat([newMessage]),
        openText: false
      })
    }
  }

  handleCloseText(event) {
    event.preventDefault();
    this.setState({ openText: false })
  }

  handleRetweet(msgId) {
    let alreadyRetweeted = this.state.user.retweets.filter(ret => ret === msgId)

    if (alreadyRetweeted.length === 0) {
      let messages = this.state.messages.map(msg => {
        if (msg.id === msgId) {
          msg.retweets++;
        }
        return msg
      })

      let user = Object.assign({}, this.state.user)
      user.retweets.push(msgId)

      this.setState({
        messages: messages,
        user: user
      })
    }
  }

  handleFavorite(msgId) {
    let alreadyFavorited = this.state.user.favorites.filter(fav => fav === msgId)

    if (alreadyFavorited.length === 0) {
      let messages = this.state.messages.map(msg => {
        if (msg.id === msgId) {
          msg.favorites++;
        }
        return msg
      })

      let user = Object.assign({}, this.state.user)
      user.favorites.push(msgId)

      this.setState({
        messages: messages,
        user: user
      })
    }
  }

  handleOpenText(event) {
    event.preventDefault()
    this.setState({ openText: true })
    console.log('click')
  }

  renderOpenText() {
    if (this.state.openText) {
      return <InputText
        onSendText={this.handleSendText}
        onCloseText={this.handleCloseText}
      />
    }
  }

  render() {
    return (
      <div>
        <ProfileBar
          picture={this.props.user.photoURL}
          userName={this.props.user.email.split('@')[0]}
          onOpenText={this.handleOpenText}
        />

        {this.renderOpenText()}

        <MessageList
          messages={this.state.messages}
          onRetweet={this.handleRetweet}
          onFavorite={this.handleFavorite}
        />
      </div>
    )
  }
}

export default Main;

/* 
const Main = () => {
  return(
    <h1>por favor sal U_U"</h1>
  )
}

export default Main; */