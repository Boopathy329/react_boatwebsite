import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const JustBooked = () => {
  return (
    <Container className='my-5 pt-5' >
        <h2>Just Booked</h2>
      <Row className='my-5'>
        <Col className='col-lg-3 col-12 col-md-6 col-sm-6 px-md-2 px-5'>
        <Card  className='shadow-lg mb-5 bg-body-tertiary rounded rounded-5'>
      <Card.Img variant="top" src={require("./jb1.png")} style={{height:'35vh'}} className='rounded-top-5'/>
        <Card.Body>
            <Card.Text>
                <p className='mb-0'><span className='text-warning'>Power    .</span>1-12Passengers</p>
                <p className='mb-0'>Sun Chaser pontoon party boat</p>
                <p className='mb-0'><span className='text-warning'>$ 300</span> Per Day</p>
                <p>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                </p>
            </Card.Text>
            
        </Card.Body>
        </Card>
        </Col>
        <Col className='col-lg-3 col-12 col-md-6 col-sm-6 px-md-2 px-5'>
        <Card className='shadow-lg mb-5 bg-body-tertiary rounded rounded-5'>
      <Card.Img variant="top" src={require("./jb2.jpg")} style={{height:'35vh'}} className='rounded-top-5'/>
        <Card.Body>
            <Card.Text>
                <p className='mb-0'><span className='text-warning'>Power    .</span>1-12Passengers</p>
                <p className='mb-0'>Sun Chaser pontoon party boat</p>
                <p className='mb-0'><span className='text-warning'>$ 300</span> Per Day</p>
                <p>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-half"></i>
                </p>
            </Card.Text>
            
        </Card.Body>
        </Card>
        </Col>
      </Row>
    </Container>
    
  )
}

export default JustBooked


