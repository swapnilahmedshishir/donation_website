import React from 'react'

import './aboutUs.css';
import '../Button/Button.css';
import { Col, Container, Row } from 'react-bootstrap';

import GrothPlantImage from './AboutUsImage/PlantGroth.png'
import BroderLine from './AboutUsImage/borderLine3.png';
import ytThumbileImage from './AboutUsImage/Kids_helps.png';
import TeamMember1 from './AboutUsImage/swapnilDu.jpg';


import { BsPlayCircleFill} from "react-icons/bs";
import Project from './project/Project';
import SocailContainer from './SocailContainer';

 


const AboutUs = () => {
  const myStyle={
    backgroundImage: `url(${GrothPlantImage})` ,
    height:'400px',
    fontSize:'50px',
    opacity: 0.8,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
};

  return (
    <div className=''>
      {/* about us hero part */}
      <div className='' style={myStyle}>
        <div className='container aboutUs_frist_section'>
            <div className='abotus_text'>
            <h1>About US</h1>
            </div>
            <div>
            <button className='about_donate_btn'>Donate now</button>
            <button className='about_help_btn'>How can I help</button>
            </div>
        </div>        
      </div>
      {/* section 1 */}
      <Container>
      <Row className='about_build'>
        <Col xs={12} md={12} lg={6}>
          <div className='title_wraper'>
          <h3 className='subtitle'>Dignity, Opportunity, Hope</h3>
          <img src={BroderLine} className='subtitleBorderLineImage' alt="subtitleBorderLineImage" />
          <h2 className='title'>Building A XYZ Place</h2>
          <p>Dignity, Opportunity, Hope
            Building A Prosperous Rural Africa
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis totam, laudantium officia praesentium expedita omnis unde tempora beatae, modi, sequi quis. Est quas corporis, nobis aperiam cumque minima libero rem, itaque quo vitae odit?</p>
           
            <button className='btn_main readMore_btn'>Read more</button>

          </div>          
          
        </Col>
        <Col xs={12} md={12} lg={6}>
          <div className='build_video_thumbile_image youtbe_video'>
          <a href='https://www.youtube.com/embed/TwwmhcGbvt0' target='_blank'>  <img src={ytThumbileImage} alt="youtybe_thumbile_image" />
          <BsPlayCircleFill className='palyBtn play-btn  animated-css-play-button'/>
          
            </a>
          </div>
        </Col>
      </Row>
      </Container>
      
     <div className='Misson'>
     <Container className='aboutUs_misson'>
         <h4>What we Do?</h4>
         <h2>We Are In A Mission To Help The Helpless</h2>
      </Container>

      <div className='projcet_misson'>
       <Project/>
      </div>
     </div>


     
      <Container>
        <Row className='our_foundation'>
          <Col xs={12} md={12} lg={6}>
          <div className='build_video_thumbile_image we_are_image'>
             <img src={ytThumbileImage} alt="youtybe_thumbile_image " /> 
          </div>
          </Col>
          <Col xs={12} md={12} lg={6}>
            <div className='who_we_are'>
              <h4 className='subtitle'>WHO WE ARE</h4>
              <h2 className='title mg-bottom-24px'>Why did we start this foundation?</h2>
              <p className='description'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis, repellendus neque veniam iusto repellat a amet impedit pariatur eos veritatis mollitia ipsum laboriosam doloribus laudantium numquam cum illum placeat ducimus autem maiores quasi culpa explicabo. Corrupti reiciendis nihil tempore exercitationem doloremque dolorum soluta necessitatibus, pariatur cumque consequuntur corporis perferendis aliquid?</p>
              <p className='description'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas consequuntur delectus iusto inventore tempora iure placeat recusandae nobis aliquam itaque.</p>
              <button className='btn_main small'>Donate now</button>
            </div>
          </Col>
        </Row >
      </Container>


     <div className='team_meet'>
     <Container className='team_section'>
      <Row className='meet_team_section_top'>
        <Col className='text-center'>
        <h4 className='subtitle'>MEET US</h4>
        <h2 className='title'>Our Team</h2>
        <div className="heading_line_top"></div>
        </Col>
      </Row>
      <Row className='gx-3 meet_team_section_bottom'>
        <Col xs={12} md={6} lg={3} className='team_member'> 
        <img src={TeamMember1} alt='teamMember1' className='responsive_image'/>
          <div class="hover_text">         
            <h4>Swapnil Ahmed shishir</h4>
            <h5> CEO , Hooli </h5>
            <SocailContainer></SocailContainer>        
          </div>
        </Col>
        <Col xs={12} md={6} lg={3} className='team_member'>
        <img src={TeamMember1} alt='teamMember1' className='responsive_image'/>
          <div class="hover_text">         
            <h4>Swapnil Ahmed shishir</h4>
            <h5> CEO , Hooli </h5>
            <SocailContainer></SocailContainer>        
          </div>
        </Col>
        <Col xs={12} md={6} lg={3} className='team_member'><img src={TeamMember1} alt='teamMember1' className='responsive_image'/>
          <div class="hover_text">         
            <h4>Swapnil Ahmed shishir</h4>
            <h5> CEO , Hooli </h5>
            <SocailContainer></SocailContainer>        
          </div></Col>
        <Col xs={12} md={6} lg={3} className='team_member'>
        <img src={TeamMember1} alt='teamMember1' className='responsive_image'/>
          <div class="hover_text">         
            <h4>Swapnil Ahmed shishir</h4>
            <h5> CEO , Hooli </h5>
            <SocailContainer></SocailContainer>        
          </div>
        </Col>
      </Row>
     </Container>
     </div>
    </div>
  )
}

export default AboutUs
