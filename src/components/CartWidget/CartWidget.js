import React, { useContext } from 'react'
import { BsCart4 } from 'react-icons/bs';
import { Shop } from '../../Context/ContextProvider';
const CartWidget = () => {

  const {cart} = useContext(Shop)

  return (

    <div>
      <BsCart4 size={35} color="yellow"/>
      {cart.length && <span>({cart.length})</span>}
    </div>
  )
}

export default CartWidget