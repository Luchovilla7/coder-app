import ItemDetail from "./ItemDetail";
import React, {useEffect, useState} from "react";

const product = { id: 1, Image: "", title: ""};

const ItemDetailContainer = () => {
    const [data, setData] = useEffect({});

    useEffect(() => {
        const getData = new Promise(resolve =>{
            setTimeout(() => {
                resolve(product);
            }, 2000);
        });
        getData.then(res => setData(res));

    }, [])

    return (
        <ItemDetail data={data} />
    );
}

export default ItemDetailContainer;