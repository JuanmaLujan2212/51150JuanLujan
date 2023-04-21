import CartWidget from '../CartWidget/CartWidget'
import { Link } from "react-router-dom"
import './NavBar.css'
import { useAuth } from '../../context/AuthContext'
import { useEffect, useState } from 'react'
import { collection, getDocs} from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig'


const NavBar = () =>{
    const [categories, setCategories] = useState([])
    const {user} = useAuth();

    useEffect(()=>{
        const categoriesRef = collection(db, 'categories')

        getDocs(categoriesRef)
        .then(snapshot => {
            const categoriesAdapted = snapshot.docs.map(doc => {
                const data = doc.data();

                return { id: doc.id, ...data }
            })

            setCategories(categoriesAdapted)
        })
    },[])



    return(
        <nav className="NavBar">
               <div className='topNavBar'>
                <Link className='NavBarLink'to='/'><h1>BASIC</h1></Link>
                
                <input className='form-control rounded' id='Busqueda' placeholder='Search'></input>
                {
                    user ? (
                        <CartWidget/>
                    ) : (
                        <Link className='NavBarLink'to='/login'>Login</Link> 
                    )
                }

            </div>
            <div className='subNavBar'>
                {
                    categories.map(cat => {
                        return (
                            <Link key={cat.id} className='NavBarLink' to= {`/category/${cat.slug}`}>{cat.label}</Link>
                        )
                    })
                }
            </div>

        </nav>
        
        

    )
}

export default NavBar