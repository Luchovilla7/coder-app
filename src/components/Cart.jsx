import React from "react";
import { useCartContext } from "../cartcontext/CartContext";
import { Link } from "react-router-dom";
import ItemCart from "./ItemCart";


const Cart = () =>{
    const { cart, totalPrice } = useCartContext();

    if (cart.length === 0) {
        return (
            <div className="cartEmpty">
                <p>No hay productos en el carrito</p>
                <Link to='/'>Hacer compra</Link>
            </div>
        );
    }

    return(
        <>
            {
                cart.map(product => <ItemCart key={product.id} product={product} />)
            }
            <p>
                total: ${totalPrice()}
            </p>
        </>
    );
}

export default Cart;