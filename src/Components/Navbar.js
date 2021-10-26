import React from 'react'
import '../css/Navbar.css'
import Home from './Home';
import Taco_menu from './Taco_menu'
import Hamburguer_menu from './Hamburguer_menu'
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
            <nav className="navbar">
                <div className="logo">
                    <Link to="/"><h1><span>TACO</span> DELI</h1></Link>
                </div>
                <ul className="Menu_options">
                    <li>
                        <Link to="/Tacos">Tacos</Link>
                    </li>
                    <li>
                        <Link to="/Hamburguesas">Hamburguesas</Link>
                    </li>
                    <li>
                        <Link to="/Contacto">Contacto</Link>
                    </li>
                    <li>
                        <Link to="/Pedidos">Mis pedidos</Link>
                    </li>
                </ul>
            </nav>
            <Switch>
                <Route path="/Tacos">
                    <Taco_menu/>
                </Route>
                <Route path="/Hamburguesas">
                    <Hamburguer_menu/>
                </Route>
                <Route path="/Contacto">
                    <Contacto/>
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