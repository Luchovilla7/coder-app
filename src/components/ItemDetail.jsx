import React, {useState} from "react";
import { Link } from "react-router-dom";
import "../App.css";
import ItemCount from "./ItemCount";

const ItemDetail = ({data}) => {
    const [goToCart, setGoToCart] = useState(false);
    
    const onAdd = () => {
       setGoToCart(true);
    }

    return (
        <div className="container">
            <div className="detail">
                <div className="content">
                    <h1>{data.title}</h1>
                </div>
                <img className="detail__image" src={data.image} alt="" />
                {
                    goToCart
                        ? <Link to='/cart'>Terminar Compra</Link>
                        : <ItemCount initial={1} stock={5} onAdd={onAdd}/>
                }
            </div>

        </div>
    );
}

export default ItemDetail;