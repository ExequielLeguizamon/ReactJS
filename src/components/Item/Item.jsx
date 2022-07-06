import React from 'react';
import { useNavigate } from "react-router-dom";
import '../Item/Item.css'

const Item = ({ product }) => {

  const navigate = useNavigate();

  const handleDetail = ()=> {
    console.log("Navega hacia el detail");
    navigate(`/detail/${product.id}`)
  }

  return (
    
      <div className='card'
        onClick={handleDetail}>
        {product.title}
      </div>
       

  )
}

export default Item