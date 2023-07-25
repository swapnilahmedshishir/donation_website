import React from 'react';
import "../../Footer.css";
import { FaFacebookF,FaLinkedinIn,FaInstagram,FaTwitter } from "react-icons/fa6";

const SocilMedia = () => {
  return (
    <div className='socailMedia'>
      <ul> 
    <li>
      <a href="#">
        <span></span>
        <span></span>
        <span ><FaFacebookF/></span>
      </a> 
    </li>
    <li>
      <a href="#">
        <span></span>
        <span></span>
        <span ><FaTwitter/></span>
      </a> 
    </li>
    <li>
      <a href="#">
        <span></span>
        <span></span>
        <span><FaInstagram/></span>
      </a> 
    </li>
    <li>
      <a href="#">
        <span></span>
        <span></span>
        <span ><FaLinkedinIn/></span>
      </a> 
    </li>
  </ul>  
    </div>
  )
}

export default SocilMedia
