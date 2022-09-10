import React from "react";
import "../App.css";

const ItemDetail = ({data}) => {
    return (
        <div className="container">
            <div className="detail">
                <div className="content">
                        <h1>{data.title}</h1>
                </div>
                <img className="detail__image" src={data.image} alt="" />
            </div>

        </div>
    );
}

export default ItemDetail;