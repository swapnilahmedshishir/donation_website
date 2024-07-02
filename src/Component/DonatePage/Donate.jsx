import React from "react";
import "./DonateStyle.css";
import { Col, Container, Row } from "react-bootstrap";
const Donate = () => {
  return (
    <div className="donate_container">
      <div className="container">
        <div className="donate_top_container">
          <div className="heading_line_top"></div>
          <h1>Donate to our cause</h1>
          <p className="text-center donate_text">
            Sit labore velit cum blanditiis, recusandae totam nesciunt expedita
            similique reiciendis perspiciatis inventore vel aliquid! Magni ad,
            saepe, quis sed eaque error provident voluptates odio corrupti
            maiores vel dolorum rem laudantium placeat pariatur, labore harum!
            Nesciunt nobis harum earum alias, aut fuga.
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
            eligendi expedita molestias qui eius quibusdam culpa possimus
            assumenda tempora, nihil error nostrum facilis inventore repudiandae
            modi iste rem. Reiciendis, possimus fuga suscipit mollitia tenetur
            vero dicta ab praesentium fugiat quasi quidem optio rem quos
            quibusdam deserunt.
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste earum
            quibusdam animi dignissimos temporibus aliquam ut eos qui architecto
            laborum aut perspiciatis libero praesentium laboriosam nobis
            deserunt officiis nulla adipisci culpa quod, accusantium, deleniti
            minima quisquam. Mollitia natus esse labore?
          </p>
        </div>
        <div className="donate_btn_conatiner">
          <Row lg={2}>
            <Col lg={4} md={6} sm={6} xs={6}>
              <button className="btn_main donate_btn">Donate 10 Doller</button>
            </Col>
            <Col lg={4} md={6} sm={6} xs={6}>
              <button className="btn_main donate_btn">Donate 25 Doller</button>
            </Col>
            <Col lg={4} md={6} sm={6} xs={6}>
              <button className="btn_main donate_btn">Donate 50 Doller</button>
            </Col>
            <Col lg={4} md={6} sm={6} xs={6}>
              <button className="btn_main donate_btn">Donate 75 Doller</button>
            </Col>
            <Col lg={4} md={6} sm={6} xs={6}>
              <button className="btn_main donate_btn">Donate 100 Doller</button>
            </Col>
            <Col lg={4} md={6} sm={6} xs={6}>
              <button className="btn_main donate_btn">
                Donate other amount
              </button>
            </Col>
          </Row>
        </div>
        <div className="donate_link_bank">
          <p className="donate_pargraph">
            <strong>Bank account XYZ</strong>
            <br />
            <strong>BUNQ - BKJSJ 6577 80</strong>
            <br />
            <a href="">bnq.me</a>
          </p>
          <p>
            <p className="donate_pargraph">
              <strong>PayPal account XYZ</strong>
              <br />
              <a href="">paypal.me</a>
            </p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Donate;
