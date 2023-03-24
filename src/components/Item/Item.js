import { Link } from "react-router-dom"

const Item = ({ id, name, img, price }) => {
    return (
        <div>
            <h2>{name}</h2>
            <img src={img} alt={name} style={{width: 225, height: 300}}></img>
            <h3>{price}</h3>
            <Link to={`/item/${id}`}>Ver detalle</Link>
        </div>
    )
}

export default Item