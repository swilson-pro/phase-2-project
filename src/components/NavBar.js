import React from 'react'
import {NavLink} from 'react-router-dom';

function NavBar() {
    return (
        <div className='navbar'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/mycompanyproducts'>My Company Products</NavLink>
        <NavLink to='/favorites'>Favorites</NavLink>
        <NavLink to='/savedproducts'>Savedproducts</NavLink>
        <NavLink to='/createnewproduct'>Create New Product</NavLink>        </div>
    )
}

export default NavBar