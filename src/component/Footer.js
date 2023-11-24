
import "./footer.css";

import React from 'react'

import { Container, Row, Col } from 'react-bootstrap'
import { NavLink } from "react-router-dom";


const Footer = () => {
 
  const scrollToTop = () => {
    setTimeout(() => {
      window.scrollTo(0, 0);
      }, 100);
  }

  return (
    <>
      <footer className='footer '>
        <div className='footer-bg desktop'></div>
        <Container fluid className='px-5 desktop'>

          <Row className='pt-5p pb-5'>
            <Col className='col-md-10 mx-auto'>
              <div className="footer-hr fill-width"></div>

              <Container>
             
                <Row className='pt-5 pb-3'>
                  <Col className="col-md-1"></Col>
                  <Col className="col-md-10">
                    <ul className='footer-menu align-middle'>
                    <li><NavLink onClick={scrollToTop} to='/about'>About</NavLink></li>
                    <li><NavLink onClick={scrollToTop} to='/services'>Services</NavLink></li>
                    <li><NavLink onClick={scrollToTop} to='/contact'>Contact</NavLink></li>
                      
                    </ul>
                  </Col>
                  <Col className="col-md-1"></Col>
                </Row>
              </Container>

            </Col>
          </Row>
        </Container>

  
      </footer>




    </>
  )
}

export default Footer
