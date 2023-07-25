import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import fackData from '../../../Fackdate/News/donationNews.json';
import './PostStyle.css';
import { Col, Container, Row } from 'react-bootstrap';
import Articals from '../Articals/Articals';
const DaArtical = () => {
  const { title,topic } = useParams();
  const FackData = fackData;
  const [post, setPost] = useState([]);

  useEffect(() => {
    const matchProduct = FackData.articles.filter(
      (artical) => artical.title.toLowerCase() === title.toLowerCase()
    );
    setPost(matchProduct);
  }, [title]);
console.log(post);
  // Check if post[0] exists before accessing its properties
  const postTitle = post[0]?.title;
  const image = post[0]?.media;
  const summary = post[0]?.summary;
  const published_date = post[0]?.published_date;


//   filter date 

const [filteredData, setFilteredData] = useState([]);
useEffect(() => {
    const result =FackData.articles.filter((ar, index) => ar.topic.toLowerCase() === topic.toLowerCase());
    
    const MatchingArticles = result.slice(0, 3);;
    
    setFilteredData(MatchingArticles);
  },[topic]) ;
console.log(filteredData);


  return (
    <div className='post'>
         <div className='container'>
         <span className='badge_secondary_topic'>{topic}</span>
            <span className='badge_secondary_date'>{published_date}</span>
            <h2 className='postTitle'>{postTitle}</h2>
            <img src={image} className='post_image' alt='post_image' />
         </div>
         <div className='postSummary'>{summary}</div>

         <Container>
            <Row className='blog_catagoray'>
                <Col xs={12} md={11} lg={9}><h4 className='post_topic'>Realated Topic</h4></Col>
                <Col xs={12} md={11} lg={3}>
                <Link to='/blog'><button className='btn_blog_catagory'>Browse more</button></Link>
                </Col>           
            </Row>
        </Container>
        <Container>
            <Row className='blog_catagoray'>
            {
               filteredData.map((ar) => {
               return <Col lg={4} key={ar._id}><div><Articals articals={ar}></Articals></div></Col>
            
               })
            }
            </Row>
        </Container>
    </div>
  );
};

export default DaArtical;
