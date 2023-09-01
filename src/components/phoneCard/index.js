

const PhoneCard = ({product}) => {
    return (
        <div>
            <span>{product.data.title}</span>
            <img src={`${product.data.images[0]}`}></img>
            <span>Price: {product.data.price}</span>
        </div>
    )
}

export default PhoneCard