import React,{useEffect,useState } from 'react';
import { useParams } from 'react-router';

import ItemList from './ItemList';
//import customFetch from '../utils/customFetch';

import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
//import { faDraftingCompass } from '@fortawesome/free-solid-svg-icons';


//const {productos}=require("../utils/productos");


  
const ItemListContainer = () => {
    const [datos, setDatos] = useState([]);
    const { idCategory } = useParams();


    console.log("ItemListContainer idCategoria:"+ idCategory);

    
    useEffect(() => {

        const db = getFirestore();
        if (idCategory) {
            const queryCollectionCategory = query(collection(db, 'Productos'), where('idcategoria', '==', idCategory) )
            getDocs(queryCollectionCategory)
            .then(resp => setDatos( resp.docs.map(prod => ({ id: prod.id, ...prod.data()}))))
            //.finally(() => setLoading(false))
            console.log("ItemListContainer, busca por categoria")
        } else {
            const queryCollection = collection(db, 'Productos')
            getDocs(queryCollection)
            .then(resp => setDatos( resp.docs.map(prod => ({ id: prod.id, ...prod.data()}))))
            //.finally(() => setLoading(false))
            console.log("ItemListContainer,busca todo de productos")
        }  
        /*customFetch(2000, productos.filter(item => {
            if (idCategory === undefined) return item;
            
            return item.idcategoria === parseInt(idCategory)
        }))
            .then(result => setDatos(result))
            .catch(err => console.log(err))*/
    }, [idCategory]);

    return (
        <>  
            <ItemList items={datos} />
        </>
    );
}

export default ItemListContainer;