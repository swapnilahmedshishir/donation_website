import React from 'react';
import { BsPlayCircleFill,BsFacebook,BsInstagram,BsTwitter,BsWhatsapp } from "react-icons/bs";

const SocailContainer = () => {
  return (
    <div className="social-container">
                <ul className="social-icons">
                    <li><a href="#"><span><BsFacebook/></span></a></li>
                    <li><a href="#"><span><BsInstagram/></span></a></li>
                    <li><a href="#"><span><BsTwitter/></span></a></li>
                    
                </ul>
    </div>
  )
}

export default SocailContainer
