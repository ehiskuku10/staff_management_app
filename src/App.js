import React, { Component } from "react"
import SideBar from './SideBar'
import SidePanel from './SidePanel'
import { Route } from "react-router-dom"

/**
 * Components Import
 */
import AllStaff from "./SidePanel/AllStaff"


class App extends Component {
  render() {
    return (
      <div className="container">
        <SideBar title="Staff Management App"/>
        <SidePanel>
          <Route path="/staff/all" component={AllStaff}/>
        </SidePanel>
      </div>
    )
  }
}

export default App