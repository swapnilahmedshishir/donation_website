import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { FcDonate,FcConferenceCall,FcKindle } from "react-icons/fc";
import { TfiArrowRight } from "react-icons/tfi";
import './ContactUsPage.css';
import { BsFacebook,BsInstagram,BsYoutube,BsWhatsapp } from "react-icons/bs";
import From from './From/From';

const ContactUsPage = () => {
  return (
    <div className='container contact_us_page'>
        <div className="text-center">
            <div className="subtitle text-center">Contact us</div>
            <h1>Get in touch today</h1>
            <p className="mg-bottom-0"></p>
        </div>
    
    <Row  className="g-4 card_row" >      
        <Col lg={4} md={4} sm={12} xs={12} className="g-4 card_col text-center" >
        <div className='card_text_div'>
            <span className='boostrap_icon_style'><FcDonate/></span>        
        <h3>Donations</h3>
        <p>bnq.com <strong><TfiArrowRight/></strong></p>
        </div>
        </Col>
        <Col lg={4} md={4} sm={12} xs={12} className="g-4 card_col text-center" >
        <div className='card_text_div'>
            <span className='boostrap_icon_style'><FcConferenceCall/></span>        
        <h3>Partnerships</h3>
        <p>info@gmail.com <TfiArrowRight/></p>
        </div>
        </Col>  
        <Col lg={4} md={4} sm={12} xs={12} className="g-4 card_col text-center" >
        <div className='card_text_div'>
            <span className='boostrap_icon_style'><FcKindle/></span>        
        <h3>Press</h3>
        <p>press@xyz.com <TfiArrowRight/></p>
        
        </div>
        </Col>      
    </Row>

    <Row>
        <Col lg={3} md={3} sm={12} xs={12} className='contact_txt'>
            <h2>Contact us</h2>
            <div className='contact_left_txt'>
            XYZ Company Name <br/>
            USA-nummer: +18143519153 <br/>
            RSIN: USA2012779 <br/>
            ANBI-  <br/>
            </div>
            <div className='contact_left_txt'>
            Address: United state <br/>
            <a href="mailto:info@xyz.gamil.com">Email address: info@xyz.gamil.com</a> <br/>
            </div>
            <br/>
            <div className='contact_left_txt'>
            Bank account: xyz company<br/>
            BUNQ - BUNQ 2071 2022<br/>
            <a href="#">bunq.me</a> 
            </div>
            <h3>Follow us on social media</h3>
            <div className="social-container">
                <ul className="social-icons">
                    <li><a href="#"><span><BsFacebook/></span></a></li>
                    <li><a href="#"><span><BsInstagram/></span></a></li>
                    <li><a href="#"><span><BsYoutube/></span></a></li>
                    <li><a href="#"><span><BsWhatsapp/></span></a></li>
                </ul>
            </div>
        </Col>
        <Col lg={9} md={9} sm={{ order: "first" }}  xs={{ order: "first" }} className='from_row'>
            <From></From>
        </Col>
    </Row>
    
    </div>
  )
}

export default ContactUsPage
