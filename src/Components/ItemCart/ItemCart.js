import React, { useContext} from 'react'
import CartContext from '../../Context/cart-context'
import './ItemCart.css'

const ItemCart=({item})=>{
    const {removeItem}=useContext(CartContext)
    
    return (
        <div className='itemCart'>
            <img src={item.img} alt={item.name} className='imgPr'/>        
            <p>BODEGA:{item.name}</p>
            <p>PRECIO: $ {item.price}</p>
            <p>CANTIDAD:    {item.qty}</p>
            <button className="btn btn-info" onClick={()=>removeItem(item.id)}> X </button>
        </div>
    ) 
}
export default ItemCart;