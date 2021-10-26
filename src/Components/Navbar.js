import React from 'react'
import '../css/Navbar.css'

function Navbar(){
    return(
        <nav className="navbar">
            <div className="logo"><h1><span>TACO</span> DELI</h1></div>
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