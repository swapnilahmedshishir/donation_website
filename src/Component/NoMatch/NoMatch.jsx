import React from 'react';
import './NoMatch.css';
import images from './NoMatchimage/page_not_found404.png';
const NoMatch = () => {
  return (
    <div className='page_404'>
     <div className='container d-flex justify-content-center align-items-center'>
      <img src={images} alt='404Image'/>
     </div>
    </div>
  )
}

export default NoMatch
