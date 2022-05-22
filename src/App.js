import { Route, Routes } from 'react-router-dom';
import './App.css';
import ItemListContainer from './Pages/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Pages/ItemDetailContainer/ItemDetailContainer';
import NavBar from './Components/NavBar/NavBar';
import NameStore from './Components/NameStore/NameStore';
import { CartProvider } from './Context/cart-context';
import Cart from './Components/Cart/Cart';
import Orders from './Components/Orders/Orders';

function App() {
  return (
    <div className="App">
      <CartProvider>
      <header className="App-header">
        <NameStore/>
        <NavBar/>
      </header>      
        <Routes>
          <Route path='/'element={<ItemListContainer/>}/>
          <Route path='category/:category' element={<ItemListContainer/>}/>             
          <Route path='item/:id' element={<ItemDetailContainer/>}/>
          <Route path='/Cart' element={<Cart/>}/>
          <Route path='/Orders' element={<Orders/>}/>                       
        </Routes>
        </CartProvider>      
    </div>
  );
}
export default App;