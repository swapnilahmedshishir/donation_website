import heroImage from "./HomeImage/balram-pandey-_GBiU5qcMLM-unsplash.jpg";
import kidHelp from "./HomeImage/Kids_helps.png";
import donationNow from "./HomeImage/Charity_and_Donation1.png";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Project from "../AboutPage/project/Project";

const Home = () => {
  const myStyle = {
    backgroundImage: `url(${heroImage})`,
  };
  return (
    <div>
      <div style={myStyle} className="hero_section">
        <Container className="text-center">
          <Row className="">
            <Col xs={12} md={11} lg={6}></Col>
            {/* <Col xs={0} md={1} lg={6}></Col> */}
          </Row>
          <div className="heading_line_topbar"></div>
          <h1 className="heading_line">HELP TO REBUILD WORLD</h1>
          <p className="hero_para_text">
            Empowering global communities during adversity, we ensure safety,
            health, and access to essentials, while driving economic and
            infrastructural revitalization for a transformative and sustainable
            future.
          </p>
          <Link to="/donate">
            <button className="btn_main ">Donate now</button>
          </Link>
          <Link to="/about">
            <button className="btn_about_charity">About our charity</button>
          </Link>
        </Container>
      </div>

      <div className="our_project">
        <Container>
          <Row gx={3} className="project_area">
            <Col xs={12} md={12} lg={9} className="projct_text_area">
              <h3 className="project_subtitle">HOW DO WE HELP?</h3>
              <h4 className="project_para_text">
                Our initiatives focus on assisting people worldwide, ensuring
                their survival in a rapidly changing world.
              </h4>
            </Col>
            <Col xs={12} md={12} lg={3}>
              <Link to="/donate">
                <button className="btn_main project_btn">Our Projects</button>
              </Link>
            </Col>
          </Row>
          <Project></Project>
        </Container>
      </div>

      <Container>
        <Row className="our_foundation">
          <Col xs={12} md={12} lg={6}>
            <div className="build_video_thumbile_image home_we_are_image">
              <img src={kidHelp} alt="youtybe_thumbile_image " />
            </div>
          </Col>
          <Col xs={12} md={12} lg={6}>
            <div className="who_we_are">
              <h4 className="subtitle">WHO WE ARE</h4>
              <h2 className="title mg-bottom-24px">
                Why did we start this foundation?
              </h2>
              <p className="description Comunity_description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Officiis, repellendus neque veniam iusto repellat a amet impedit
                pariatur eos veritatis mollitia ipsum laboriosam doloribus
                laudantium numquam cum illum placeat ducimus autem maiores quasi
                culpa explicabo. Corrupti reiciendis nihil tempore
                exercitationem doloremque dolorum soluta necessitatibus,
                pariatur cumque consequuntur corporis perferendis aliquid?
              </p>
              <div className="home_about_btn">
                <Link to="/about">
                  <button className="btn_main">About us</button>
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row className="our_foundation">
          <Col xs={12} md={12} lg={6}>
            <div className="who_we_are Support_Comunity">
              <h2 className="title mg-bottom-24px">Support Our Comunity</h2>
              <p className="description Comunity_description ">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Officiis, repellendus neque veniam iusto repellat a amet impedit
                pariatur eos veritatis mollitia ipsum laboriosam doloribus
                laudantium numquam cum illum placeat ducimus autem maiores quasi
                culpa explicabo. Corrupti reiciendis nihil tempore
                exercitationem doloremque dolorum soluta necessitatibus,
                pariatur cumque consequuntur corporis perferendis aliquid?
              </p>
            </div>
          </Col>
          <Col xs={12} md={12} lg={6}>
            <div className="build_video_thumbile_image home_we_are_image">
              <img src={donationNow} alt="donationNow" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
