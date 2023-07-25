import React from 'react';
import '../Footer.css';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <div className='footer_menu'>
      <ul>
        <li>Menu</li>
        <li><Link to={'/home'}>Home</Link></li>
        <li><Link to={'/about'}>About</Link></li>
        <li><Link to={'/blog'}>Blog</Link></li>
        <li><Link to={'/donate'}>Donate</Link></li>
        <li><Link to={'/contactus'}>Contact</Link></li>
        <li><Link to={'/Disclaimer'}>Privacy & Disclaimer</Link></li>       
      </ul>
    </div>
  )
}

export default Menu
