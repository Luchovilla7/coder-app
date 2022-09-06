import React from "react";
import "../App.css";

const ItemDetail = ({data}) => {
    return (
        <div className="container">
            <div className="detail">
                <img className="detail__image" src="{data.Image}" alt="" />
                <div className="content">
                    <h1>{data.title}</h1>
                </div>
            </div>

        </div>
    );
}

export default ItemDetail;