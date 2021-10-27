import React, { useState } from 'react'
import Navbar from './Navbar';
function Pedido(){
    const [pedidos, setPedidos] = useState(0)
    return(
    <>
        <h1>Status de mi pedido</h1>
        <h3>Mis pedidos:{pedidos}</h3>
        <button onClick={() => setPedidos(pedidos+1)}>Agregar pedido</button>
    </>
    )
}


export default Pedido;