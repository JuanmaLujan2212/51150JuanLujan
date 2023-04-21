import { useContext } from 'react'
import { CartContext } from '../../context/cartContext'
import { Link } from 'react-router-dom'
import './Cart.css'

const Cart = () => {

  const { cart, totalPrice, removeItem, clearCart } = useContext(CartContext) 

  if(totalPrice===0){
      return (
          <h1 className='Cargando'>Su carrito esta vacio</h1>
      )
  }

  return (
    <div>
      {cart.map((producto) => (
        <div key={producto.id}>
          <h3>{producto.name}</h3>
          <p>Cantidad: {producto.quantity}</p>
          <p>Precio: ${producto.price}</p>
          <button className='boton' onClick={() => removeItem(producto.id)}>Eliminar producto</button>
          
        </div>

      ))}  
    <p className='PrecioFinal'>Precio final: ${totalPrice}</p>
    
    <button className='Mainboton' onClick={() => clearCart()}>Vaciar carrito</button>
    <div>
    <Link to='/checkout'><button className='Mainboton'>Finalizar compra</button></Link>
    </div>
    
  </div>
  )
}

export default Cart





// import { useContext } from 'react'
// import { CartContext } from '../../context/cartContext'
// import { Link } from 'react-router-dom'


// export default Cart