import React from "react";
import CartWidget from "./CartWidget";

export const NavBar = () =>{
    return(
    <header>
      <div className="header__content container">
        <h3>
          CANNABIG 🌱
        </h3>
        <nav>
          <ul className="content__navbar">
            <li><a href="">Home</a></li>
            <li><a href="">Productos</a></li>
            <li><a href="">Nosotros</a></li>
            <li>
              <a href="">
                <CartWidget/>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    );
}

export default NavBar;