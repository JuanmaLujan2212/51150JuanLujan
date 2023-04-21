import { useEffect, useState} from 'react'
// import { getProducts, getProductsByCategory } from "../../asyncMock"
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import './ItemListContainer.css'
import { getDocs, collection, query, where } from "firebase/firestore"
import { db } from '../../services/firebase/firebaseConfig'


const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)


    const { categoryId } = useParams()

    useEffect(() => {

        const productsRef = categoryId 
        ? query(collection(db, 'products'), where('category', '==', categoryId))
        : collection(db, 'products')

        getDocs(productsRef)
            .then(snapshot => {
                const productsAdapted = snapshot.docs.map(doc =>{
                    const data = doc.data()
                    return { id: doc.id, ...data }
                })
                setProducts(productsAdapted)
            })

            .catch(error=>{
                console.log(error)   
                setError(true)
            })
            .finally(()=>{
                setLoading(false)
            })
    }, [categoryId])


    if(loading) {
        return <h1 className='Cargando'>Cargando...</h1>
    }

    if(error) {
        return <h1 className='ERROR'>Vuelva a cargar la pagina</h1>
    }

    if(products && products.length === 0){
        return (
            <div className='Cargando'>
                <h1>No hay productos de esta categoria</h1>
             </div>
        )
    }

    return (
        <div className='Saludo'>
            <h1>{greeting}</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer