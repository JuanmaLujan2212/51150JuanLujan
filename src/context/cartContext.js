import { createContext, useState } from 'react';

export const CartContext = createContext()

export const CartProvider = ({children}) =>{
    const [cart, setCart] = useState([])

    const addItem = (productToAdd) =>{
        if(!isInCart(productToAdd.id)){
          setCart(prev=> [...prev, productToAdd])
        }else{
          console.log("El producto ya ha sido agregado anteriormente")
        }
      }

    const removeItem = (id) => {
        const cartUpdated = cart.filter(prod => prod.id !== id)
        setCart(cartUpdated)
    }

    const getTotalQuantity = () =>{
        let totalQuantity = 0;
        cart.forEach(prod =>{
            totalQuantity += prod.quantity;
        })
        return totalQuantity
    }

    const getTotalPrice = () =>{
        let totalPrice = 0;
        cart.forEach(prod =>{
            totalPrice += prod.quantity * prod.price;
        })
        return totalPrice
    }

    const clearCart = () => {
        setCart([])
    }

    const totalPrice = getTotalPrice();

    const totalQuantity = getTotalQuantity();

    const isInCart = (id) =>{
        return cart.some(prod => prod.id ===id )
    }


    return(
        <CartContext.Provider value={{cart, addItem, removeItem, totalQuantity, totalPrice, clearCart}}>
            {children}
        </CartContext.Provider>
    )
}

