import React from 'react'
import '../Project.css';
import { BsFillHeartPulseFill } from "react-icons/bs";

const MedicalFacilities = () => {
  return (
    <div className='ProjectAllStyle'>
      <span className='project_icon'><BsFillHeartPulseFill className='icon'/></span>
      <h3 className='title'>Medical Facilities</h3>      
      <p className='description'>An organization’s mission statement should clearly communicate</p>
    </div>
  )
}

export default MedicalFacilities
