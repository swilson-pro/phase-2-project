import React from 'react'
import {NavLink} from 'react-router-dom';

function NavBar() {
    return (
        <div className='container'>
            <NavLink to='/'><button>Home</button></NavLink>
            <NavLink to='/mycompanyproducts'>{<button>My Company Products</button>}</NavLink>
            <NavLink to='/favorites'>{<button>Favorites</button>}</NavLink>
            <NavLink to='/savedproducts'>{<button>Saved Products</button>}</NavLink>
            <NavLink to='/createnewproduct'>{<button>Create New Product</button>}</NavLink>        
        </div>
    )
}

export default NavBar