import React, {useState, useEffect} from "react";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";

const products = [
    { id: 1, Image: "https://cannapp.com.co/wp-content/uploads/2021/03/0010s_0016_Aceite-DnSelva-30ml-Caja-Frontal.jpg", title: "Aceite de Cannabis Standart 30ml"},
    { id: 2, Image: "https://cannapp.com.co/wp-content/uploads/2022/01/0002s_0000_KIF-Cannabis-Power-Skin-Control-50g-Front.jpg", title: "Crema Humectante de Cannabis 60grs"},
    { id: 3, Image: "https://cannapp.com.co/wp-content/uploads/2020/08/pomada.jpg", title: "Pomada de Cannabis y Caléndula 60gr"},
    { id: 4, Image: "https://cannapp.com.co/wp-content/uploads/2021/08/Preparaci%C3%B3n-Magistral-57-Med-Gotas-30ml-Caja-Blanca-Front.jpg", title: "Gotas de CBD aislado 30ml"},
    { id: 5, Image: "https://cannapp.com.co/wp-content/uploads/2022/01/0000s_0003_Tratamiento-Capilar-SativCare-250ml-front.jpg", title: "Tratamiento capilar con Cannabis y Keratina 250ml"},
    { id: 6, Image: "https://cannapp.com.co/wp-content/uploads/2020/08/Plantilla-Productos_0016s_0004_1.-CANNAHEALTH-OMG-copia.jpg", title: "Gel para dolores musculares con Cannabis 100gr"},
];

const ItemListContainer = ({greeting}) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = new Promise(resolve =>{
            setTimeout(() => {
                resolve(products);
            }, 2000);
        });
        getData.then(res => setData(res));

    }, [])

    const onAdd = (quantity) => {
        console.log(`Compraste ${quantity} unidades`);
    }

    return(
        <>
            <h1>{greeting}</h1>
            <ItemCount initial={1} stock={5} onAdd={onAdd}/>
            <ItemList data={data} />
        </>
    )
}

export default ItemListContainer