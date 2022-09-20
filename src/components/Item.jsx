import "../App.css";
import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { CartContext } from "../cartcontext/CartContext";

const Item = ({info}) => {
    const nombre = useContext(CartContext);

    return (
        <div className="product">
                <img src={info.image} alt="producto" />
                <p>{info.title}</p>
                <Link to={`/detalle/${info.id}`} className="btn-view">Ver producto</Link>
        </div>
    );
}

export default Item;