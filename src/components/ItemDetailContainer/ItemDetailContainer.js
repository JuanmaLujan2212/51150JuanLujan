import { useEffect, useState } from "react"
import { getProductById } from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {

    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)

    const { productId } = useParams()

    useEffect(()=>{
        setLoading(true)
        getProductById(productId)
        .then(product => {
            setProduct(product)
        })
        .catch(error => {
            console.log(error)
        })
        .finally(()=>{
            setLoading(false)
        })
    }, [productId])

    if(loading){
        return(
            <div className="Cargando">
                <h1>Cargando...</h1>
            </div>
        )

    }

    
    return( 
        <div className="Saludo">
            <h1>Detalle del producto</h1>
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer