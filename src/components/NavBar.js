import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';
import CartWidget from './CartWidget';



function NavBar() {
  return (
    <div>
      <header>
        
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/">SKATESHOP-ONLINE</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
        <NavLink className="nav-link" to="/category/Tablas">Tablas</NavLink>
        <NavLink className="nav-link" to="/category/Trucks">Trucks</NavLink>
        <NavLink className="nav-link" to="/category/Ruedas">Ruedas</NavLink>
        
        
      </div>
      <NavLink className="nav-link" to="/cart"><CartWidget/></NavLink>
        
    </div>
    
  </div>
</nav>

      </header>
      
    </div>
  );
}

export default NavBar;