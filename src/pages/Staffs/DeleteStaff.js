import axiosInstance from '../UserFunctions'
import React from "react"
import Alert from 'sweetalert2';
import {css} from '@emotion/core'
import { FadeLoader }  from 'react-spinners'
import cx from 'classnames'


const override = css`
    display: block;
    margin: 30vh auto;
    border-color: red;
`;



class DeleteStaff extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
          loaded: false
        }
    }

    componentDidMount () {
        const match = this.props.match
        const id = Number(match.params.id)
        axiosInstance({
            method: "delete",
            url: `http://168.0.164:8000/staff/${id}`
        }).then(async(response) => {
            await Alert.fire({
                position: 'center',
                type: 'success',
                title: 'Successful Deleted Staff Account',
                showConfirmButton: false,
                timer: 1000
            })

            this.props.history.push("/staffs/all")
            console.log(response)
        })
    }

    render () {
        let preLoader = <div className={cx({
            "row": true,
            "sweet-loading-container": true,
            "hide-fragment": false
          })}>
            <FadeLoader
                css={override}
                sizeUnit={"px"}
                size={100}
                color={'white'}
                loading= {true}
            />
          </div>

        return preLoader
    }
}


export default DeleteStaff