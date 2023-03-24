const ItemDetail = ({ name, price, img, description,  }) => {
    return (
        <div>
            <h2>{name}</h2>
            <img src={img} alt={name} style={{width: 300}}></img>
            <h3>Precio: {price}</h3>
            <p>Descripcion: {description}</p>
        </div>
    )
}

export default ItemDetail