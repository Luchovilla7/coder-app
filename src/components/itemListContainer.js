import React from "react";
import ItemCount from "./ItemCount";

const ItemListContainer = ({greeting}) => {

    const onAdd = (quantity) => {
        console.log(`Compraste ${quantity} unidades`);
    }

    return(
        <>
            <h1>{greeting}</h1>
            <ItemCount initial={1} stock={5} onAdd={onAdd}/>
        </>
    )
}

export default ItemListContainer