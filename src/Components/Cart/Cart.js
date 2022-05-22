import React, { useContext, useState} from 'react'
import CartContext from '../../Context/cart-context'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Cart.css'
import { useNavigate } from 'react-router-dom';
import ItemCart from '../ItemCart/ItemCart'
import { Link } from 'react-router-dom'
import {addDoc, collection, getFirestore } from 'firebase/firestore'

const generatorOrder= async(newOrder)=>{
    try {
        const db=getFirestore()
        const col= collection(db,'orders')
        const order= await addDoc(col, newOrder)
        console.log('order',order.id)
    } catch (error) {
        console.log('error', error)
    }
}
const Cart = () => {
    const navigate = useNavigate()
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [mail, setMail] = useState("");
    const {items, clearItems, totalPrice, totalCount}=useContext(CartContext)

    const onHandlerSubmit=(e)=>{
        e.preventDefault()
        
        if(!name || !phone || !mail){
            alert('Por favor llene el Formulario')
            return false
        }
        const newOrder={
            buyer:{
                name,
                phone,
                mail
            },
            items:items,
            totalCount:totalCount(),
            Date:new Date()
        } 
        generatorOrder(newOrder)
        navigate(`/orders`)      
    }   
    
    if(items.length>=1){
        return (
            <>
                <div className='cart'>
                    <div className='cartElement'>
                        {
                            items.map((item)=>
                                <ItemCart key={item.id} item={item}/>
                            )
                        }
                    </div>
                    <div className='btnCancel'>
                        <button className="btn btn-danger btnEnd" onClick={()=>clearItems()}>BORRAR TODOS LOS PRODUCTOS</button>
                        <p>PRECIO TOTAL: $ {totalPrice()}</p>
                        <p>CANTIDAD TOTAL: {totalCount()} UNIDADES</p>
                    </div>
                    <div className='btnCancel'>
                        <form onSubmit={onHandlerSubmit}>
                            <label htmlFor='name'>DATOS COMPRADOR</label>
                            <input 
                                type="text" 
                                placeholder='Escriba su nombre'
                                 value={name}
                                onChange={(e)=>setName(e.target.value)}
                            />
                            <input 
                                type="number" 
                                placeholder='Escriba su telefono'
                                 value={phone}
                                onChange={(e)=>setPhone(e.target.value)}
                            />                                
                            <input 
                                type="mail"
                                placeholder='Escriba su mail'
                                value={mail}
                                onChange={(e)=>setMail(e.target.value)}
                            />
                            <input type="submit" value='Comprar' className="btn btn-danger" />
                        </form>
                    </div>
                </div>
            </>
        )
    } else return( 
        <>  <h3>NO HAY PRODUCTOS EN EL CARRITO</h3> 
            <p className='shop'><Link to='/'>IR A COMPRAR</Link></p>
        </>
    )
}
export default Cart;