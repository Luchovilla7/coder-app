import React from "react";
import { useCartContext } from "../cartcontext/CartContext";
import { Link } from "react-router-dom";
import ItemCart from "./ItemCart";
import { useContext } from "react";


const Cart = () =>{
    const { cart, totalPrice, clearCart } = useCartContext();

    if (cart.length === 0) {
        return (
            <div className="cartDetail">
                <div className="empty">
                    <p>No hay productos en el carrito</p>
                    <Link to='/'>Hacer compra</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="cartDetail">
            {cart.map((product) => (
                    <ItemCart key={product.id} product={product} />
            ))}
            <div className="check">
                <p>Total a pagar: ${totalPrice()}</p>
                <button>Comprar ahora</button>
                <button onClick={() => clearCart()}>Eliminar todo</button>
            </div>
        </div>
    );
}

export default Cart;