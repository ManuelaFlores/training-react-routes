import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header className="root-header p-0">
        <div className=" w-100 d-flex align-items-center justify-content-center">
        <h1><i className="fas fa-angle-left root-color-lab"></i> Reactibook <i className="fas fa-angle-right root-color-lab"></i></h1>
        </div>
      </header>
    )
  }
}
export default Header; 