import React, { Component } from 'react';
import UserInfo from './UserInfo';
import Nav from './Nav';

class SideBar extends Component {
  render() {

    return (
      <div className="sidebar">

        <div className="sidebar-wrapper">
          <UserInfo />
          <div className="line"></div>
          <Nav />
        </div>
    
      </div>
    )
  }
}


export default (SideBar)
