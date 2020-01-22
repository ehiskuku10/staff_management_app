import React, { Component } from "react"
import EditStaffForm from "../Components/EditStaffForm"
import { createStaff } from "../API"
import { SuccessMsg } from "../Components/SuccessMessage"

class CreateStaff extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showSuccess: false
    }
  }
  onSubmit(e) {
    e.preventDefault()
    createStaff(e)
      .then(res => {
        if(res.status === 201) {
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
        <h3>Add Account</h3>
        <EditStaffForm text="Create" submit={this.onSubmit.bind(this)}/>
        {this.state.showSuccess ? <SuccessMsg /> : null}
      </div>
    )
  }
}

export default CreateStaff