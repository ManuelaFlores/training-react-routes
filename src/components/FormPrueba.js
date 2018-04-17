import React, { Component } from 'react';
import { Link } from 'react-router';
import AppIndex from './AppIndex';
import { NavLink } from 'react-router-dom'


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
      <div className="h-100">
        <div className=" height-150 d-flex align-items-center justify-content-center">
          <h1><i className="fas fa-angle-left root-color-lab"></i> Reactibook <i className="fas fa-angle-right root-color-lab"></i></h1>
        </div>
        <div className="row m-0 p-0 d-flex justify-content-center">
          <form
            onSubmit={this.handleSubmit}
            onFocus={this.handleFocus}
            className="container my-4 col-xs-10 col-md-6 box-shadow p-3 m-3 "
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
            <div className="form-group d-flex justify-content-center">
              <NavLink
                to="/appIndex"
                role="button"
                className="w-50 bg-pink-lab  text-white font-weight-bold border-radius-5px"
              >
                <button
                  type="submit"
                  className="btn w-50 btn-block bg-pink-lab text-white font-weight-bold border-radius-5px"
                  disabled={Boolean(error)}

                  type="button"
                >
                  Send
            </button>
              </NavLink>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default NameForm;