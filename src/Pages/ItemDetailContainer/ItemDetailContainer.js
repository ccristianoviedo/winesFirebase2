import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import ItemDetail from '../../Components/ItemDetail/ItemDetail';
import { getItem } from '../../Components/mocks/getItem';
import { useParams } from 'react-router-dom';

const ItemDetailContainer=()=>{
    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(false);
    const {id}= useParams();    

    useEffect(() => {        
        setLoading(true)
        getItem(id)
        .then((snapshot) => setItem({...snapshot.data(), id: snapshot.id}))
        .catch((error)=>console.error(error + 'HA OCURRIDO UN ERROR!!'))
        .finally(()=>setLoading(false))    
    },[id])    
    return(
        <>        
            {loading? <h2>Cargando...</h2>:<ItemDetail item={item} />}            
        </>
    )
}
export default ItemDetailContainer;   