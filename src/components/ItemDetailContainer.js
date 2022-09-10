import ItemDetail from "./ItemDetail";
import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";

const products = [
    { id: 1, image: "https://cannapp.com.co/wp-content/uploads/2021/03/0010s_0016_Aceite-DnSelva-30ml-Caja-Frontal.jpg", category:'aceites', title: "Aceite de Cannabis Standart 30ml"},
    { id: 2, image: "https://cannapp.com.co/wp-content/uploads/2022/01/0002s_0000_KIF-Cannabis-Power-Skin-Control-50g-Front.jpg", category:'cremas', title: "Crema Humectante de Cannabis 60grs"},
    { id: 3, image: "https://cannapp.com.co/wp-content/uploads/2020/08/pomada.jpg", category:'pomadas', title: "Pomada de Cannabis y Caléndula 60gr"},
    { id: 4, image: "https://cannapp.com.co/wp-content/uploads/2021/08/Preparaci%C3%B3n-Magistral-57-Med-Gotas-30ml-Caja-Blanca-Front.jpg", category:'aceites', title: "Gotas de CBD aislado 30ml"},
    { id: 5, image: "https://cannapp.com.co/wp-content/uploads/2022/01/0000s_0003_Tratamiento-Capilar-SativCare-250ml-front.jpg", category:'cremas', title: "Tratamiento capilar con Cannabis y Keratina 250ml"},
    { id: 6, image: "https://cannapp.com.co/wp-content/uploads/2020/08/Plantilla-Productos_0016s_0004_1.-CANNAHEALTH-OMG-copia.jpg", category:'cremas', title: "Gel para dolores musculares con Cannabis 100gr"},
];

const ItemDetailContainer = () => {
    const [data, setData] = useState({});
    const { detalleId } = useParams();

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(products);
            }, 1500);
        });

        getData.then(res => setData(res.find(product => product.id === parseInt(detalleId))));
    }, [])

    return (
        <ItemDetail data={data} />
    );
}

export default ItemDetailContainer;