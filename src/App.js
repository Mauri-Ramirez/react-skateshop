import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './components/Cart';



function App() {
 return(
<BrowserRouter>
 <NavBar/>
 <Routes>
    <Route path='/' element={<ItemListContainer/>} />
    <Route path='/category/:id' element={<ItemListContainer/>} />
    <Route path="/cart" element={<Cart />} />
    <Route path='/item/:detailId' element={<ItemDetailContainer/>} />
 </Routes>   
 {/*<ItemDetailContainer greating="Detalles"/>*/}
 {/*<ItemListContainer greating="Contador"/>*/}
 </BrowserRouter>
 );
}

export default App;
