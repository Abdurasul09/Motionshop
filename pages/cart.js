import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getCart} from "../utils/redux/actions/cartAction";
const Cart = () => {
    const dispatch = useDispatch()
    const {cart} = useSelector(state => state.cart)
    console.log(cart)
    useEffect(() => {
        dispatch(getCart(JSON.parse(localStorage.getItem("cartItem"))))
    }, [])
    return (
        <div>
            {cart ?
                (cart?.products?.map((item, id) => (
                    <div key={item.id}>
                        <img src={item.image} alt=""/>
                        <span>{item.description}</span>
                    </div>
                ))) : ('net')}
        </div>
    );
};

export default Cart;