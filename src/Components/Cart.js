import React from 'react'

function Cart(props){
    const [cart] = props;
    return(
        <>
            <h3>Carrito</h3>
            {cart.length === 0 && <div>Carrito vacio</div>}
             
        </>
        )
}

export default Cart;