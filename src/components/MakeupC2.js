import {useState} from 'react'
function MakeupC2 ({removeFavorite, newFavorite, makeup,ifImageError}) {
    const {id, brand, name, price, image_link, description} = makeup
    const [isNotFavorite, setIsNotFavorite] = useState(false)


    const handleRemoveFromFavorites = () => {
        setIsNotFavorite(!isNotFavorite)
        fetch(`http://localhost:3000/favorites/${id}`, {
            method: "DELETE",
        })

        removeFavorite(id)

        // .then((res) => res.json())
        // .then(removedMakeup => removeFavorite(removedMakeup))
}

    return (
        <li className='card'>
            <img src={image_link} alt={name} />
            <h3>{name}</h3>
            <h4>{brand}</h4>
            <p>Price: {parseFloat(price)}</p>
            <button onClick={handleRemoveFromFavorites}>remove from favorites</button>
        </li>
    )
}

export default MakeupC2