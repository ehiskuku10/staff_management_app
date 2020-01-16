import React from "react"
import {Link} from "react-router-dom"

function Navigation() {
  return (
    <div className="navigation">
      <ul>
        <li><Link to={`/staff/add`}>Add staff account</Link></li>
        <li><Link to={`/staff/all`}>Get existing accounts</Link></li>
      </ul>
    </div>
  );
}

export default Navigation