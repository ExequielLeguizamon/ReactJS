import React from 'react'
import ItemCount from '../ItemCount/ItemCount';
import '../ItemDetail/ItemDetail.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useContext } from 'react';
import { Shop } from '../../Context/ContextProvider';

const ItemDetail = ({ product }) => {
    const navigate = useNavigate();

    product.stock = 25;
    const [qtyAdded, setQtyAdded] = useState(0);
    
    const {addItem} = useContext(Shop)

    const handleConfirm = (qty) => {
        setQtyAdded(qty);
    }

    const handleTerminate = () => {
        addItem(product, qtyAdded)
        navigate('/containers/Cart/')
    }

    console.log(qtyAdded);

    return (
        <div className='container-detail'>
            <h1>{product.title}</h1>
            <img src={product.image} alt="" height="300px" />
            <p>{product.description}</p>
            {!qtyAdded ?
                <ItemCount onConfirm={handleConfirm} maxQuantity={product.stock} />
                :
                <button onClick={handleTerminate}>Finalizar compra</button>
            }
        </div>
    )
}

export default ItemDetail