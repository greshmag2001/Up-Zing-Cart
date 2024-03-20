import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link} from 'react-router-dom';
import { Badge } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { searchProduct } from '../REDUX/Slices/productSlice';

function Header({insideHome}) {
  const dispatch= useDispatch()
  const wishlistCount = useSelector(state=>state.wishlistReducer).length
  const cartCount= useSelector(state=>state.cartReducer).length
  return (
    <Navbar style={{zIndex:'10'}} expand="lg" className="bg-primary position-fixed top-0 w-100">
      <Container fluid className='d-flex'>
        <Navbar.Brand className=' ms-5 me-5 ' href="#"><Link to={'/'} className='fw-bolder text-white' style={{textDecoration:'none'}}><i class="fa-solid fa-truck-fast"></i> Up-Zing Cart</Link ></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className='pb-2' >
          <Nav
            className="ms-auto"
            style={{ maxHeight: '100px'}}
           
          >
            { insideHome &&
              <Nav.Link >
                <input onChange={(e)=>dispatch(searchProduct(e.target.value.toLowerCase()))} style={{width:'400px'}} className='form-control' type='text' placeholder='Search products here!!!'></input>
            </Nav.Link>}
            <Nav.Link  className='text-white '>
                <Link style={{textDecoration:'none'}} className='fw-bolder text-white' to={'/wishlist'}><i class="fa-solid fa-heart" style={{color: "#f70202"}}></i> WISHLIST <Badge bg='secondary'>{wishlistCount}</Badge></Link>
                </Nav.Link>
            <Nav.Link  className='text-white ms-3 me-3'>
                <Link style={{textDecoration:'none'}} className='fw-bolder text-white' to={'/cart' }><i class="fa-solid fa-cart-shopping" style={{color:"orange"}}></i> CART <Badge bg='secondary'>{cartCount}</Badge></Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header