import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Image from 'react-bootstrap/Image';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';



const Menubar = () => {
  
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);



  const handleClose = () => setShow(false);
  const handleClose1 = () => setShow1(false);
  const handleClose2 = () => setShow2(false);


  const handleShow = () => setShow(true);
  const handleShow1 = () => setShow1(true);
  const handleShow2 = () => setShow2(true);



  return (
    <>
    
        <Navbar key={"md"} expand={"md"} className="bg-body-tertiary border border-secondary" sticky="top">
          <Container fluid>
            <Navbar.Brand href="#">
              <a href="/">
              <Image style={{width:'8rem',height:'10vh'}} src={require("./boat.png")} fluid />
              </a>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${"md"}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${"md"}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${"md"}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${"md"}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">Help</Nav.Link>
                  <Nav.Link href="/contact">Contact</Nav.Link>
                  <Nav.Link href="#action2" onClick={handleShow}>
                    Log In
                  </Nav.Link>
                  <Nav.Link href="#action3" onClick={handleShow1}>
                    Sign Up
                  </Nav.Link>
                 
                </Nav>
                <Form className="d-flex">
                  
                  <Button variant="outline-primary" onClick={handleShow2}>
                    <p className='mb-0 px-2 py-1' >
                       Become a Owner 
                    </p>
                  </Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>

        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        <Modal.Title>Log In</Modal.Title>

        </Modal.Header>
        <Modal.Body>
          <span variant="primary" class="d-block p-2 text-bg-primary border border-white rounded-3 text-center my-2">
          <i class="bi bi-facebook"></i>
          Log In with Facebook</span>
          <span variant="primary" class="d-block p-2 text-bg-light border border-primary rounded-3 text-center my-2">
          <i class="bi bi-google"></i>
            Log In with Google</span>
            <br />
            <p>&#8209;&#8209;&#8209;&#8209;&#8209;&#8209;&#8209;&#8209;&#8209;&#8209;&#8209;&#8209;&#8209;&#8209;&#8209;&#8209;&#8209;&#8209;&#8209;&#8209;&#8209;&#8209;&#8209;&#8209;&#8209;&#8209;&#8209;&#8209;&#8209;&#8209;&#8209;&#8209;&#8209;         OR        &#8209;&#8209;&#8209;&#8209;&#8209;&#8209;&#8209;&#8209;&#8209;&#8209;&#8209;&#8209;&#8209;&#8209;&#8209;&#8209;&#8209;&#8209;&#8209;&#8209;&#8209;&#8209;&#8209;&#8209;&#8209;&#8209;&#8209;&#8209;&#8209;&#8209;&#8209;</p>

            <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1"><i class="bi bi-envelope"></i></span>
            <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
            </div>
            <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon2"><i class="bi bi-lock"></i></span>
            <input type="text" class="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon2"/>
            </div>
            <div class="input-group mb-3 d-flex justify-content-between">
            <span><input type="checkbox"  />Remember Me </span><span>Forget Password</span>
            </div>

        </Modal.Body>
        <Modal.Footer>
          <h5>Dont have an account?<span>Sign Up</span></h5>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
         
        </Modal.Footer>
      </Modal>

      <Modal show={show1} onHide={handleClose1}>
        <Modal.Header closeButton>
        <Modal.Title>Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <span variant="primary" class="d-block p-2 text-bg-primary border border-white rounded-3 text-center my-2">
          <i class="bi bi-facebook"></i>
          Sign Up with Facebook</span>
          <span variant="primary" class="d-block p-2 text-bg-light border border-primary rounded-3 text-center my-2">
          <i class="bi bi-google"></i>
          Sign Up with Google</span>
            <br />
            <p>&#8209;&#8209;&#8209;&#8209;&#8209;&#8209;&#8209;&#8209;&#8209;&#8209;&#8209;&#8209;&#8209;&#8209;&#8209;&#8209;&#8209;&#8209;&#8209;&#8209;&#8209;&#8209;&#8209;&#8209;&#8209;&#8209;&#8209;&#8209;&#8209;&#8209;&#8209;&#8209;&#8209;         OR        &#8209;&#8209;&#8209;&#8209;&#8209;&#8209;&#8209;&#8209;&#8209;&#8209;&#8209;&#8209;&#8209;&#8209;&#8209;&#8209;&#8209;&#8209;&#8209;&#8209;&#8209;&#8209;&#8209;&#8209;&#8209;&#8209;&#8209;&#8209;&#8209;&#8209;&#8209;</p>
            <span variant="primary" class="d-block p-2 text-bg-primary border border-white rounded-3 text-center my-2">
            <i class="bi bi-envelope"></i>
          Sign Up with Email</span>
          <p>By signing up, I agree to Makent Boats's Terms of Service, Privacy Policy, Renter Refund Policy, and Owner Guarantee Terms.</p>


            

        </Modal.Body>
        <Modal.Footer>
          <h5>Already a member?<span>Log In</span></h5>
          
         
        </Modal.Footer>
      </Modal>


      <Modal show={show2} onHide={handleClose2}>
        <Modal.Header closeButton>

        </Modal.Header>
        <Modal.Body>
          <span variant="primary" class="d-block p-2 text-bg-primary border border-white rounded-3 text-center my-2">
          <i class="bi bi-facebook"></i>
          Log In with Facebook</span>
          <span variant="primary" class="d-block p-2 text-bg-light border border-primary rounded-3 text-center my-2">
          <i class="bi bi-google"></i>
            Log In with Google</span>
            <br />
            <p>&#8209;&#8209;&#8209;&#8209;&#8209;&#8209;&#8209;&#8209;&#8209;&#8209;&#8209;&#8209;&#8209;&#8209;&#8209;&#8209;&#8209;&#8209;&#8209;&#8209;&#8209;&#8209;&#8209;&#8209;&#8209;&#8209;&#8209;&#8209;&#8209;&#8209;&#8209;&#8209;&#8209;         OR        &#8209;&#8209;&#8209;&#8209;&#8209;&#8209;&#8209;&#8209;&#8209;&#8209;&#8209;&#8209;&#8209;&#8209;&#8209;&#8209;&#8209;&#8209;&#8209;&#8209;&#8209;&#8209;&#8209;&#8209;&#8209;&#8209;&#8209;&#8209;&#8209;&#8209;&#8209;</p>

            <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1"><i class="bi bi-envelope"></i></span>
            <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
            </div>
            <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon2"><i class="bi bi-lock"></i></span>
            <input type="text" class="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon2"/>
            </div>
            <div class="input-group mb-3 d-flex justify-content-between">
            <span><input type="checkbox"  />Remember Me </span><span>Forget Password</span>
            </div>

        </Modal.Body>
        <Modal.Footer>
          <h5>Dont have an account?<span>Sign Up</span></h5>
          <Button variant="secondary" onClick={handleClose2}>
            Close
          </Button>
         
        </Modal.Footer>
      </Modal>
    
    </>
   
  )
}

export default Menubar





