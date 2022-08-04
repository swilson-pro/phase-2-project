import React from 'react'
import {NavLink} from 'react-router-dom';

function NavBar() {
    return (
        <div className='nav'>
            <NavLink className='NavButton' to='/'><button>Home</button></NavLink>
            <NavLink className='NavButton' to='/favorites'>{<button>Favorites</button>}</NavLink>
            <NavLink className='NavButton' to='/myproducts'>{<button>My Products</button>}</NavLink>
            <NavLink className='NavButton' to='/newproductform'>{<button>Create New Product</button>}</NavLink>        
        </div>
    )
}

export default NavBar