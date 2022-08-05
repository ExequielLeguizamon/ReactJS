import { addDoc, collection, doc, getDoc, writeBatch } from "firebase/firestore"
import Swal from "sweetalert2";
import { db } from "../Firebase/config";

const guardarOrden = (cart, orden, navigate) => {
  
    const batch = writeBatch(db)

    const outOfStock = []
    
    cart.forEach((productoEnCart) => {
        getDoc(doc(db, 'productos', productoEnCart.id))
        .then(async (documentSnapshot) => {
           
            const producto = {...documentSnapshot.data(), id: documentSnapshot.id};

           
            if (producto.stock >= productoEnCart.quantity) {
                batch.update(doc(db, 'productos', producto.id) ,{
                    stock: producto.stock - productoEnCart.quantity
                })
            } else {
                outOfStock.push(producto)
            }
           
    
            if (outOfStock.length === 0) {
                addDoc(collection(db, 'orders'), orden).then(({ id }) => {
                    
                    batch.commit().then(() => {
                        Swal.fire("Id de compra: " + id);
                        navigate(`/order/${id}`)
                    })
                }).catch((err) => {
                    Swal.fire(`Error: ${err.message}`);
                })
          
            } else {
                let mensaje = ''
                for (const producto of outOfStock) {
                    mensaje += `${producto.title}`
                }
                Swal.fire(`Sin stock: ${mensaje}`)
            }
        })
    })
}

export default guardarOrden;