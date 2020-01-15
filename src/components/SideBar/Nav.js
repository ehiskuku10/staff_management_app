import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

class Nav extends Component {
  constructor () {
    super()
    this.state = {}

    this.isPathActive = this.isPathActive.bind(this)
  }
  

  render() {
    let { location } = this.props;
    return (
      <ul className="nav">
        <li className={location.pathname === '/' ? 'active' : null}>
          <Link to="/staffs/all">
            <i className="pe-7s-cart"></i>
            <p>View All Staffs</p>
          </Link>
        </li>
        
        <li className={this.isPathActive('/components/buttons') ? 'active' : null}>
          <Link to="/staffs/create-staff-account">
            <i className="pe-7s-leaf"></i>
            <p>Create Staff Account</p>
          </Link>
        </li>
      </ul>
    );
  }

  isPathActive(path) {
    return this.props.location.pathname.startsWith(path);
  }
}

export default withRouter(Nav);