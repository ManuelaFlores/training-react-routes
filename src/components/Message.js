import React, { Component } from 'react';
import moment from 'moment';

class Message extends Component {
  constructor(props) {
    super(props)

    this.onPressRetweet = this.onPressRetweet.bind(this);
    this.onPressFavorite = this.onPressFavorite.bind(this);

    this.state = {
      pressFavorite: false,
      pressRetweet: false,
    }

  }

  onPressRetweet() {
    this.props.onRetweet();
    this.setState({
      pressRetweet: true,
    })
  }

  onPressFavorite() {
    this.props.onFavorite();
    this.setState({
      pressFavorite: true,
    })
  }

  render() {
    let dateFormat = moment(this.props.date).fromNow();

    return (
      <div className="root-message bg-light">
        <div className="styles-user">
          <figure>
            <img className="styles-avatar" src={this.props.picture} />
          </figure>
          <span className="styles-displayName">{this.props.displayName}</span>
          <span className="styles-username">{this.props.userName}</span>
          <span className="styles-date">{dateFormat}</span>
        </div>
        <h3 className="styles-text font-weight-bold">{this.props.text}</h3>
        <div className="styles-buttons">
          <div className="styles-icons"><span className="fa fa-reply"></span></div>

          <div
            className={(this.state.pressRetweet) ? 'retweet-green' : ''}
            onClick={this.onPressRetweet}
          >
            <span className="fa fa-retweet"></span>
            <span className="message-num">{this.props.numRetweets}</span>
          </div>

          <div
            className={(this.state.pressFavorite) ? 'favorite-yellow' : ''}
            onClick={this.onPressFavorite}
          >
            <span className="fa fa-star"></span>
            <span className="message-num">{this.props.numFavorites}</span>
          </div>

        </div>
      </div>
    )
  }
}

export default Message;