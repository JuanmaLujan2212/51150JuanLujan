import { useState } from 'react'
import './ItemCounter.css'

const ItemCounter = ({ onAdd, stock, initial = 1 }) => {
    const [count, setCount] = useState(initial)

    const increment = () => {
        if(count < stock) {
            setCount(count + 1)
        }
    }

    const decrement = () => {
        if(count > 1){
            setCount(count - 1)
        }
    }

    return (
        <div>
            {stock <= 0 ? (
                <p style={{ color: 'red' }}>No hay stock</p>
            ) : (
                <div>
                    <p>{count}</p>
                    <button className='controlBoton' onClick={decrement}>-</button>
                    <button className='Mainboton' onClick={() => onAdd(count)}>Agregar al carrito</button>
                    <button className='controlBoton' onClick={increment}>+</button>
                </div>
            )}
        </div>
    )
}

export default ItemCounter