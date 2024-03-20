import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { decQuantity, emptyCart, incQuantity, removeCartItem } from '../REDUX/Slices/cartSlice'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function Cart() {
  const navigate= useNavigate()
  const dispatch = useDispatch()
  const cartItems = useSelector(state => state.cartReducer)
  const [cartTotal,setCartTotal]= useState(0)
  useEffect(()=>{
    if (cartItems?.length>0) {
      setCartTotal(cartItems?.map(item=>item.totalPrice).reduce((t1,t2)=>t1+t2))
      
    } else {
      setCartTotal(0)
    }

  },[cartItems])
  const handleEmtyCart=()=>{
    alert('Clear your Cart?!')
    dispatch(emptyCart())
  }

  const handleDecQuantity=(product)=>{
    if(product.quantity>1){
      dispatch(decQuantity(product.id))
    }
    else{
      alert('Remove item from Cart?')
      dispatch(removeCartItem(product.id))
    }
  }
  const handleCheckOut=()=>{
    dispatch(emptyCart())
    toast.success("Order placed Successfully. Thank You for purchasing with Us!")
    setTimeout(()=>{
      navigate('/')
    },2000)
  }

  return (
    <>
      <Header></Header>
      <div className='container' style={{ marginTop: '130px' }}>
        {cartItems?.length > 0 ?
          <div className='pt-3'>
            <h2> Cart Summary</h2>
            <div className='row mt-5'>
              <div className='col-lg-8'>
                <table className='table'>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Title</th>
                      <th>Image</th>
                      <th>Quantity</th>
                      <th>Price</th>
                      <th>...</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems?.map((product,index)=>(
                      <tr>
                      <td>{index+1}</td>
                      <td>{product?.title}</td>
                      <td><img width={'60px'} height={"50px"} src={product?.thumbnail} alt=''></img></td>
                      <td>
                        <div className='d-flex'>
                          <button onClick={()=>handleDecQuantity(product)} className='btn fw-bolder'>-</button>
                          <input value={product.quantity} style={{ width: '50px' }} type='text' placeholder='1' className='form-control' readOnly></input>
                          <button onClick={()=>dispatch(incQuantity(product?.id))} className='btn fw-bolder'>+</button>
                        </div>
                      </td>
                      <td>${product.totalPrice}</td>
                      <td>
                        <button onClick={()=>dispatch(removeCartItem(product?.id))} className='btn'><i className="fa-solid fa-trash text-danger"></i></button>
                      </td>
                    </tr>))}
                  </tbody>
                </table>
                <div className="float-end my-5">
                  <button className='btn btn-primary' onClick={()=>handleEmtyCart()} >Empty Cart</button>
                  <Link style={{ backgroundColor: 'orangered', color: 'white' }} className='btn  ms-5' to={'/'}>Shop more</Link>
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='shadow border rounded p-4 ms-5 mb-4'>
                  <h5>Total Items: <b className='text-primary '>{cartItems?.length}</b></h5>
                  <h5>Total Amount: <b style={{ color: 'green' }}> $ {cartTotal}</b></h5>
                  <div className="d-grid mt-4">
                    <button onClick={handleCheckOut} className='btn ' style={{ backgroundColor: 'orangered', color: 'white' }}>Check Out</button>
                  </div>
                </div>
              </div>

            </div>
          </div>
          : <div style={{ height: '70vh' }} className='w-100 d-flex justify-content-center align-items-center flex-column'>
            <img className='img-fluid ' style={{ height: '60%' }} src='https://i.postimg.cc/YCStD1CT/emptycart-removebg-preview.png' alt=''></img>
            <b>Your Cart is empty !</b>
          </div>
        }

      </div>
      <ToastContainer theme='colored' position='top-center' autoClose={3000}></ToastContainer>

    </>
  )
}

export default Cart