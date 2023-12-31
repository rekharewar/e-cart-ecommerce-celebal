import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { delCart } from '../Redux/action'


const Cart = () => {

    const state = useSelector((state)=> state.handleCart)
    const [quantity,setQuantity]=useState(1)
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>", state)
    const dispatch = useDispatch()

    const handleClose = (item) => {
        dispatch(delCart(item))
    }
    const Increasebtn=()=>{
        if(quantity >= 1 ){ setQuantity (quantity + 1)}
    }
    const decreasebtn=()=>{
        quantity > 1 ? setQuantity (quantity-1): setQuantity(1)
    }

    const cartItems = (cartItem) => {
        return(
            <div className="px-4 my-5 bg-light rounded-3" key={cartItem.id}>
                <div className="container py-4">
                    <button onClick={()=>handleClose(cartItem)} className="btn-close float-end" aria-label="Close"></button>
                    <div className="row justify-content-center">
                        <div className="col-md-4">
                            <img src={cartItem.image} alt={cartItem.title} height="200px" width="180px" />
                        </div>
                        <div className="col-md-4">
                            <h3>{cartItem.title}</h3>
                            <p className="lead fw-bold">${cartItem.price *quantity}</p>
                            <div>

                            <button className="btn btn-primary " onClick={()=>Increasebtn()} >
                                <i className='fa fa-plus'></i>
                            </button>
                            <div className='input'> 
                                {quantity}
                            </div>
                            <button className="btn btn-danger" onClick={()=>decreasebtn()}>
                                <i className='fa fa-minus'></i>
                            </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    const emptyCart = () => {
        return (
            <div className="px-4 my-5 bg-light rounded-3 py-5">
                <div className="container py-4">
                    <div className="row">
                        <h3>Your Cart is Empty</h3>
                    </div>
                    </div>
                </div>
        );
    }

    const button = () => {
        return(
            <div className="container">
                <div className="row">
                    <NavLink to="/checkout" className="btn btn-outline-primary mb-5 w-25 mx-auto">Proceed To checkout</NavLink>
                </div>
            </div>
        );
    }

    return (
        <>
            {state?.length === 0 && emptyCart()}
            {state?.length !== 0 && state?.map(cartItems)}
            {state?.length !== 0 && button()}
        </>
    )
}
export default Cart