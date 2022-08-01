//import '../lipstick.png'

function MakeupCard ({makeup,ifImageError}) {
    const {id, brand, name, price, image_link, description} = makeup


    return (
        <li className='card'>
            <img src={image_link} alt={name} onError={()=> ifImageError(id)} />
            <h4>{name}</h4>
            <h3>{brand}</h3>
            <p>Price: {parseFloat(price)}</p>
            <button className="primary">Add to Favorites</button>
        </li>
    )
}

export default MakeupCard