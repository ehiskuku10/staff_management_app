import React, {Component} from 'react';
import Alert from 'sweetalert2';
import axiosInstance from '../UserFunctions'
import {css} from '@emotion/core'
import { FadeLoader }  from 'react-spinners'
import cx from 'classnames'

const override = css`
    display: block;
    margin: 30vh auto;
    border-color: red;
`;

class CreateStaff extends Component {
    constructor () {
        super()
        this.state = {
            hide: true
        }
        this.submitForm = this.submitForm.bind(this)
    }

    async submitForm (event, name) {
        this.setState({
            hide: false
        })
        event.preventDefault()
    
        if(event.target.firstname.value) {
          axiosInstance({
              method: "post",
              url: 'http://192.168.0.164:8000/staff/create',
              data: {
                firstname: event.target.firstname.value,
                lastname: event.target.lastname.value,
                email: event.target.email.value,
                sex: event.target.sex.value,
                state: event.target.state.value,
                country: event.target.country.value
              }
          }).then(async res => {
              this.setState({
                  hide: true
              })
              await Alert.fire({
                  position: 'center',
                  type: 'success',
                  title: 'Successfully Created A Staff' + res.data.uid,
                  showConfirmButton: false,
                  timer: 1000
              })
  
              this.props.history.push("/staff/all")
              console.log(res)
          })

        } else {
            Alert.fire('Fill in field!')
        }
    
    }

    render () {
        return (
            <div className="wrapper">
                <div className="content content-bucket-list">
                    <div className="container-fluid">
                        <div className="row" style={{marginRight: "0px"}}>
                            <div className="card card-bucket-list col-lg-offset-1 col-lg-9 col-md-offset-1 col-md-9 col-sm-offset-1 col-sm-9 col-xs-11">
                                <div className="header">
                                    <h4 style={{"color": "#fff"}}>Staff Account Creation Form</h4>
                                </div>
                                <div className="content">
                                    <form onSubmit={this.submitForm}>
            
                                        <div className="form-group">
                                            <input name="firstname" className="input-bucket-list" placeholder="Firstname" type="text" />
                                            <input name="lastname" className="input-bucket-list" placeholder="Lastname" type="text" />
                                            <input name="email" className="input-bucket-list" placeholder="Email address" type="email" />
                                            <input name="sex" className="input-bucket-list" placeholder="Sex" type="text" />
                                            <input name="state" className="input-bucket-list" placeholder="State" type="text" />
                                            <input name="country" className="input-bucket-list" placeholder="Country" type="text" />
                                        </div>
            
                                            <button style={{width: "100%", padding: '1rem'}} type="submit" className="btn btn-bucket-list btn-fill btn-primary">Create Staff Account</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx({
                    "row": true,
                    "sweet-loading-container": true,
                    "hide-fragment":this.state.hide
                    })}>
                    <FadeLoader
                        css={override}
                        sizeUnit={"px"}
                        size={100}
                        color={'white'}
                        loading= {true}
                    />
                </div>
            </div>
        )
    }
    
}

export default CreateStaff