import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Item from '../Item/Item';

const ItemList=({products})=>{    
    return(
        <>
           {products.map(products=> <Item products={products} key={products.id}/>)                     
           }      
        </>
    )
}
export default ItemList;    