import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './CoverPage.css'
import HomeCoverCard from './HomeCoverCard';



const CoverPage = () => {
  return (
    <Container className='pb-5 mb-5' fluid>
      <Row>
        <Col className='homeCoverPage'>
          <Row>
            <Col xs={12}>
              <h2 className='display-1'>Makent Boats</h2>
              <p className='h4 '>Rent perfect boats from boat owners </p>
              <p className='h4 '>and enjoy adventurous moment. </p>
            </Col>
          </Row>

          <Row>
            <Col xs={1}></Col>
            <Col xs={7} className='d-md-block d-sm-none d-none'>
              <HomeCoverCard/>
            </Col>
            <Col xs={4}></Col>s
          </Row>
            
           
            
        </Col>
      </Row>
    </Container>
    
  )
}

export default CoverPage

