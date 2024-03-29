import ItemCounter from '../ItemCounter/ItemCounter'
import { useState } from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/cartContext'
import { useNotification } from '../../notification/NotificationService'

const ItemDetail = ({ id, name, category, img, price, stock, description  }) => {

    const [quantity, setQuantity] = useState(0)
    const { addItem, isInCart } = useContext(CartContext);
    const { setNotification } = useNotification()

    const handleOnAdd = (quantity) => {
        const objProductToAdd = {
            id, name, price, quantity, stock
        }

        const is = isInCart(objProductToAdd.id)
        console.log(is)
        
        if (is){
            setNotification('error', `El producto que desea agrega ya se encuentra en el carrito`)
        }else{
            setQuantity(quantity)
            addItem(objProductToAdd);
            setNotification('success', `Se agrego correctamente ${quantity} ${name}`)
        }
        
    }

   
    return (
        <article className="CardItem">
        <header className="Header">
            <h2 className="ItemHeader">
                {name}
            </h2>
        </header>
        <picture>
            <img src={img} alt={name} className="ItemImg"/>
        </picture>
        <section>
            <p className="Info">
                Categoria: {category}
            </p>
            <p className="Info">
                Descripción: {description}
            </p>
            <p className="Info">
                Precio: ${price}
            </p>
        </section>           
        <footer className='ItemFooter'>           
                    <ItemCounter onAdd={handleOnAdd} stock={stock} />
        </footer>
    </article>
    )
}

export default ItemDetail