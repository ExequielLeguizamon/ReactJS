import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import '../NavBar/NavBar.css';
import {Link} from 'react-router-dom';

const NavBar = () => {
    return (
        <nav style={{width: '100%'}}>
            <ul className='nav-container'>
                <li className='nav-element'><Link to='/'>Inicio</Link></li>
                <li className='nav-element'><Link to="/category/men's clothing">Ropa Masculina</Link></li>
                <li className='nav-element'><Link to="/category/women's clothing">Ropa Femenina</Link></li>
                <li className='nav-element'><Link to='/category/jewelery'>Joyas</Link></li>
                <li className='nav-element'><Link to='/category/electronics'>Tecnologia</Link></li>
                <CartWidget/>
            </ul>
        </nav>
    )
}

export default NavBar