import React, { useContext } from 'react';
import './CartWidget.css'
import cartImg from'../Assets/img/cart.jpg'
import CartContext from '../../Context/cart-context';
import { Link } from 'react-router-dom';

const CartWidget=()=>{
    const{items}=useContext(CartContext);
    let itemsCart=0;

    items.map((item)=>itemsCart = itemsCart + item.qty)
    
    if(items.length>=1){
    return(
        <>
            <Link to='/Cart'>
                <img src={cartImg} alt='imagen' className='cartImg'/>
                <label className='CartCounter'>{itemsCart}</label>
            </Link>
        </>
    )
    } else 
        return(
            <>  
                <Link to='/Cart'>
                    <img src={cartImg} alt='imagen' className='cartImg'/>
                </Link>
            </>
        )
}
export default CartWidget;