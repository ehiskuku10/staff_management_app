import axios from "axios"

export const getAllStaffs = () => {
    return axios
        .get(`http://192.168.0.164:8000/staff`)
        .then(response => {
            return response
        })
        .catch(err => {
            return err
        })
}

const axiosInstance = axios.create({
    baseURL: 'http://192.168.0.164:8000',
    headers: {
        "Authorization": `Bearer ${localStorage.usertoken}`
    }
})

export default axiosInstance