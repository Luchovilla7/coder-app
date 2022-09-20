import React, {useState, useEffect} from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import BounceLoader from 'react-spinners/BounceLoader';

const products = [
    { id: 1, price: 2250, image: "https://cannapp.com.co/wp-content/uploads/2021/03/0010s_0016_Aceite-DnSelva-30ml-Caja-Frontal.jpg", category:'aceites', title: "Aceite de Cannabis Standart 30ml"},
    { id: 2, price: 2600, image: "https://cannapp.com.co/wp-content/uploads/2022/01/0002s_0000_KIF-Cannabis-Power-Skin-Control-50g-Front.jpg", category:'cremas', title: "Crema Humectante de Cannabis 60grs"},
    { id: 3, price: 2550, image: "https://cannapp.com.co/wp-content/uploads/2020/08/pomada.jpg", category:'pomadas', title: "Pomada de Cannabis y Caléndula 60gr"},
    { id: 4, price: 2500, image: "https://cannapp.com.co/wp-content/uploads/2021/08/Preparaci%C3%B3n-Magistral-57-Med-Gotas-30ml-Caja-Blanca-Front.jpg", category:'aceites', title: "Gotas de CBD aislado 30ml"},
    { id: 5, price: 2200, image: "https://cannapp.com.co/wp-content/uploads/2022/01/0000s_0003_Tratamiento-Capilar-SativCare-250ml-front.jpg", category:'cremas', title: "Tratamiento capilar con Cannabis 250ml"},
    { id: 6, price: 2800, image: "https://cannapp.com.co/wp-content/uploads/2020/08/Plantilla-Productos_0016s_0004_1.-CANNAHEALTH-OMG-copia.jpg", category:'cremas', title: "Gel para dolores musculares con Cannabis 100gr"},
];

const ItemListContainer = ({greeting}) => {
    const [data, setData] = useState([]);

    const {categoriaId} = useParams();

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getData = new Promise(resolve =>{
            setTimeout(() => {
                resolve(products);
            });
        });
        if (categoriaId){
            getData.then(res => setData(res.filter(aceite => aceite.category === categoriaId ))); 
        } else {
            getData.then(res => setData(res));
        }
        setLoading(true);
        setTimeout (() => {
        setLoading(false);
        }, 2000);

    }, [categoriaId])


    return(
        <>
            {loading ? (
            <BounceLoader className="load" size={65} color={'#22c55e'} loading={loading} />
            ) : (
            <>
                <h1>{greeting}</h1>
                <ItemList data={data} />
            </>
            )}
        </>
    )
}

export default ItemListContainer