//import '../lipstick.png'

function MakeupCard ({makeup,ifImageError}) {
    const {id, brand, name, price, image_link, description} = makeup


    return (
        <li className='card'>
            <img src={image_link} alt={name} onError={()=> ifImageError(id)} />
            <h3>{name}</h3>
            <h4>{brand}</h4>
            <p>Price: {parseFloat(price)}</p>
            <button className="primary">Add to Favorites</button>
        </li>
    )
}

export default MakeupCard