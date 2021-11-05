import React, { useState } from 'react';
import Progress from './Stepprogress';
import "../css/Pedido.css"
function Pedido(){
    const [pedidos, setPedidos] = useState("No hay pedidos existentes")
    return(
    <>
        <h1>Status de mi pedido</h1>
        <div className = "StepProgress">
            <div className = "Progress-container">
                <Progress></Progress>    
            </div>
        </div>
        <button onClick={() => setPedidos("1 pedido")}>Agregar pedido</button>
    </>
    )
}


export default Pedido;