import React, { useEffect, useState} from 'react'
import axios from 'axios'
    
const Status = ()=>  {

    const [Statusdata,setStatusdata] = useState([])

    const [Safecheck, setSafechaeck] = useState([])

    useEffect(() => {
        const id = setInterval(() => {
            let list_data = []
            getStatusdata().then((data) =>{
                setStatusdata(data)
                console.log(data)
                list_data.add(data)
            })
            getSafecheck().then((data) =>{
                console.log(data)
                list_data.add(data)
                
            })
            setSafechaeck(list_data)
        
        }, 3000);
        return () => {
            clearInterval(id)
        }
    }, [])


async function getStatusdata(){
    const res = await axios.get('https://ecourse.cpe.ku.ac.th/exceed16/api/safety-car/status')
    return res.data;
}

async function getSafecheck(){
    const res = await axios.get('https://ecourse.cpe.ku.ac.th/exceed16/api/safety-car/warning')
    return res.data;
}



// console.log(Statusdata);
console.log("this = ", Safecheck)
  return (
    <div>
        <div className="upper">   
        <h1>Status</h1>
        <div className="showstatus">
        <h1>CO :</h1><div className="circle" style={{backgroundColor: Statusdata["carbon_color"]}}>  b </div>
        <h1>Heat :</h1><div className="circle" style={{backgroundColor: Statusdata["heat_color"]}}>    b  </div>
        <h1>Motion Detect :</h1><div className="circle" style={{backgroundColor: Statusdata["sensor_color"]}}> b </div>
    </div>
        </div>
        <div className="lower">
        <h1>Safe: </h1><div className="circle" style={{backgroundColor: Safecheck["warning_color"]}}> b </div>
        </div>
    </div>
  )
}

export default Status