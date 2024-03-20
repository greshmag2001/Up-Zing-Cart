import React, { useEffect, useState } from 'react'
import { Col, Row, Spinner } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import Header from '../Components/Header';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../REDUX/Slices/productSlice';


function Home() {
    const dispatch= useDispatch()
    const {allProducts,error,loading}=useSelector(state=>state.productReducer)
    console.log(allProducts,error,loading);

    const [currentPage,setCurrentPage] = useState(1)
    const productsPerPage= 8
    const totalPages= Math.ceil(allProducts?.length/productsPerPage)
    const lastProductIndex= currentPage* productsPerPage
    const firstProductIndex= lastProductIndex- productsPerPage
    const visibleCards= allProducts?.slice(firstProductIndex,lastProductIndex)


    useEffect(()=>{
        dispatch(fetchProducts())
    },[])

    const navigateToNext=()=>{
        if(currentPage!=totalPages){
            setCurrentPage(currentPage+1)
        }
    }
    const navigateToPrev=()=>{
        if(currentPage!=1){
            setCurrentPage(currentPage-1)
        }
    }

    return (
        <>
            <Header insideHome></Header>
            <div className='container' style={{ marginTop: '100px' }}>
                { loading?<div className='mt-5 mb-5 text-center text-primary fw-bolder p-5'>  <h4><Spinner animation="border" variant="primary" /> Loading...</h4></div>
                :
                <Row>
                    {allProducts?.length>0?
                    visibleCards?.map(product=>(
                        <Col className='p-4' sm={12} md={6} lg={4} xl={3}>
                        <Card className='shadow rounded ' style={{ width: '18rem' }}>
                            <Card.Img style={{ height: '180px' }} variant="top" src={product?.thumbnail} />
                            <Card.Body>
                                <Card.Title>{product?.title.slice(0,24)}</Card.Title>
                                <div className='text-center '><Link to={`/view/${product?.id}`} variant="primary" style={{ textDecoration: 'none', color: 'orangered' }}>View more</Link></div>
                            </Card.Body>
                        </Card>
                    </Col>
                    ))
                    :
                    <div className='mt-5 mb-5 text-primary text-center fw-bolder p-5 fs-4'>Oops!..No products match your search!!</div>
                    }
                </Row>}
                <div className="d-flex justify-content-center align-items-center mt-5 mb-5">
                    <span onClick={navigateToPrev} style={{cursor:'pointer'}}> <i className="fa-solid fa-backward me-5"></i> </span>
                    <span className='fw-bolder'> {currentPage} of {totalPages}</span>
                    <span onClick={navigateToNext} style={{cursor:'pointer'}}> <i className="fa-solid fa-forward ms-5"></i> </span>
                </div>
            </div>
        </>
    )
}

export default Home