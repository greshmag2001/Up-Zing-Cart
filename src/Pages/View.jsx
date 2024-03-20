import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import { Button, Col,Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addWishlistItem } from '../REDUX/Slices/wishlistSlice'
import { addToCart } from '../REDUX/Slices/cartSlice'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function View() {
    const cart= useSelector(state=>state.cartReducer)
    const wishList = useSelector(state=>state.wishlistReducer)
    const dispatch = useDispatch()
    const [product,setProduct] = useState({})

    const {id}= useParams()
    console.log(id);
    useEffect(()=>{
        if(sessionStorage.getItem("allProducts")){
            const allProducts= JSON.parse(sessionStorage.getItem("allProducts"))
            setProduct(allProducts.find(item=>item.id==id))
        }
    
    },[])
    console.log(product);
    const handleWishlist=(product)=>{
        if(wishList?.includes(product)){
            toast.warning("Item already in your WishList !!!")
        }
        else{
            toast.success('Item added to your wishlist !')
            dispatch(addWishlistItem(product))
        }
    }
    const handleCart=(product)=>{
        const existingProduct = cart?.find(item=>item.id==product.id)
        if (existingProduct) {
            dispatch(addToCart(product))
            toast.success('Products added to your Cart!!!')
        } else {
            dispatch(addToCart(product))
        }
    }

  return (
    <>
        <Header></Header>
        <div className='container' style={{ marginTop: '150px',height:'70vh' }}>
            
            <Row className='mb-5 '>
                <Col className='mb-5 p-4 ' sm={12} md={12} lg={6} >
                    <div>
                        <img className='image-fluid' style={{height:'280px',width:'400px'}} src={product?.thumbnail}></img>
                    </div>

                </Col>
                <Col className='mb-5 p-4' sm={12} md={12} lg={6} >
                    <Row>
                        <p>PID: {product?.id}</p>
                        <h2>{product?.title}</h2>
                        <h4 style={{color:'green'}}>${product?.price}</h4>
                        <h5><b>Description</b> : {product?.description}</h5>
                    </Row>
                    <Row className='mt-3'>
                        <Col onClick={()=>handleWishlist(product)} className=' p-4 ' sm={6} md={6} lg={6}><Button  ><i class="fa-solid fa-heart" style={{color: "#f70202"}}></i> WISHLIST</Button></Col>
                        <Col onClick={()=>handleCart(product)} className=' p-4 ' sm={6} md={6} lg={6}><Button ><i class="fa-solid fa-cart-shopping" style={{color: "orange"}}></i> Add to CART</Button></Col>
                    </Row>

                </Col>
            </Row>
        </div>
        <ToastContainer theme='colored' position='top-center' autoClose={3000}></ToastContainer>
    </>
  )
}

export default View