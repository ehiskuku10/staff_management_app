import React, { Component } from "react"
import { oneStaff, editStaff, removeStaff } from "../API"
import UserCard from "../Components/UserCard"
import EditStaffForm from "../Components/EditStaffForm"
import { SuccessMsg } from "../Components/SuccessMessage"

const hideBlock = {
  display: "none"
}

class SingleStaff extends Component {
  constructor(props) {
    super(props)
    this.state = {
      staff: {},
      hasContent: false,
      displayForm: false,
      showSuccess: false
    }
  }

  componentDidMount() {
    const { match } = this.props;
    const staffId = match.params.staffId;
    oneStaff(staffId)
      .then(res => {
        this.setState({
          staff: res.data.data,
          hasContent: true
        })
      })
  }

  showForm() {
    this.setState({
      displayForm: true
    })
  }

  onSubmit (e) {
    const staffId = e.target.id
    e.preventDefault();
    editStaff(e, staffId)
      .then(res => {
        if(res.status === 200) {
          this.helperMethod()
        }
      });
  }

  deleteStaff (e) {
    const staffId = e.target.id
    removeStaff(staffId)
      .then(res => {
        if(res.status === 204) {
          this.helperMethod()
        }
      })
  }

  helperMethod () {
    this.setState({
      showSuccess: true
    })
    setTimeout(() => {
      this.props.history.push('/staff/all');
    }, 1000)
  }

  render() {
    return (
      <div>
        <h3>Staff: {this.state.staff.staffId}</h3>
        <UserCard staff={this.state.staff} />
        <div className="btn-block" style={this.state.displayForm ? hideBlock : null}>
          <button onClick={this.showForm.bind(this)}>Edit</button>
          <button id={this.state.staff.staffId} onClick={this.deleteStaff.bind(this)}>Delete</button>
        </div>
        {this.state.displayForm ? <EditStaffForm id={this.state.staff.staffId} text="Update" submit={this.onSubmit.bind(this)} /> : null}
        {this.state.showSuccess ? <SuccessMsg /> : null}
      </div>
    )
  }
}

export default SingleStaff