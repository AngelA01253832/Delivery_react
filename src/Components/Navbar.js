import React from 'react'
import '../css/Navbar.css'

function Navbar(){
    return(
        <nav className="navbar">
            <h1><span>TACO</span> DELI</h1>
            <ul className="Menu_options">
                <li>Tacos</li>
                <li>Hamburguesas</li>
                <li>Contacto</li>
                <li>Mis pedidos</li>
            </ul>
            
        </nav>
    )
}

export default Navbar;