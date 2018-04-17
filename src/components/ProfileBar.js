import React, { Component } from 'react';

class ProfileBar extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="profileBar-root d-flex justify-content-center align-items-center">

        <figure className="">
          <img className="avatar-profileBar" src={this.props.picture} />
        </figure>
        <span className="username-profileBar">Hola a @{this.props.userName}!</span>
        <button onClick={this.props.onOpenText} className="button-profileBar m-3  p-2 bg-pink-lab text-white font-weight-bold border-radius-5px border-none">
          <span className="fa fa-lg fa-edit"></span> Tweet!
      </button>

      </div>
    )
  }
}

export default ProfileBar;