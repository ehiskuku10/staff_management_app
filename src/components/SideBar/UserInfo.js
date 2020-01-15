import React, { Component } from 'react';
import { connect } from 'react-redux';
import cx from 'classnames';
import { withRouter } from 'react-router-dom';

class UserInfo extends Component {
  constructor () {
    super()
    this.state = {
      isShowingUserMenu: false
    }
  }
  

  render() {
    let { user } = this.props;
    let { isShowingUserMenu } = this.state;
    return (
      <div className="user-wrapper">
        <div className="user">
          <img src={user.image} alt={user.name} className="photo" />
          <div className="userinfo">
            <div className="username">
              {user.name}
            </div>
            <div className="title">Bucket List App</div>
          </div>
          <span
            onClick={() => this.setState({ isShowingUserMenu: !this.state.isShowingUserMenu })}
            className={cx("pe-7s-angle-down collapse-arrow", {
              active: isShowingUserMenu
            })}></span>
        </div>
        
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.Auth.user
});

export default withRouter(connect(mapStateToProps)(UserInfo))