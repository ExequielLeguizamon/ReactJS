
import React, { useContext } from 'react'
import { Shop } from '../../Context/ContextProvider';
import ordenGenerada from '../../Utils/generarOrden';
import guardarOrden from '../../Utils/guardarOrden';


const Cart = () => {
  const {cart} = useContext(Shop);
 
  const confirmarOrden = async () => {
    const orden = ordenGenerada("Exequiel", "Alsina 2379", cart, 100);
    guardarOrden(cart, orden)

  } 

 
  return (
    <>
      <ul>
        {cart.map(producto => {
          return <li key={producto.id}>{producto.title} <img src={producto.image} width='80px' alt={producto.title} /></li>
        })}
      </ul>
      <button onClick={confirmarOrden}>Finalizar compra</button>
    </>
  )
}

export default Cart