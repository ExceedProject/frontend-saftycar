import React, { useEffect, useState} from 'react'
import axios from 'axios'
import { Slide } from 'react-slideshow-image';
import HW1 from "../assets/images/hardware1.jpg"
import HW2 from "../assets/images/hardware2.jpg"
import HW3 from "../assets/images/hardware3.jpg"
import HW4 from "../assets/images/hardware4.jpg"
import HW5 from "../assets/images/hardware5.jpg"
import HW6 from "../assets/images/hardware6.jpg"
import HW7 from "../assets/images/hardware7.jpg"
import 'react-slideshow-image/dist/styles.css'

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
                // if(data["warning"]===1){
                //     window.alert('May have a human in that place?')
                // }
            })
        
        }, 3000);
        return () => {
            clearInterval(id)
        }
    }, [])
    useEffect(() => {
        if(Safecheck["warning"]===1){
            window.alert('May have a human in that place?')
        }
    }, [Safecheck?.warning])

    const slideImages = [
        HW1, 
        HW2, 
        HW3,
        HW4,
        HW5,
        HW6,
        HW7
      ];

    async function getStatusdata(){
        const res = await axios.get('https://ecourse.cpe.ku.ac.th/exceed16/api/safety-car/status')
        return res.data;
    }

    async function getSafecheck(){
        const res = await axios.get('https://ecourse.cpe.ku.ac.th/exceed16/api/safety-car/warning')
        return res.data;
    }



// console.log(Statusdata);
  return (
    <div  style={{display:'flex',alignItems:'center',justifyContent:'center', padding:60}}>
        <div style={{width:450}}>
        <Slide easing="ease">
            {slideImages.map((item,index)=>  
            <div className="each-slide" key={index}>
            <div style={{'backgroundImage': `url(${item})`}}>
            </div>
          </div>)}
        </Slide>
      </div>

    <div style={{marginLeft:200}}>   
            <center><h1>Status</h1></center>
            <div className="why">
                <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                  <h1>CO :</h1><div className="circle" style={{backgroundColor: Statusdata["carbon_color"],width:20,height:20,borderRadius:'50%'}}/>  
                </div>
            <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
            <h1>Heat :</h1><div className="circle" style={{backgroundColor: Statusdata["heat_color"],width:20,height:20,borderRadius:'50%'}}/>
            </div>
            <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                <h1>Motion Detect :</h1><div className="circle" style={{backgroundColor: Statusdata["sensor_color"],width:20,height:20,borderRadius:'50%'}}/>
             </div>
             </div>
             <div className='why' style={{height: 80,padding:15,marginTop:24}}>
            <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                <h1>Safe: </h1><div className="circle" style={{backgroundColor: Safecheck["warning_color"],width:20,height:20,borderRadius:'50%'}}/>
            </div>
        </div>
    </div>


    </div> 
  )
}

export default Status