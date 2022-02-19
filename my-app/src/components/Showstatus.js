import React from "react"

const Showstatus =({status}) =>{
 
  return (
    <div className="showstatus">
        <h1>CO :</h1><div className="circle" style={{backgroundColor: status}}></div>
            <h1>Heat :</h1><div className="circle" style={{backgroundColor: status}}></div>
        <h1>Motion Detect :</h1><div className="circle" style={{backgroundColor: status}}></div>
    </div>
  )

}

export default Showstatus

