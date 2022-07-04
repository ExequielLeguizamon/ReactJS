import React, { useEffect, useState } from 'react'
import ItemDetail from '../../components/ItemDetail/ItemDetail'

//Obtener los datos de un producto específico
const ItemDetailContainer = () => {

    const [productDetail, setProductDetail] = useState({})
    const [error, setError] = useState("")

    useEffect(()=> {
        const getProductos = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products/5')
                const data = await response.json();
                setProductDetail(data)
            } catch (error) {
                setError(error.message)
            }
        }
        getProductos();

    }, [])

    return (
        <ItemDetail product={productDetail}/>
    )
}

export default ItemDetailContainer