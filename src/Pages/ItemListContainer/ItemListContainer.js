import React from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../../Components/ItemList/ItemList';
import '../ItemListContainer/ItemListContainer.css';
import { useEffect, useState } from 'react';
import { getProducts } from '../../Components/mocks/getProducts';

const ItemListContainer=()=>{
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const{category} = useParams();  

    useEffect(() => {
        setLoading(true)
        getProducts(category).then(snapshot => {setProducts(snapshot.docs.map(doc =>{
            return {...doc.data(), id: doc.id}}))})
        .catch((error)=>console.error(error + 'HA OCURRIDO UN ERROR!!'))
        .finally(()=>setLoading(false))             
    },[category])   
   
    return (
        <>
            <h3>NUESTRO CATALOGO DE VINOS</h3>
            <div className='itemsLanding'>                
                {loading ? <h2>Cargando.....</h2>:<ItemList products={products}/>}
            </div>
        </>
    )
}
export default ItemListContainer;  