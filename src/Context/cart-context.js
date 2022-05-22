import{ createContext } from "react";
import { useState } from "react";

const CartContext = createContext([])

export const CartProvider = ({children}) => {
    const [items, setItems] = useState([]);
    
    const isInCart=(id)=>{
      const found=items.find(item=> item.id===id)
      return found
    }
    const addItem=(item, counter)=>{
      isInCart(item.id)
      ?
      setItems(items.map((itemInCart)=>{
      if(itemInCart.id === item.id){
        itemInCart.qty += counter}
      return itemInCart
      }))
      :
      setItems([...items,{...item, qty:counter}])
      
    }
    const removeItem=(id)=> {
      setItems(items.filter(item=>item.id!==id))
    }
    const clearItems=()=>{
      setItems([])
    }
    const totalPrice=()=>{
      return items.reduce((total, item)=>total + item.qty * item.price,0)
    }
    const totalCount=()=>{
      return items.reduce((total, item)=>total + item.qty,0)
    }
    return (
    <CartContext.Provider value={{
      items,
      addItem,
      removeItem,
      clearItems,
      totalPrice,
      totalCount,
      }}>
        {children}
    </CartContext.Provider>
  )
}
export default CartContext;