import React from 'react'
import { useState } from 'react'

const ItemCount = ({handleAdd}) => {

    const [counter, setCounter] = useState(0)
    const limitStock = 25
  
    const onAdd = () => {
      if (counter < limitStock) setCounter(counter + 1)
    }
    const onDecrement = () => {
      if (counter > 0) setCounter(counter - 1)
    }
  
    return (
      <div>
        <h1>{counter}</h1>
        <button onClick={onAdd}>+</button>
        <button onClick={onDecrement}>-</button>
        <button onClick={handleAdd}>Agregar al carrito</button>
      </div>
    )}


export default ItemCount