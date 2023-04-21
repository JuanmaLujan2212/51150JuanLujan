import Item from "../Item/Item"
import './ItemList.css'

const ItemList = ({ products }) => {
    return (
        <div className="ItemContainer">
            {
                 products.map(product => {
                    return (
                        <div className="Item">
                            <Item key={product.id} {...product}/>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ItemList