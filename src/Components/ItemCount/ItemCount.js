import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './ItemCount.css'

const ItemCount=({stock, initial,addItem, item, endShop})=>{
    const [counter, setCounter]= useState(initial);
        
    if (stock<1){
        return <h3>NO HAY STOCK</h3>
    }else if (stock>=1){
        const sumar=()=>{
            const newValue = counter+1;
            if(newValue <= stock){
                setCounter(newValue)
            }
        }    
        const subtract=()=>{
            const newValue = counter-1;
            if(newValue >= initial){
                setCounter(newValue)
            }
        }
        const Item=(item, counter)=>{
            addItem(item,counter)
            endShop()
        }                
        return(
            <>
                <div className='counters'>
                    <div className='counter'>
                        <button onClick={subtract} className="btn btn-danger">-</button>
                        <button onClick={sumar} className="btn btn-danger">+</button>
                    </div>
                    <div className='counter'>
                        <input type="text" value={counter}/>
                        <label>Cantidad</label>
                        <input type="range" value={counter} min={1} max={stock} onChange={(e)=>setCounter(e.target.value)}/>
                        <button className="btn btn-danger btnCount" onClick={()=>Item(item, counter)}>Añadir al Carrito</button>
                    </div>
                </div>
            </>
        )
    } 
}   
export default ItemCount;