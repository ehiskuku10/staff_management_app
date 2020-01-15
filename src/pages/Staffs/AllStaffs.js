import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import {getAllStaffs} from "../UserFunctions"
import {css} from '@emotion/core'
import { FadeLoader }  from 'react-spinners'
import cx from 'classnames'


const override = css`
    display: block;
    margin: 30vh auto;
    border-color: red;
`;


class AllStaffs extends Component {
  constructor () {
    super()
    this.state = {
      staffs: [],
      loading: true,
      hide_loading: false,
      hasContent: false
    }
  }

  componentDidMount () {
    getAllStaffs().then((res) => {
      this.setState({
        staffs: res.data.data,
        hide_loading: true,
        loading: false,
        hasContent: true
      })
    })      
  }

  render () {
      let content;
      if (this.state.hasContent) {
        content = (<div class={cx({
          "container": true
        })}>
            <div style={{marginRight:"0px", marginLeft: "0px"}} className={cx({
              "row": true,
              "hide-fragment": false
            })}>
              <div className="col-md-12" style={{paddingRight: "0px", paddingLeft: "0px"}}>
                <div className="card pag-card">
                  <div className="header">
                    <h4 className="title">All Staffs</h4>
                  </div>
                  <div className="content all-icons">
                    <div className="row">
                      { this.state.staffs.map((staff, i) => (
                        <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6" key={staff.id}>
                          <Link to={`/staffs/${staff.uid}`}>
                              <div style={{minHeight: '13rem'}} className="font-icon-detail"><i className="pe-7s-user"></i>
                                  <p>{staff.firstname} {staff.lastname}</p>
                              </div>
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={cx({
              "row": true,
              "sweet-loading-container": this.state.loading,
              "hide-fragment": this.state.hide_loading
            })}>
              <FadeLoader
                  css={override}
                  sizeUnit={"px"}
                  size={100}
                  color={'white'}
                  loading= {this.state.loading}
              />
            </div>
        </div>)
      } else {
        content = <h3 style={{marginLeft: '20px'}}>You have 'zero' staffs</h3>
      }
      return (
        content
      );
  }
}


export default AllStaffs;