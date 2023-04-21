import logo from './Carrito.png';
import { useContext } from 'react';
import { CartContext } from '../../context/cartContext';
import { Link } from "react-router-dom";

const CartWidget = () => {

    const { totalQuantity } = useContext(CartContext) 

    return (
        <div className='Cart'>
            <Link to={`/cart`}><img src={logo} alt="Logo" id='carrito'/></Link>
            {totalQuantity}
        </div>
    )
}
export default CartWidget