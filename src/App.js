import React, { Component } from "react"
import SideBar from './SideBar'
import SidePanel from './SidePanel'
import { Route, withRouter, Switch } from "react-router-dom"

/**
 * Components Import
 */
import AllStaff from "./SidePanel/AllStaff"
import SingleStaff from "./SidePanel/SingleStaff"
import CreateStaff from "./SidePanel/CreateStaff"


class App extends Component {
  render() {
    return (
      <div className="container">
        <SideBar title="Staff Management App"/>
        <SidePanel>
          <Switch>
            <Route path="/staff/add" component={CreateStaff}/>
            <Route path="/staff/all" component={AllStaff}/>
            <Route path="/staff/:staffId" exact component={withRouter(SingleStaff)}/>
          </Switch>
        </SidePanel>
      </div>
    )
  }
}

export default App