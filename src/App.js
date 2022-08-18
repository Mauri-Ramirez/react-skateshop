import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './components/Cart';
import CartContextProvider from "./components/CartContext"



function App() {
 return(
<CartContextProvider>    
<BrowserRouter>
 <NavBar/>
 <Routes>
    <Route path='/' element={<ItemListContainer/>} />
    <Route path='/category/:id' element={<ItemListContainer/>} />
    <Route path="/cart" element={<Cart />} />
    <Route path='/item/:detailId' element={<ItemDetailContainer/>} />
 </Routes>   
 </BrowserRouter>
 </CartContextProvider>
 );
}

export default App;
