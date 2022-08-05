import React, { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from '../../Firebase/config';
import "./styles.css";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const Order = () => {
  const [order, setOrder] = useState({});
  const params = useParams();

  useEffect(() => {
    const getOrder = async () => {
      const docRef = doc(db, "orders", params.orderId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const orders = { id: params.orderId, ...docSnap.data() };
        setOrder(orders);
      } else {
        Swal.fire("No such document!");
      }
    };
    getOrder();
  }, [params]);

  return (
    <div className="orderContainer">
      <h1>Orden emitida!</h1>
      <div className="orderInfo">
        <h3>Id de orden:{order.id}</h3>
        <h3>Emisión de compra: {order?.createdAt}</h3>
      </div>
      <div className="orderBuyer">
        <h3>Datos comprador:</h3>
        <p>Nombre: {order?.buyer?.name}</p>
        <p>Dirección: {order?.buyer?.address}</p>
        <p>Email: {order?.buyer?.mail}</p>
      </div>
      <table>
        <tr className="orderRows">
          <th>Productos:</th>
        </tr>
        {order?.items?.map((producto) => {
          const precioItems = () => {
            return producto.quantity * producto.price;
          };
          return (
            <tr className="orderProductsContainer orderRows">
              <td>
                <img
                  src={producto.image}
                  alt="Imagen del producto comprado"
                  className="orderProductImage"
                ></img>
              </td>
              <td className="orderTitle">
                {producto.quantity}x {producto.title}
              </td>
              <td className="orderPrice">$ {precioItems()}</td>
            </tr>
          );
        })}
        <tr className="orderTotal">
          <td>Total: $ {order.total}</td>
        </tr>
      </table>
    </div>
  );
};

export default Order;