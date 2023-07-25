import React from 'react';
import { Link } from 'react-router-dom';


const FooterCard = () => {
  return (
    <div className='Card_container'>
      <div className='cardText text-center'>
      <h3>Join us and let’s make <br/> a better world, today</h3>
      <Link to={'/donate'}><button className='DonateNowBtn'>Donate now</button></Link><br/>
      <Link to={'/contactus'}><button className='HelpBtn'>More ways to help</button></Link>
      </div>
    </div>
  )
}

export default FooterCard
