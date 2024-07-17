import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

const Footer = () => {
  return (
    <Container >
    <Row>
      <Col className='col-lg-3 col-md-6 col-sm-12 col-12'>
        <div className='d-flex justify-content-between mb-5'>
        <label htmlFor="" className='border border-secondary px-2'><i class="bi bi-globe2"></i>English</label>
        <label htmlFor="" className='border border-secondary px-2'>USD</label>
        </div>
        <div className='my-3'>
        <Image src={require("./boat.png")} fluid />
        </div>

      </Col>
      <Col className='col-lg-3 col-md-6 col-sm-12 col-12'>
      <h2>Company</h2>
      <ul className='list-group list-group-flush'>
        <li className='list-group-item'>Terms of Service</li>
        <li className='list-group-item'>Privacy Policy </li>
        <li className='list-group-item'>Owner Guarantee </li>
        <li className='list-group-item'>Renter Refund</li>
        <li className='list-group-item'>Copyright Policy</li>
        <li className='list-group-item'>Consent Disagree</li>
        <li className='list-group-item'>About Us</li>
        <li className='list-group-item'> <a href='/contact'>Contact Us</a></li>
        <li className='list-group-item'></li>
      </ul>
      </Col>
      <Col className='col-lg-3 col-md-6 col-sm-12 col-12'>
      <h2 >Discover</h2>
      <ul className='list-group list-group-flush'>   
        <li className='list-group-item'>Travel Credit</li>
        <li className='list-group-item'>Trust & Safety </li>
        <li className='list-group-item'></li>
      </ul>
      </Col>
      <Col className='col-lg-3 col-md-6 col-sm-12 col-12'>
      <h2>Listing</h2>
      <ul className='list-group list-group-flush'>   
        <li className='list-group-item'>Why Owner</li>
        <li className='list-group-item'>Hospitality</li>
        <li className='list-group-item'></li>
      </ul>
      </Col>

    </Row>
  </Container> 
   )
}

export default Footer


