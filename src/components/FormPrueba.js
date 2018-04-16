import React, { Component } from 'react';
import {Link} from 'react-router';
import Main from './Main'


class NameForm extends React.Component {

  state = {
    error: this.props.getErrorMessage(""),
    isDirty: false
  };

  handleChange = e => {
    const { value } = e.target;
    this.setState({ error: this.props.getErrorMessage(value) });
  };

  handleFocus = e => {
    this.setState({ isDirty: true });
  };

  handleSubmit = e => {
    e.preventDefault();
    // Use DOM API to get input value
    console.log(e.target[0].value);
    console.log(e.target.elements.username.value);
    // Use React ref to get DOM value
    console.log(this.inputNode.value);

    const errorMsg = this.props.getErrorMessage(this.inputNode.value);
    console.log(errorMsg)
    if (errorMsg) {
      alert(errorMsg);
    }
    else {
      alert('cumplee')
    };
  };
  render() {
    const { error, isDirty } = this.state;
    return (
      <div>
      <h1>Reactibook</h1>
      <form
        onSubmit={this.handleSubmit}
        onFocus={this.handleFocus}
        className="container my-4"
      >
        <div className="form-group">
          <label className="form-label">
            Username:
            </label>
          <input
            type="text"
            name="username"
            className="form-control"
            ref={node => (this.inputNode = node)}
            onChange={this.handleChange}
          />
          <small className="form-text text-muted">You can use your email</small>
          {error && isDirty ? (
            <small style={{ color: "red" }}>{error}</small>
          ) : null}
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="">
            Password:
            </label>
          <input type="password" name="password" className="form-control" required />
          <small className="form-text text-muted">Make it a good one!</small>
        </div>
        <div className="form-group">
          <Link to="/main">
          <button
            type="submit"
            className="btn btn-primary"
            disabled={Boolean(error)}
          >
            Send
            </button>
          </Link>
        </div>
      </form>
      </div>
    );
  }
}

export default NameForm;