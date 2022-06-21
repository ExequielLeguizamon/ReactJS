import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';

const NavBar = () => {
    return (
        <ul style={{width: '100%'}}>
            <li><a className="active" href="#home">Inicio</a></li>
            <li><a href="#news">Noticias</a></li>
            <li><a href="#contact">Contactos</a></li>
            <li><a href="#about">Nosotros...</a></li>
            <CartWidget/>
        </ul>

    )
}

export default NavBar