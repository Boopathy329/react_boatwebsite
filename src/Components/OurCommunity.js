import React from 'react'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const OurCommunity = () => {
  return (
    <Container className='d-md-flex bg-success text-dark bg-opacity-10' >
    <Row className='row-cols-lg-1 row-cols-md-1 d-flex flex-column'> 
        
      
      <Col className='col-12 my-5 py-5'>
      <Card  className='shadow-lg mb-5 bg-body-tertiary rounded rounded-5'>
      <Card.Img variant="top" src={require("./explore1.jpg")} style={{height:'50vh'}} className='rounded-top-5'/>
        <Card.Body>
        <h1>Garry & Lianne</h1>
        <p>Across an ocean or across town, garry & Lianne are always in search in local experiences</p>
            
        </Card.Body>
        </Card>
      </Col>
    </Row>


    {/* <Row className='d-flex flex-column'>
        <Col>1 of 2</Col>
      </Row> */}




    <Row className='row-cols-lg-1 row-cols-md-1 d-flex flex-column'>
    <Col className='col-12 my-5'>
        <Row>
          <Col className='col-12 '>
          <h2 className='display-3 fw-bold'>Our</h2>
          <h3 className='display-3 fw-bold'>Community</h3>
          </Col>
        </Row>
      
      <h6>See where people all</h6>
      <h6>travelling all over the world</h6>
      
      </Col> 
    
      
      <Col className='col-12'>
      <Card  className='shadow-lg mb-5 bg-body-tertiary rounded rounded-5'>
      <Card.Img variant="top" src={require("./explore3.jpg")} style={{height:'50vh'}} className='rounded-top-5'/>

        <Card.Body>
        <h1>Boats for..</h1>
        <p>Feel as your boat. wherever your work takes you
             Get your team on Makents</p>            
        </Card.Body>
        </Card>
      </Col>
    </Row>

    <Row className='row-cols-lg-1 row-cols-md-1 d-flex flex-column'> 
    <Col className='col-12'>
      <Card  className='shadow-lg mb-5 bg-body-tertiary rounded rounded-5'>
      <Card.Img variant="top" src={require("./explore4.jpg")} style={{height:'50vh'}} className='rounded-top-5'/>
        <Card.Body>
        <h1>Patricia</h1>
        <p>A professional photographer, patricia loves helping renters explore Shanghai's arts scene</p>            
        </Card.Body>
        </Card>
      </Col>
      
    </Row>
    
  </Container>
   

  )
}

export default OurCommunity



