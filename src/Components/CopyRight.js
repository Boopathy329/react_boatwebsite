import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const CopyRight = () => {
  return (
    <Container className='my-4' >
      <Row>
        <Col>
        <p>&#169;Makent Boats corp.</p>
        </Col>
        <Col>
        <p className='text-primary fw-bold'>this page was developed by saikrishna</p>
        </Col>
        <Col className='text-md-end text-sm-start '>
        <i class="bi bi-facebook px-2 text-primary"></i><i class="bi bi-twitter-x px-2"></i>
        <i class="bi bi-instagram px-2 text-danger"></i><i class="bi bi-pinterest px-2 text-danger"></i>
        <i class="bi bi-linkedin px-2 text-primary"></i><i class="bi bi-youtube px-2 text-danger"></i>
        </Col>
      </Row>
    </Container>

  )
}

export default CopyRight


