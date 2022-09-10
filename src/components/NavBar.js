import React from "react";
import CartWidget from "./CartWidget";
import { NavLink } from 'react-router-dom';

export const NavBar = () =>{
    return(
    <header>
      <div className="header__content container">
        <h3>
          CANNABIG 🌱
        </h3>
        <nav>
          <ul className="content__navbar">
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/categoria/aceites'>Aceites</NavLink></li>
            <li><NavLink to='/categoria/cremas'>Cremas</NavLink></li>
            <li><NavLink to='/categoria/pomadas'>Pomadas</NavLink></li>
            <li>
              <NavLink to='/cart'>
                <CartWidget/>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    );
}

export default NavBar;