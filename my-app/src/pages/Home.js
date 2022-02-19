
import React, { useEffect, useState } from 'react'
import axios from "axios"
import { LineChart, Line, XAxis, YAxis, CartesianGrid } from 'recharts'
import moment from 'moment'
import { Link } from 'react-router-dom'

const Home = () => {
  
  const [graphData, setGraphData] = useState([]);
  useEffect(() => {
    const interval = setInterval(() => {
      getData().then((data) => {
        setGraphData(data)
      }).catch(console.log)
    }, 3000);
    return () => clearInterval(interval);
 
  }, [])
    const dateFormatter = date => {
      return moment(date).format('DD/MM/YY HH:mm');
    }
  
  
    async function getData() {
      const res = await axios.get('https://ecourse.cpe.ku.ac.th/exceed16/api/safety-car/graph')
      return res.data
    }

  return (
    <div className='container'>
      <div className="content-left">
        <h2 className='home'>Safety Car</h2>
        <div className="frame">
          <img src="https://hips.hearstapps.com/countryliving.cdnds.net/17/47/2048x1365/gallery-1511194376-cavachon-puppy-christmas.jpg?resize=980:*" alt="my-profile" />
        </div>
        <div className='box'>
          <Link to="/Status"><h3>Get more Info</h3></Link>
          <Link to="/Graph"><h3>Get Temperature Graph</h3></Link>
        </div>
      </div>
      <div className="content-right"> 
     

      <div className='carbon-graph'>
        <div className='carbon-label'>Carbon Monoxide and Heat Graph</div>
       
        <LineChart width={500} height={300} data={graphData}> 
        <XAxis
            dataKey="time"
            tickFormatter={dateFormatter}
        />
        <YAxis />
        <CartesianGrid stroke="#ccc" />
        <Line type="monotone" dataKey="carbon" stroke="#8884d8" strokeWidth={3} />
        <Line type="monotone" dataKey="heat" stroke="#fd123f" strokeWidth={3} />
        </LineChart>
     
    
    </div>
   
        <div className='why'>
        <h4>Why we do this?</h4>
          <p>
            เนื่องจากปัญหาเด็กติดอยู่ในรถเป็นหนึ่งในปัญหาที่พบได้บ่อยๆ เนื่องจากผู้ปกครองลืมเด็กที่ไม่สามารถช่วยเหลือตัวเองได้ไว้ในรถ และทุกๆครั้งที่เกิดเด็กที่ติดอยู่ในรถ เด็กก็มีโอกาสที่จะเสียชีวิตได้
            ไม่ว่าจะเป็นมาจากสภาวะลมแดด (Heat Stroke) หรือการขาดอากาศหายใจจากสภาวะพิษคาร์บอนมอนอกไซด์ (Carbon Monoxide Poisoning)
            เราจึงมีความคิดที่จะสร้างอุปกรณ์ที่จะช่วยให้ป้องกันไม่ให้ผู้ปกครองนั้นลืมเด็กเล็กไว้ในรถนั่นเอง
          </p>
        </div>
      </div>
    </div>
  )
}

export default Home
