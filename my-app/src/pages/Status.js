import React, { useEffect, useState} from 'react'
import axios from 'axios'
    
const Status = ()=>  {

    const [Statusdata,setStatusdata] = useState([])

    const [Safecheck, setSafechaeck] = useState([])

    useEffect(() => {
        const id = setInterval(() => {
            getStatusdata().then((data) =>{
                setStatusdata(data)
                console.log(data)
            })
            getSafecheck().then((data) =>{
                console.log(data)
                setSafechaeck(data)
            })
        
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
    <div  style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
        <img src={ "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.forbes.com%2Fsites%2Fjimgorzelany%2F2019%2F07%2F23%2Fhere-are-the-coolest-new-cars-for-2020%2F&psig=AOvVaw2Jg2gOfHVq5D2QfRWmsQA-&ust=1645354916764000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCOCB9-3Oi_YCFQAAAAAdAAAAABAJ" }/>
        <div className="upper" style={{marginLeft:20}}>   
        <h1>Status</h1>
        <div className="showstatus">
            <div style={{display:'flex',alignItems:'center',justifyContent:'flex-start'}}>
            <h1>CO :</h1><div className="circle" style={{backgroundColor: Statusdata["carbon_color"],width:20,height:20,borderRadius:'50%'}}/>  
            </div>
            <div style={{display:'flex',alignItems:'center',justifyContent:'flex-start'}}>
        <h1>Heat :</h1><div className="circle" style={{backgroundColor: Statusdata["heat_color"],width:20,height:20,borderRadius:'50%'}}/>
      </div>
        <div style={{display:'flex',alignItems:'center',justifyContent:'flex-start'}}>
        <h1>Motion Detect :</h1><div className="circle" style={{backgroundColor: Statusdata["sensor_color"],width:20,height:20,borderRadius:'50%'}}/>
 </div>
 <div style={{display:'flex',alignItems:'center',justifyContent:'flex-start'}}>
        <h1>Safe: </h1><div className="circle" style={{backgroundColor: Safecheck["warning_color"],width:20,height:20,borderRadius:'50%'}}/>
        </div>
    </div>
        </div>


    </div>
  )
}

export default Status