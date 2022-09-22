import React from "react";
import { useCartContext } from "../cartcontext/CartContext";

export const CartWidget = () => {
    const { totalProducts } = useCartContext();
    return(
        <div className="cart-cont">
            <i className="bi bi-cart3"></i>
            <span>{totalProducts() || ''}</span>
        </div>
    );
}

export default CartWidget;