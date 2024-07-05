import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../media/logo_bg.png';

export const NavBar = ({}) => {
  return (
  <nav className='navbar'>
    <ul>
      <Link to = "/"><img src={logo} alt='Home' className='navbar__img'></img></Link>
      <Link to = "/" className='navbar__item'> Home </Link>
      <Link to = "/busqueda" className='navbar__item'>Buscar</Link>
      <Link to = "/user" className='navbar__item'>User</Link>
      <Link className='navbar__item'>Generos</Link>
    </ul>
  </nav>
  );
};