import React, { Component } from 'react';
import Message from './Message';

class MessageList extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="messageList-root ">
        {this.props.messages.map(msg => {
          return (
            <Message
              key={msg.id}
              text={msg.text}
              picture={msg.picture}
              displayName={msg.displayName}
              userName={msg.userName}
              date={msg.date}
              numRetweets={msg.retweets}
              numFavorites={msg.favorites}
              onRetweet={() => this.props.onRetweet(msg.id)}
              onFavorite={() => this.props.onFavorite(msg.id)}
            />
          )
        }).reverse()}
      </div>
    )
  }
};

export default MessageList;