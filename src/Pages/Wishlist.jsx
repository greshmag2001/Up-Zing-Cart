import React from 'react'
import Header from '../Components/Header'
import { Col, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { removeWishlistItem } from '../REDUX/Slices/wishlistSlice';
import { addToCart } from '../REDUX/Slices/cartSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function Wishlist() {
    const cart= useSelector(state=>state.cartReducer)
    const wishList = useSelector(state => state.wishlistReducer)
    const dispatch = useDispatch()

    const handleCart=(product)=>{
        const existingProduct = cart?.find(item=>item.id==product.id)
        if (existingProduct) {
            dispatch(addToCart(product))
            dispatch(removeWishlistItem(product?.id))
            toast.success('Products added to your Cart!!!')
        } else {
            dispatch(addToCart(product))
            dispatch(removeWishlistItem(product?.id))
            
        }
    }


    return (
        <>
            <Header></Header>
            <div className='container' >
                {wishList?.length > 0 ?
                    <Row style={{ marginTop: '150px' }}>
                        {wishList?.map(product => (
                            <Col className='mb-5 ' sm={12} md={6} lg={4} xl={3}>
                                <Card className='shadow rounded' style={{ width: '18rem' }}>
                                    <Card.Img style={{ height: '180px' }} variant="top" src={product?.thumbnail} />
                                    <Card.Body>
                                        <Card.Title>{product?.title}</Card.Title>
                                        <div className='d-flex justify-content-between '>
                                            <button onClick={()=>dispatch(removeWishlistItem(product?.id))} className='btn'><i className="fa-solid fa-heart-circle-xmark text-danger"></i></button>
                                            <button onClick={()=>handleCart(product)} className='btn'><i class="fa-solid fa-cart-plus" style={{ color: "orange" }}></i></button>

                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>

                        ))}
                    </Row> :
                    <div style={{ height: '70vh', marginTop: '100px' }} className='w-100 d-flex justify-content-center align-items-center flex-column'>
                        <img className='img-fluid ' style={{ height: '70%' }} src='https://i.postimg.cc/CKxXggBK/wishlist-icon-in-comic-style-like-document-cartoon-illustration-on-white-isolated-background-favorit.png' alt=''></img>
                        <b>Your Wishlist is empty !</b>

                    </div>
                    
                }

            </div>
            <ToastContainer theme='colored' position='top-center' autoClose={3000}></ToastContainer>
        </>
    )
}

export default Wishlist