import React from 'react'
import './Project.css';
import { Col, Container, Row } from 'react-bootstrap';
import CleanWater from './ProjectCatagory/CleanWater';
import HealthyFood from './ProjectCatagory/HealthyFood';
import MedicalFacilities from './ProjectCatagory/MedicalFacilities';
import { Link } from 'react-router-dom';

const Project = () => {
  return (
    <Container>
        <Row className='gx-3'>
            <Col className='project_item'><Link to='/cleanWater'><CleanWater/></Link></Col>
            <Col className='project_item'><Link to='/healthFood'><HealthyFood/></Link></Col>
            <Col className='project_item'><Link to='/MedicalFacilities'><MedicalFacilities/></Link></Col>
        </Row>
    </Container>
  )
}

export default Project
