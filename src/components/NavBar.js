
import 'bootstrap/dist/css/bootstrap.min.css';

function NavBar() {
  return (
    <div>
      <header>
        
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">SKATESHOP-ONLINE</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active" aria-current="page" href="#">Home</a>
        <a className="nav-link" href="#">Tablas</a>
        <a className="nav-link" href="#">Trucks</a>
        <a className="nav-link" href="#">Ruedas</a>
      </div>
    </div>
  </div>
</nav>

      </header>
    </div>
  );
}

export default NavBar;