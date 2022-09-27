import React, {useState, useEffect} from "react";
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import BounceLoader from 'react-spinners/BounceLoader';

const ItemListContainer = ({greeting}) => {
    const [data, setData] = useState([]);

    const {categoriaId} = useParams();

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const querydb = getFirestore();
        const queryCollection = collection(querydb, 'products');
         if (categoriaId){
            const queryFilter = query(queryCollection, where('category', '==', categoriaId))
            getDocs(queryFilter)
            .then(res => setData(res.docs.map(product => ({id: product.id, ...product.data()}))))    
        } else {
            getDocs(queryCollection)
            .then(res => setData(res.docs.map(product => ({id: product.id, ...product.data()}))))    
        }
        setLoading(true);
        setTimeout (() => {
        setLoading(false);
        });

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

export default ItemListContainer;