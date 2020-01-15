import React, {Component} from "react" 
import { Link } from 'react-router-dom';
import {css} from '@emotion/core'
import { FadeLoader }  from 'react-spinners'
import cx from 'classnames'
import { withRouter } from 'react-router-dom'
import axiosInstance from '../UserFunctions'


const override = css`
    display: block;
    margin: 30vh auto;
    border-color: red;
`;


class GetStaff extends Component {
    constructor () {
        super()
        this.state = {
          staff: {},
          hide: false
        }
    }

    componentwillMount () {
      const {match} = this.props
		  const staffId = Number(match.params.id)
        axiosInstance({
            method: "get",
            url: `http://192.168.0.164:8000/staff/${staffId}`
        }).then((response) => {
              this.setState({
                staff: response.data.data,
                hide: true
              });
            console.log(this.state.staff);
        }) 
    }

    componentDidMount () {
      const {match} = this.props
		  const staffId = Number(match.params.id)
        axiosInstance({
            method: "get",
            url: `http://192.168.0.164:8000/staff/${staffId}`
        }).then((response) => {
              this.setState({
                staff: response.data.data,
                hide: true
              });
            console.log(this.state.staff);
        }) 
    }
    
    render () {
      let show = null
      if (this.state.staff === "undefined") {
        show = (<div className={cx({
          "content": true
        })}>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <div className="card">
                  <div className="header">
                    <h4 className="title">Single Staff Account</h4>
                  </div>
                  <div className="content all-icons">
                    <div className="row">
                        <div className="font-icon-list col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="font-icon-detail"><i className="pe-7s-cart"></i>
      <p style={{"margin-top": "15px", "margin-bottom": "50px"}}>{this.state.staff.firstname} {this.state.staff.lastname}</p>
                                <div class="button-container">
                                  <button type="submit" className="btn btn-bucket-list btn-fill btn-success"><Link style={{"color": "#fff"}} to={`/staffs/edit-staff/${this.state.staff.id}`}>Edit Staff Account</Link></button>
                                  <button type="submit" className="btn btn-bucket-list btn-fill btn-danger"><Link style={{"color": "#fff"}} to={`/staffs/delete-staff/${this.state.staff.id}`}>Delete staff Account</Link></button>
                                </div>
                            </div>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>)
      }
        return (
          <div>
            {show}
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

export default withRouter(GetStaff)