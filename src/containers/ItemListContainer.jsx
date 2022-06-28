import React from 'react'
import ItemCount from '../components/ItemCount'

const ItemListContainer = ({greeting}) => {
  const handleAdd = () => {
    console.log("Se agrego al carrito")
  }
  return (
    <div>
    <h1>{greeting}</h1>
    
    <ItemCount handleAdd={handleAdd} initialStock={10}/>
    </div>
    )
}

export default ItemListContainer