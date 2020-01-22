import React, { Component } from "react"
import { allStaffs } from "../API"
import { Link } from "react-router-dom"
import UserCard from "../Components/UserCard"

class AllStaff extends Component {
  constructor(props) {
    super(props);
    this.state = {
      staffs: []
    }
  }

  componentDidMount() {
    allStaffs()
      .then(res => {
        this.setState({
          staffs: res.data.data
        })
      })
  }

  render() {
    return (
      <div>
        <h3>All Staffs</h3>
        <ul className="staff-list">
          {this.state.staffs.map((staff, index) => 
            <li key={index}>
              <Link to={`/staff/${staff.staffId}`}>
                <UserCard staff={staff} />
              </Link>
            </li>
          )}
        </ul>
      </div>
    )
  }
}

export default AllStaff