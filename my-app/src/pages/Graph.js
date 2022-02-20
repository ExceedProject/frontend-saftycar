
import React, { useEffect, useState } from 'react'
import axios from "axios"
import { LineChart, Line, XAxis, YAxis, CartesianGrid } from 'recharts'
import moment from 'moment'

const Graph = () => {

  const [graphData, setGraphData] = useState([]);
  useEffect(() => {
    const interval = setInterval(() => {
      getData().then((data) => {
        setGraphData(data)
      }).catch(console.log)
    }, 1000);
    return () => clearInterval(interval);
 
  }, [])
  
  // console.log(graphData)

  const dateFormatter = date => {
    return moment(date).format('DD/MM/YY HH:mm');
  }


  async function getData() {
    const res = await axios.get('https://ecourse.cpe.ku.ac.th/exceed16/api/safety-car/graph')
    return res.data
  }
  return (
    <div className='graph'>
      <div className='carbon-graph'>
        <div className='carbon-label'>Carbon Monoxide Graph</div>
        <p>Carbon Monoxide Level (ppm)</p>
        <LineChart width={800} height={400} data={graphData}> 
        <XAxis
            dataKey="time"
            tickFormatter={dateFormatter}
        />
        <YAxis />
        <CartesianGrid stroke="#ccc" />
        <Line type="monotone" dataKey="carbon" stroke="#8884d8" strokeWidth={3} />
        </LineChart>
      </div>
      <div className='heat-graph'>
        <div className='heat-label'>Heat Graph</div>
        <p>Car Temperature (C)</p>
        <LineChart width={800} height={400} data={graphData}>
        <XAxis
            dataKey="time"
            tickFormatter={dateFormatter}
        />
        <YAxis/>
        <CartesianGrid stroke="#ccc" />
        <Line type="monotone" dataKey="heat" stroke="orangered" strokeWidth={3} />
        </LineChart>
      </div>
    </div>
  )
}

export default Graph