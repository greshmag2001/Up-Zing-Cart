import React from 'react'
import { Col,Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='bg-primary text-white p-3 mt-3 sticky-footer' style={{position:'sticky',top:'100%'}}>
        <Row>
            <Col className='col-lg-4 col-md-4 col-sm-4 my-4'>
                <h4><i class="fa-solid fa-truck-fast"></i> Up-Zing Cart</h4>
                <p>Designed & built with all the love in the world <br></br>
                    by the Up-Zing team with the help of our contributers.
                    
                </p> 
                    <p>Code licensed by Up-Zing, docs CC BY 3.0.</p>
                    
                    
                    <p>Currently v1.0.0</p>
                
            </Col>
            <Col className='col-lg-2 col-md-2 col-sm-2 my-4'>
                <h4>Links</h4>
                <Link to={'/'} style={{textDecoration:'none'}} className=' text-white'>Home</Link><br></br>
                <Link to={'/cart'} style={{textDecoration:'none'}} className=' text-white'>Cart</Link><br></br>
                <Link to={'/wishlist'} style={{textDecoration:'none'}} className=' text-white'>Wishlist</Link>

            </Col>
            <Col className='col-lg-2 col-md-2 col-sm-2 my-4'>
                <h4>Guides</h4>
                    <p>React</p>
                    <p>React Bootstrap</p>
                    <p>Routing</p>
            </Col>
            <Col className='col-lg-4 col-md-4 col-sm-4 my-4 '>
                <h4>Contact Us</h4>
                <input type='text' placeholder=' Enter your Mail' className='p-1 container w-75' style={{borderRadius:'6px'}}></input> <button style={{borderRadius:'6px',color:'white',backgroundColor:'orangered'}}  className='p-1 ms-1'>Send</button>
                <Row className='p-4  '>
                    <Col><i class="fa-brands fa-linkedin-in" ></i></Col>
                    <Col><i class="fa-brands fa-twitter"></i></Col>
                    <Col><i class="fa-brands fa-facebook-f"></i></Col>
                    <Col><i class="fa-solid fa-envelope"></i></Col>
                    <Col><i class="fa-brands fa-tiktok"></i></Col>
                    <Col><i class="fa-brands fa-github"></i></Col>
                </Row>
            </Col>
        </Row>
        <Row className='text-center text-seconda'>
            <p>Copyright @ 2023 Up-Zing Cart. Built with React</p>
        </Row>
    </div>
  )
}

export default Footer