import React, { useEffect, useState } from 'react'
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from "firebase/firestore";
import { db } from '../../Firebase/config';

const ItemDetailContainer = () => {

    const [productDetail, setProductDetail] = useState({})

    const params = useParams()

    console.log(params);

    useEffect(() => {
        const getProductos = async () => {
            try {
                const docRef = doc(db, "productos", params.productId);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    console.log("Document data:", docSnap.data());
                    const productDetail  = {id: docSnap.id, ...docSnap.data()}
                    setProductDetail(productDetail)
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }

                //const response = await fetch(`https://fakestoreapi.com/products/${params.productId}`)
                //console.log(response)
                //const data = await response.json();
                //console.log('get productos');
                // console.log(data);
                //setProductDetail(data)
            } catch (error) {
                console.log(error)
            }
        }
        getProductos();

    }, [params])

    return (
        Object.keys(productDetail).length !== 0 ?
            <ItemDetail product={productDetail} />
            :
            <p>Cargando productos...</p>
    )
}

export default ItemDetailContainer