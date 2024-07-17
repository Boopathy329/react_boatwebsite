import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const AboveFooter = () => {
  return (
    <Container className='my-5' >
      <Row >
        <Col className='my-5 px-5 '>
        <Card className='p-3 mb-5 rounded-5 shadowClass'>
      <Card.Body>
        <Card.Text>
            <h2 className='text-center my-5'>24/7 customer support</h2>
            <p className='my-5 text-center'>
            If you need help while travelling or renting of boats,
             contact us at our toll free number: 000 800 4405 103
            </p>
            
        </Card.Text>
      </Card.Body>
    </Card>
        </Col>
        <Col className='my-5 px-5 ' >
        <Card  className='p-3 mb-5 rounded-5 shadowClass'>
      <Card.Body>
        <Card.Text>
            <h2 className='text-center my-5'>₹6,00,00,000 Owners guarantee</h2>
            <p className='my-5 text-center'>Owners are protected against boat damages up to ₹6,00,00,000. Learn More</p>
        </Card.Text>
      </Card.Body>
    </Card>

        </Col>
        <Col className='my-5 px-5 '>
        <Card  className='p-3 mb-5 rounded-5 shadowClass'>
      <Card.Body>
        <Card.Text>
            <h2 className='text-center my-5'>Verified ID</h2>
            <p className='my-5 text-center'>
            We aim to build a trusted community by giving you more info when you're deciding who to be owner or renter.
            </p>
        </Card.Text>
      </Card.Body>
    </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default AboveFooter

