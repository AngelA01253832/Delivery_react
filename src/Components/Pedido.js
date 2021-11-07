import React, { useState } from 'react';
import Progress from './Stepprogress';
import "../css/Pedido.css"
import imagepedido from '../img/entrega.png'
// import emptycart from '../img/carritoVacio.png'

function Pedido(props){
    const [pedidos, setPedidos] = useState(false);
    const [pedidoscart, setPedidoscart] = useState(0);
    
    const orderverification = (e) => setPedidos(e)
    const alertapedido = () => alert("No hay pedidos existentes") 
    //setPedidoscart(props.productos)
    if(pedidos === false){
        return(
        <>
            <h1 className="title">Pedidos existentes: {pedidoscart}</h1>
            <div className="false-order-container">
                <button type="button" class="btn btn-success" onClick={ pedidoscart === 0  ? alertapedido : orderverification}>Confirmar orden</button>
            </div>
            {/* <div className="img-progress-container">
                <img src={emptycart}></img>
            </div> */}
        </>
        )
    }
    return(
    <>

            <h1 className="title">Status de mi pedido</h1>
            <div className="img-progress-container">
                <img src={imagepedido}></img>
            </div>
            <div className = "StepProgress">
                <div className = "Progress-container">
                    <Progress></Progress>    
                </div>
            </div>

    </>
    )
}


export default Pedido;