import { useEffect, useState } from 'react'
import { getProducts, getProductsByCategory } from "../../asyncMock"
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import './ItemListContainer.css'

const ItemListContainer = ({ greeting }) => {
    const [productsState, setProductsState] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)
        const asyncFunction = categoryId ? getProductsByCategory : getProducts

        asyncFunction(categoryId)
            .then(products => {
                setProductsState(products)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(()=>{
                setLoading(false)
            })
    }, [categoryId])

    if(loading){
        return(
            <div className="Cargando">
                <h1>Cargando...</h1>
            </div>
        )

    }

    if(productsState && productsState.length === 0){
        return (
            <div className='Cargando'>
                <h1>No hay productos de esta categoria</h1>
             </div>
        )
    }

    return (
        <div className='Saludo'>
            <h1>{greeting}</h1>
            <ItemList products={productsState}/>
        </div>
    )
}

export default ItemListContainer