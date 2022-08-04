import Collapse from './Collapse'

function MakeupC3 ({makeup, deleteProduct}) {
    const {id, brand, product_type, name, price, image_link, description} = makeup

    console.log("description", description)

    const handleDeleteProduct = () => {
        fetch(`http://localhost:3002/posts/${id}`, {
            method: "DELETE",
        })

        deleteProduct(id)

}

    return (
        <li className='card'>
        <img src={image_link} alt={name} />
        <h3>Name:{name}</h3>
        <h3>Brand:{brand}</h3>
        <h3>Product Type:{product_type}</h3>
        <p>Price: {parseFloat(price)}</p>
        <button onClick={handleDeleteProduct}>Delete</button>
        {description ? 
        <Collapse collapsed={true}>
            <div>
                {description}
            </div>
        </Collapse>
        : <div>No description</div>}
        </li>
    )
}
export default MakeupC3