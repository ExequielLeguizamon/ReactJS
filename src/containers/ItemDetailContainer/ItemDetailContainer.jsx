import React, { useEffect, useState } from 'react'
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from "firebase/firestore";
import { db } from '../../Firebase/config';
import Swal from 'sweetalert2';

const ItemDetailContainer = () => {

    const [productDetail, setProductDetail] = useState({})

    const params = useParams()

    useEffect(() => {
        const getProductos = async () => {
            try {
                const docRef = doc(db, "productos", params.productId);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    const productDetail  = {id: docSnap.id, ...docSnap.data()}
                    setProductDetail(productDetail)
                } else {
                   
                  Swal.fire("No existe dicho producto");
                }

            
            } catch (error) {
                Swal.fire("hubo un error:" + error)
            }
        }
        getProductos();

    }, [params])

    return (
        <div>
           <ItemDetail product={productDetail} />
        </div>
    )
}

export default ItemDetailContainer