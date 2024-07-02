import { useEffect, useState } from "react";
import Articals from "./Articals/Articals";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import fackData from "../../Fackdate/News/donationNews.json";

const Blogpage = () => {
  const [displayText, setDisplayText] = useState("Realated Topic");
  const FackData = fackData;

  const handleButtonClick = (event) => {
    const buttonText = event.target.textContent;
    setDisplayText(buttonText);
  };

  const [articals, setArticals] = useState([]);

  useEffect(() => {
    const matchProduct = FackData.articles.filter(
      (artical) => artical.topic.toLowerCase() === displayText.toLowerCase()
    );
    setArticals(matchProduct);
  }, [displayText]);

  // console.log(articals);

  return (
    <div className="blog">
      <div>
        <div className="heading_line_top"></div>
        <h3 className="text-center">Blog & Resources</h3>
      </div>
      <Container>
        <Row className="blog_catagoray">
          <Col xs={12} md={11} lg={4}>
            <h4>{displayText}</h4>
          </Col>
          <Col xs={12} md={11} lg={8}>
            <Link to="">
              <button className="btn_blog_catagory" onClick={handleButtonClick}>
                Health care
              </button>
            </Link>
            <button
              className="btn_blog_catagory small"
              onClick={handleButtonClick}
            >
              Humanitarian
            </button>
            <button
              className="btn_blog_catagory small"
              onClick={handleButtonClick}
            >
              Clean water
            </button>
            <button
              className="btn_blog_catagory small"
              onClick={handleButtonClick}
            >
              News
            </button>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          {articals.map((ar) => {
            return (
              <Col lg={4} key={ar._id}>
                <div>
                  <Articals articals={ar}></Articals>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default Blogpage;
