
import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='container'>
      <div className="content-left">
        <h2 className='home'>Safety Car</h2>
        <div className="frame">
          <img src="https://hips.hearstapps.com/countryliving.cdnds.net/17/47/2048x1365/gallery-1511194376-cavachon-puppy-christmas.jpg?resize=980:*" alt="my-profile" />
        </div>
        <div className='box'>
          <Link to="/Info"><h3>Get more Info</h3></Link>
          <Link to="/Graph"><h3>Get Temperature Graph</h3></Link>
        </div>
      </div>
      <div className="content-right"> 
        <div className="frame2">
          <img src="https://www.researchgate.net/publication/333561136/figure/fig1/AS:774809180991488@1561740312049/Graph-of-the-Dunning-Kruger-effect-on-the-confidence-of-medical-students-in-their.png" alt="my-profile" />
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