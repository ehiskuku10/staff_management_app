import React from "react"

const UserCard = (props) => {
  const {firstname, lastname} = props.staff
  return (
    <div className="list-item__box">
      <span>{lastname} {firstname}</span>
    </div>
  )
}

export default UserCard