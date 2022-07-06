import React, { useEffect, useState } from 'react'
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import {useParams} from 'react-router-dom';


const ItemDetailContainer = () => {

    const [productDetail, setProductDetail] = useState({})

    const params = useParams()

    console.log(params);

    useEffect(()=> {
        const getProductos = async () => {
            try {
                const response = await fetch(`https://fakestoreapi.com/products/${params.productId}`)
                console.log(response)
                const data = await response.json();
                console.log('get productos');
                // console.log(data);
                setProductDetail(data)
            } catch (error) {
                console.log(error)
            }
        }
        getProductos();

    }, [params])

    return (
        Object.keys(productDetail).length !== 0 ?
        <ItemDetail product={productDetail}/>
        :
        <p>Cargando productos...</p>
    )
}

export default ItemDetailContainer