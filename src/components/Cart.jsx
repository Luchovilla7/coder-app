import React from "react";
import { useCartContext } from "../cartcontext/CartContext";
import { Link } from "react-router-dom";
import ItemCart from "./ItemCart";
import { useContext } from "react";
import { addDoc, collection, getFirestore } from "firebase/firestore";


const Cart = () =>{
    const { cart, totalPrice, clearCart } = useCartContext();

    const order = {
        buyer: {
            name: 'Luciano',
            email: 'Luciano@gmail.com',
            phone: '3751-123456',
            address: 'prueba'
        },
        items: cart.map(product => ({ id: product.id, title: product.title, price: product.price, quantity: product.quantity})),
        total: totalPrice(),
    }

    const handleClick = () => {
        const db = getFirestore();
        const ordersCollection = collection(db, 'orders');
        addDoc(ordersCollection, order)
        .then(({ id }) => console.log (id))
    }

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
                <button onClick={handleClick}>Comprar ahora</button>
                <button onClick={() => clearCart()}>Eliminar todo</button>
            </div>
        </div>
    );
}

export default Cart;