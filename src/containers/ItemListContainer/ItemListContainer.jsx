import React, { useEffect, useState } from 'react'
import ItemCount from '../../components/ItemCount/ItemCount'
import ItemList from '../../components/ItemList/ItemList'

const ItemListContainer = ({greeting}) => {

  const [productos, setProductos] = useState(null)

  useEffect(() => {

    const getProductos = async () => {
      try {
        const response = await fetch('/mock/data.json');
        const data = await response.json();
        console.log(data);
        setProductos(data);
      } catch (error) {
        console.log("Hubo un error:");
        console.log(error);
      }
    }

  getProductos()

  }, [])

console.log(productos);


const handleAdd = () => {
  console.log("Se agrego al carrito")
}

  return (
    <div>
      <h1>{greeting}</h1>
      <ItemCount handleAdd={handleAdd}/>
      {productos ?
        <ItemList products={productos} />
        :
        null
      }
    </div> 
  )
}

export default ItemListContainer