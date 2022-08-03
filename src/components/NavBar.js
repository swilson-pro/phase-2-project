import React from 'react'
import {NavLink} from 'react-router-dom';

function NavBar() {
    return (
        <div className='container'>
            <NavLink to='/'><button>Home</button></NavLink>
            <NavLink to='/favorites'>{<button>Favorites</button>}</NavLink>
            <NavLink to='/myproducts'>{<button>My Products</button>}</NavLink>
            <NavLink to='/newproductform'>{<button>Create New Product</button>}</NavLink>        
        </div>
    )
}

export default NavBar