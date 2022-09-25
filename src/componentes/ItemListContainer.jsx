import React,{useEffect,useState } from 'react';
import { useParams } from 'react-router';

import ItemList from './ItemList';
import customFetch from '../utils/customFetch';
const {productos}=require("../utils/productos");


  
const ItemListContainer = () => {
    const [datos, setDatos] = useState([]);
    const { idCategory } = useParams();

    console.log(idCategory);

    
    useEffect(() => {
        customFetch(2000, productos.filter(item => {
            if (idCategory === undefined) return item;
            
            return item.idcategoria === parseInt(idCategory)
        }))
            .then(result => setDatos(result))
            .catch(err => console.log(err))
    }, [idCategory]);

    return (
        <>  
            <ItemList items={datos} />
        </>
    );
}

export default ItemListContainer;