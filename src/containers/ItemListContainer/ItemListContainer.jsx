import React, { useEffect, useState } from 'react';
import ItemList from '../../components/ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { collection, query, getDocs } from "firebase/firestore";
import { db } from '../../Firebase/config';



const ItemListContainer = ({ greeting }) => {

  const [productos, setProductos] = useState([])
  const [productosFiltrados, setProductosFiltrados] = useState([])

  const params = useParams()

  console.log(params);

  useEffect(() => {

    const getProductos = async () => {
      try {
        const q = query(collection(db, "productos"));
        const querySnapshot = await getDocs(q);
        const productos = []
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
          productos.push({id: doc.id, ...doc.data()})
        });

        // const response = await fetch('https://fakestoreapi.com/products/');
        // const data = await response.json()
        setProductos(productos);
        setProductosFiltrados(productos);
      } catch (error) {
        console.log("Hubo un error:");
        console.log(error);
      }
    }
    getProductos()
  }, [])

  useEffect(() => {
    if (params?.categoryId) {
      const productosFiltrados = productos.filter(producto => producto.category === params.categoryId)
      setProductosFiltrados(productosFiltrados)
    } else {
      setProductosFiltrados(productos)
    }
  }, [params, productos])

  console.log(productos);

  return (
    <div>
      {productos.length !== 0 ?
        <ItemList products={productosFiltrados} />
        :
        <p>Cargando productos...</p>
      }
    </div>
  )
}

export default ItemListContainer