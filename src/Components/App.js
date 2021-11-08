import { useState } from 'react';
import '../css/App.css';
import Navbar from './Navbar';
import Pedido from './Pedido';

function App() {
  //Estado del carrito
  const[cart,setCart] = useState(0)
  return (
    <div className="App">
      <Navbar/>
    </div>
  );
}

export default App;
