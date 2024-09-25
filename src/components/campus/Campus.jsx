import React from 'react'
import './Campus.css'
import gall1 from '../../assets/gallery-1.png'
import gall2 from '../../assets/gallery-2.png'
import gall3 from '../../assets/gallery-3.png'
import gall4 from '../../assets/gallery-4.png'
import white_arrow from '../../assets/white-arrow.png'

const Campus = () => {
  return (
    <div className='campus'>
        <div className="gallery">
            <img src={gall1} alt="" />
            <img src={gall2} alt="" />
            <img src={gall3} alt="" />
            <img src={gall4} alt="" />
        </div>
        <button className='btn dark-btn'>See more here <img src={white_arrow} alt="" /></button>
    </div>
  )
}

export default Campus