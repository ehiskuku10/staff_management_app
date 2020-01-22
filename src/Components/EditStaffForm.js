import React from "react"

const EditStaffForm = (props) => {
  const { submit, id, text } = props
  return (
    <div style={{margin: "1rem", width: "13rem"}}>
      <form id={id || null} onSubmit={submit}>
        <input type="text" name="firstname" placeholder="firstname"/>
        <input type="text" name="lastname" placeholder="lastname"/>
        <input type="email" name="email" placeholder="email"/>
        <input type="text" name="sex" placeholder="sex"/>
        <input type="text" name="state" placeholder="state"/>
        <input type="text" name="country" placeholder="country"/>
        <input id="submit" type="submit" value={text}/>
      </form>
    </div>
  )
}

export default EditStaffForm