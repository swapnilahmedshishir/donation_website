import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Adress from "./FooterPart/Adress";
import Menu from "./FooterPart/Menu";
import FooterCard from "./FooterPart/FooterCard";
import SocilMedia from "./FooterPart/SocailGroup/SocilMedia";
const Footer = () => {
  return (
    <footer className="footer_div">
      <Container className="container footer_area">
        <Row className="row frist_footer_area">
          <Col lg={4} md={6} sm={12} xs={12}>
            <Adress />
          </Col>
          <Col lg={3} md={6} sm={12} xs={12}>
            <Menu />
          </Col>
          <Col lg={1} md={0} sm={12} xs={12}></Col>
          <Col lg={4} md={12} sm={12} xs={12}>
            <FooterCard />
          </Col>
        </Row>
        <hr />
        <Row className="last_footer_area">
          <Col lg={6} md={6} sm={12} xs={12}>
            <h4 className="copyRightText">Copyright © XYZ Company</h4>
          </Col>
          <Col lg={6} md={6} sm={12} xs={12}>
            <SocilMedia />{" "}
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
