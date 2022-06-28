import React from 'react'
import ItemCount from '../components/ItemCount/ItemCount'

const ItemListContainer = ({greeting}) => {

const handleAdd = () => {
  console.log("Se agrego al carrito")
}

  return (
    <div>
      <h1>{greeting}</h1>
      <ItemCount handleAdd={handleAdd}/>
    </div> 
  )
}

export default ItemListContainer