import React from "react";
import '../App.css';
import { useCartContext } from "../cartcontext/CartContext";

const ItemCart = ({ product }) => {
    const { removeProduct } = useCartContext();
    return (
        <div className="itemCart">
            <img src={product.image} alt={product.title} />
            <div>
                <p>Título: {product.title}</p>
                <p>Cantidad: {product.quantity}</p>
                <p>Precio U: {product.price}</p>
                <p>subTotal: ${product.quantity * product.price}</p>
                <button onClick={() => removeProduct(product.id)}>Eliminar</button>
            </div>
        </div>
    )
}

export default ItemCart;