import axios from "axios"

export const allStaffs = () => {
  return (
    axios
      .get(`http://192.168.0.164:8000/staff`)
      .then(res => res)
      .catch(err => err)
  );
};

export const oneStaff = (staffId) => {
  return (
    axios
      .get(`http://192.168.0.164:8000/staff/${staffId}`)
      .then(res => res)
      .catch(err => err)
  )
}

export const editStaff = (e, staffId) => {
  return(
    axios
      .put('http://192.168.0.164:8000/staff/edit/'+staffId, {
        data: {
          firstname: e.target.firstname.value,
          lastname: e.target.lastname.value
        }
      })
      .then(res => res)
      .catch(err => err)
  )
}

export const removeStaff = (staffId) => {
  return (
    axios
      .delete('http://192.168.0.164:8000/staff/delete/'+staffId)
      .then(res => res)
      .catch(err => err)
  )
}

export const createStaff = (e) => {
  return (
    axios
      .post('http://192.168.0.164:8000/staff/create/', {
        data: {
          firstname: e.target.firstname.value,
          lastname: e.target.lastname.value,
          email: e.target.email.value,
          sex: e.target.sex.value,
          state: e.target.state.value,
          country: e.target.country.value
        }
      })
      .then(res => res)
      .catch(err => err)
  )
}

