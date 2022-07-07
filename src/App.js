import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';



function App() {
 return(
    <>
 <NavBar></NavBar>
 <ItemListContainer greeting="hola"/>

 

 </>
 );
}

export default App;
