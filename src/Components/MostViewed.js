import React from 'react'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';


const MostViewed = () => {
  return (
    <Container className='pt-2' >
        <h2>MostViewed</h2>
        

    <div id="carouselExampleDark2" class="carousel slide">
  
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
    <Row className='my-5'>
        <Col className='col-lg-3 col-12 col-md-6 col-sm-6 px-md-2 px-5'>
        <Card  className='shadow-lg mb-5 bg-body-tertiary rounded rounded-5'>
      <Card.Img variant="top" src={require("./rc1.jpg")} style={{height:'35vh'}} className='rounded-top-5'/>
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
      <Card.Img variant="top" src={require("./rc2.jpg")} style={{height:'35vh'}} className='rounded-top-5'/>
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
      <Card.Img variant="top" src={require("./rc3.png")} style={{height:'35vh'}} className='rounded-top-5'/>
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
      <Card.Img variant="top" src={require("./rc4.jpg")} style={{height:'35vh'}} className='rounded-top-5'/>
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
      </Row>  
      
    </div>
    <div class="carousel-item" data-bs-interval="2000">
    <Row className='my-5'>
        <Col className='col-lg-3 col-12 col-md-6 col-sm-6 px-md-2 px-5'>
        <Card  className='shadow-lg mb-5 bg-body-tertiary rounded rounded-5'>
      <Card.Img variant="top" src={require("./rc2.jpg")} style={{height:'35vh'}} className='rounded-top-5'/>
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
      <Card.Img variant="top" src={require("./rc3.png")} style={{height:'35vh'}} className='rounded-top-5'/>
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
      <Card.Img variant="top" src={require("./rc4.jpg")} style={{height:'35vh'}} className='rounded-top-5'/>
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
      <Card.Img variant="top" src={require("./rc5.png")} style={{height:'35vh'}} className='rounded-top-5'/>
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
      </Row> 
     
    </div>
    <div class="carousel-item">
    <Row className='my-5'>
        <Col className='col-lg-3 col-12 col-md-6 col-sm-6 px-md-2 px-5'>
        <Card  className='shadow-lg mb-5 bg-body-tertiary rounded rounded-5'>
      <Card.Img variant="top" src={require("./rc3.png")} style={{height:'35vh'}} className='rounded-top-5'/>
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
      <Card.Img variant="top" src={require("./rc4.jpg")} style={{height:'35vh'}} className='rounded-top-5'/>
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
      <Card.Img variant="top" src={require("./rc5.png")} style={{height:'35vh'}} className='rounded-top-5'/>
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
      <Card.Img variant="top" src={require("./rc6.jpg")} style={{height:'35vh'}} className='rounded-top-5'/>
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
      </Row> 
     
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark2" data-bs-slide="prev">
    <span class="carousel-control-prev-icon primary" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark2" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</Container>


  )
}

export default MostViewed
