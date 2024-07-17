import React from 'react'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const ExploreWorld = () => {
  return (
    <Container className='d-md-flex bg-success text-dark bg-opacity-10' >
    <Row className='row-cols-lg-1 row-cols-md-1 d-flex flex-column'> 
      <Col className='col-12 my-4 py-5'>
        <Row>
          <Col className='col-12 my-5 col-sm-12'>
          <h3 className='display-3'>Explore</h3>
          <h3 className='display-3'>the world</h3>
          </Col>
        </Row>
      
      <h6>See where people all</h6>
      <h6>travelling all over the world</h6>
      
      </Col>
      <Col className='col-12 my-3'>
      <Card  className='shadow-lg mb-5 bg-body-tertiary rounded rounded-5'>
      <Card.Img variant="top" src={require("./explore1.jpg")} style={{height:'60vh'}} className='rounded-top-5'/>
        <Card.Body>
        <h1>Miami</h1>
            
        </Card.Body>
        </Card>
      </Col>
    </Row>


    {/* <Row className='row-cols-lg-1 row-cols-md-1 d-flex flex-column'>
        <Col>1 of 2</Col>
      </Row> */}




    <Row className='row-cols-lg-1 row-cols-md-1 d-flex flex-column'> 
    
      
      <Col className='col-12 px-5 my-3'>
      <Card  className='shadow-lg mb-5 bg-body-tertiary rounded rounded-5'>
      <Card.Img variant="top" src={require("./explore3.jpg")} style={{height:'70vh'}} className='rounded-top-5'/>
      <Card.Img variant="top" src={require("./explore2.avif")} style={{height:'70vh'}} className='rounded-bottom-5'/>

        <Card.Body>
           <h2>California</h2>
            
        </Card.Body>
        </Card>
      </Col>
    </Row>

    <Row className='row-cols-lg-1 row-cols-md-1 d-flex flex-column'> 
    <Col className='col-12'>
      <Card  className='shadow-lg mb-5 bg-body-tertiary rounded rounded-5'>
      <Card.Img variant="top" src={require("./explore4.jpg")} style={{height:'60vh'}} className='rounded-top-5'/>
        <Card.Body className='py-3'>
        <h1>Florida</h1>
            
        </Card.Body>
        </Card>
      </Col>
      <Col className='col-12'>
      <Card  className='shadow-lg mb-5 bg-body-tertiary rounded rounded-5'>
      <Card.Img variant="top" src={require("./explore5.webp")} style={{height:'60vh'}} className='rounded-top-5'/>
        <Card.Body className='py-3'>
        <h2>Los Angels</h2>
            
        </Card.Body>
        </Card>
      </Col>
    </Row>
    
  </Container>
   

  )
}

export default ExploreWorld



