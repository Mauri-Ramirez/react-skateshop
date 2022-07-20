import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';



function App() {
 return(
<>
 <NavBar></NavBar>
 <ItemDetailContainer greating="Detalles"/>
 {/*<ItemListContainer greating="Contador"/>*/}

 

 </>
 );
}

export default App;
