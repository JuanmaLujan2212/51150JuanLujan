import CartWidget from '../CartWidget/CartWidget'
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
                <button>Home</button>
                <button>Camperas</button>
                <button>Camisetas</button>
                <button>Pantalones</button>
                <button>Calzado</button>    
            </div>

        </nav>
        
        

    )
}

export default NavBar