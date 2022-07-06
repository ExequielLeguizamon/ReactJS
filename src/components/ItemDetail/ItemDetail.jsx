import React from 'react'
import '../ItemDetail/ItemDetail.css'

const ItemDetail = ({ product }) => {
    console.log(product);
    return (
        <div className='container-detail'>
            <h1>{product.title}</h1>
            <img src={product.image} alt="" height="300px" />
            <p>{product.description}</p>
        </div>
    )
}

export default ItemDetail