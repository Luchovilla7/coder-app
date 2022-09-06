import "../App.css";

import React from "react";

const Item = ({info}) => {
    return (
        <a href="" className="product">
            <img src={info.Image} alt="" />
            <p>{info.title}</p>
        </a>
    )
}

export default Item;