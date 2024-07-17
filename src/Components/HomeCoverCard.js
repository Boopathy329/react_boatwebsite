import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import Container from 'react-bootstrap/Container';


const HomeCoverCard = () => {
  return (

    <Container style={{ width: '100%' }} >
      <Row>
      <Card className='py-3 px-5 rounded-5 mt-3 d-lg-block d-md-none d-sm-none'>
      
      <Card.Body>
        <Card.Title className='fs-3 my-3'>Find Your Boat</Card.Title>
        <Card.Text>
            <Row className='my-4'>
                <Col className='d-none-xs'>
                <h5 className='text-primary'>Where</h5>
                <InputGroup className="mb-3">
                <Form.Control
                placeholder="Anywhere"
                aria-label="Anywhere"
                aria-describedby="basic-addon1"
                className='py-2'
                />
                </InputGroup>

                </Col>
                <Col className='d-none-xs'>
                <h5 className='text-primary'>Start & End Trip</h5>
                <InputGroup className="mb-3">
                <Form.Control
                placeholder="Anywhere"
                aria-label="Anywhere"
                aria-describedby="basic-addon1"
                className='py-2'
                />
                </InputGroup>
                </Col>
            </Row>

            <Row className='my-2'>
                <Col>
                <h5 className='text-primary'>Captain</h5>
                <Dropdown style={{width:'100%'}}>
                    <Dropdown.Toggle variant="white" id="dropdown-basic">
                        Captain?
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                </Col>
                <Col>
                <h5 className='text-primary'>Passanger</h5>
                <Dropdown style={{width:'100%'}}>
                    <Dropdown.Toggle variant="white" id="dropdown-basic">
                        1Passanger
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                </Col>
            </Row>
        </Card.Text>
        <Button variant="warning" className='py-2 px-5 text-white'>Search</Button>
      </Card.Body>
    </Card>
      </Row>
    </Container>

    
  )
}

export default HomeCoverCard


