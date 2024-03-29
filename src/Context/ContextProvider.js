import React, { createContext, useState } from 'react'

export const Shop = createContext(); 

const ContextProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const addItem = (producto, cantidad) => {
       
        const productoRepetido = isInCart(producto);
       
        if (productoRepetido) {
            productoRepetido.quantity += cantidad
            setCart([...cart])
        } else {
            setCart([...cart, {...producto, quantity: cantidad}])
        }

    }

    const removeItem = (id) => {
        const newItems = cart.filter((producto) => producto.id !== id);
        setCart(newItems);
      }
    
      const clear = () => {
        setCart([]);
      }


    const isInCart = (producto) => {
        return cart.find(elemento => elemento.id === producto.id)
    }

    const totalItems = () => {
        return cart.reduce((acc, producto) => acc + producto.quantity, 0);
      }


  return (
    <Shop.Provider value={{ addItem, removeItem, cart, clear, totalItems }}>
        {children}
    </Shop.Provider>
   
  )
}

export default ContextProvider