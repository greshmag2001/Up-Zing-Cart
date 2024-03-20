import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        addToCart:(state,action)=>{
            const existingProduct = state.find(item=>item.id==action.payload.id)
            if (existingProduct) {
                const remainingProduct= state.filter(item=>item.id!=existingProduct.id)
                existingProduct.quantity++
                existingProduct.totalPrice = existingProduct.quantity* existingProduct.price
                state = [...remainingProduct,existingProduct]
            } else {
                state.push({...action.payload,quantity:1,totalPrice:action.payload.price})
            }
        },
        removeCartItem:(state,action)=>{
            return state.filter(item=>item.id!=action.payload)
        },
        incQuantity:(state,action)=>{
            const existingProduct = state.find(item=>item.id==action.payload)
            existingProduct.quantity++
            existingProduct.totalPrice = existingProduct.quantity* existingProduct.price
            const remainingProduct= state.filter(item=>item.id!=existingProduct)
            state = [...remainingProduct,existingProduct]
        },
        decQuantity:(state,action)=>{
            const existingProduct = state.find(item=>item.id==action.payload)
            
            existingProduct.quantity--
            existingProduct.totalPrice = existingProduct.quantity* existingProduct.price
            const remainingProduct= state.filter(item=>item.id!=existingProduct)
            state = [...remainingProduct,existingProduct]
        },
       emptyCart:(state,action)=>{
            return state=[]
       }     
        
    }
})

export const {addToCart, removeCartItem,incQuantity,decQuantity,emptyCart} = cartSlice.actions
export default cartSlice.reducer