//import '../lipstick.png'
import {useState} from 'react'
function MakeupCard ({isNotFavorite, removeFavorite, newFavorite, makeup,ifImageError}) {
    const {id, brand, name, price, image_link, description} = makeup

    
// if the item is already in the array, set the button to be 'remove from favorites'. 
// so isNotFavorite should be right now, i have it automatically set to 


    const handleAddToFavorites = () => {
        fetch('http://localhost:3000/favorites', {
            method: "POST", 
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name,
                brand: brand,
                image_link: image_link,
                price: price,
                id: id,
            }),
        })
        .then((res) => res.json())
        .then(newMakeup => newFavorite(newMakeup))
        .catch(function() {console.log('catch error')});
    }

    const handleRemoveFromFavorites = () => {
            fetch(`http://localhost:3000/favorites/${id}`, {
                method: "DELETE",
            })

            removeFavorite(id)

    }

    return (
        <li className='card'>
            <img src={image_link} alt={name} onError={()=> ifImageError(id)} />
            <h3>{name}</h3>
            <h4>{brand}</h4>
            <p>Price: {parseFloat(price)}</p>
            {isNotFavorite ? <button className="primary" onClick={handleAddToFavorites} >Add to Favorites</button> : 
            <button onClick={handleRemoveFromFavorites}>remove from favorites</button>
}
        </li>
    )
}

export default MakeupCard