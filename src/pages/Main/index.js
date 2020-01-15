import React from 'react'
import { Route } from 'react-router-dom'
import cx from 'classnames'
import { withRouter } from 'react-router-dom'
import "@babel/polyfill"


/**
 * Pages
 */

import Header from './Header'
import SideBar from '../../components/SideBar'
import AllStaffs from "../Staffs/AllStaffs"
import CreateStaff from "../Staffs/CreateStaff"
import GetStaff from "../Staffs/GetStaff"
import EditStaff from "../Staffs/EditStaff"
import DeleteStaff from "../Staffs/DeleteStaff"

const Main = ({
  mobileNavVisibility,
  hideMobileMenu,
  history
}) => {
  history.listen(() => {
    if (mobileNavVisibility === true) {
      hideMobileMenu();
    }
  });
  return (
    <div className={cx({
      'nav-open': mobileNavVisibility === true
    })}>
      <Route path="/" render={() => (
          <div className="wrapper">
            <div className="close-layer" onClick={hideMobileMenu}></div>
            <SideBar />
              <div className="main-panel">
                  <Header />
                  <Route path="/staffs/all" component={AllStaffs} />
                  <Route path="/staffs/create-staff-account" component={CreateStaff} />
                  <Route path="/staffs/:id" exact component={GetStaff} />
                  <Route path="/staffs/edit-staff/:id" render={(params) => (
                      <EditStaff {...params}/>
                  )}/>
                  <Route exact path="/staffs/delete-staff/:id" component={DeleteStaff}/>
              </div>
          </div>
          )} 
      />
      
    </div>
  )
};


export default withRouter(Main);