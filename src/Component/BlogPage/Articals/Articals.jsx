import React from 'react'
import './Articals.css';
import Card from 'react-bootstrap/Card';
import { FiArrowRight } from "react-icons/fi";
import CardGroup from 'react-bootstrap/CardGroup';
import { Link } from 'react-router-dom';
const Articals = (props) => {
  
  const {media,title,published_date,topic} = props.articals;
  // console.log(title);
  return (
    <div className='blog_card'>
      <Link to={`/blog/${topic}/${title}`}><Card className='artical_card'>
        <Card.Img variant="top" id='artical_card_img' src={media} />
        <Card.Body id='artical_card_body'>
          <Card.Title>
            <span className='badge_secondary_topic'>{topic}</span>
            <span className='badge_secondary_date'>{published_date}</span>
          </Card.Title>
          <Card.Text id='artical_card_text'>
           {title}
          </Card.Text>
          <strong className="artical_card_more">Read more <span><FiArrowRight/></span></strong>
        </Card.Body>        
      </Card></Link>
    </div>
  )
}

export default Articals
