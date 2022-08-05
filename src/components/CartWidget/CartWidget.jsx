import React, { useContext } from 'react'
import { BsCart4 } from 'react-icons/bs';
import { Shop } from '../../Context/ContextProvider';

const CartWidget = () => {

  const {cart, totalItems} = useContext(Shop)

  return (

    <div>
      <BsCart4 size={35} color="yellow"/>
      {cart.length !== 0 ? (
      <button className="cartLength">
        <span to="/Cart">{totalItems()}</span>
      </button>
    ) : (
      <div></div>
    )}
    </div>
  )
}

export default CartWidget