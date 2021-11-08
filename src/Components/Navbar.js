import React from 'react'
import '../css/Navbar.css'
import Home from './Home';
import Pizza_menu from './Pizza_menu'
import  Adicionales from './Adicionales_menu'
import Contacto from './Contacto'
import Pedido from './Pedido'
import { 
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from "react-router-dom";

function Navbar(){
    return(
        <Router>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/"><h1><span>PIZZA</span> DELI</h1></Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                <li class="nav-item active">
                    <Link to="/Pizzas">Pizzas</Link>
                </li>
                <li class="nav-item">
                    <Link to="/Adicionales">Adicionales</Link>                </li>
                <li class="nav-item">
                    <Link to="/Contacto">Contacto</Link>
                </li>
                <li class="nav-item">
                    <Link to="/Pedidos">Status pedido</Link>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Carrito
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                </li>
                </ul>
            </div>
        </nav>
            {/* <nav className="navbar">
                <div className="logo">
                    <Link to="/"><h1><span>PIZZA</span> DELI</h1></Link>
                </div>
                <ul className="Menu_options">
                    <li>
                        <Link to="/Tacos">Pizzas</Link>
                    </li>
                    <li>
                        <Link to="/Hamburguesas">Adicionales</Link>
                    </li>
                    <li>
                        <Link to="/Contacto">Contacto</Link>
                    </li>
                    <li>
                        <Link to="/Pedidos">Status pedido</Link>
                    </li>
                    <div id="Cart">
                        <li id>
                            <a href>Carrito</a>
                        </li>
                    </div>
                </ul>
            </nav> */}
            <Switch>
                <Route path="/Pizzas">
                    <Pizza_menu/>
                </Route>
                <Route path="/Adicionales">
                    <Adicionales/>
                </Route>
                <Route path="/Contacto">
                    <section className="contacto">
                        <Contacto />
                    </section>
                </Route>
                <Route path="/Pedidos">
                    <Pedido/>
                </Route>
                <Route path="/">
                    <Home/>
                </Route> 
            </Switch>
        </Router>
    )
}

export default Navbar;
