import CartWidget from '../CartWidget/CartWidget'
import { Link } from "react-router-dom"
import './NavBar.css'
const NavBar = () =>{
    return(
        <nav className="NavBar">
            <div className='topNavBar'>
                <h1>BASIC</h1>
                <input className='form-control rounded' id='Busqueda' placeholder='Search'></input>
                <CartWidget/>
            </div>
            <div className='subNavBar'>
                <Link className='NavBarLink'to='/'>Home</Link>
                <Link className='NavBarLink'to='/category/campera'>Camperas</Link>
                <Link className='NavBarLink'to='/category/camiseta'>Camisetas</Link>
                <Link className='NavBarLink'to='/category/pantalon'>Pantalones</Link>
                <Link className='NavBarLink'to='/category/calzado'>Calzado</Link> 

            </div>

        </nav>
        
        

    )
}

export default NavBar