import React,{useEffect,useState } from 'react';
import { useParams } from "react-router";

//import customFetch from "../utils/customFetch";
import ItemDetail from "./ItemDetail";
import { doc, getDoc, getFirestore } from 'firebase/firestore';
//const { productos } = require('../utils/productos');


//2: REALIZA LA BUSQUEDA DE LOS PRODUCTOS EN LA BASE DE DATOS
//2: Viene el idItem desde el componente item, que es cuando presiono el boton Ver detalle...

const ItemDetailContainer = () => {
    const [dato, setDato] = useState({});//utilizo esta para guarda el registro encontrado con find

    const { idItem } = useParams();//obtengo el valor del parametro idItem que le pase por URL, usando router que esta declarado en el archivo home.jsx
    console.log(idItem);
    console.log("HOLA3");

  
    
    useEffect(() => {

        const db = getFirestore()
        const queryDb = doc(db, 'Productos', idItem )
         getDoc(queryDb)
      



        .then(resp => setDato( { id:resp.id, ...resp.data() } ))
        
        //Con find obtengo la primer coincidencia de lo que busco dentro del JSON.
        /*customFetch(2000, productos.find(item => {
            if (idItem === undefined) return item;
            
            return item.id === parseInt(idItem) //en funcion al parametro que paso el usuario por URL, busco el registro
        }))
      
            .then(result => setDato(result)) //almaceno el resultado obtenido en la busqueda en useState
            .catch(err => console.log(err))*/
    }, [idItem]); //solo ejecutara el codigo de useEffect si este parametro cambia
    
    return (
        <>
        {/*dibujo la pantalla con el registro obtenido en el useEffect */}
        
        <ItemDetail item={dato} />
        </>
    );
}
/*la base de datos se llama AkikoEcommerce:
los campos son: 
 costo
descripcion
id
idcategoria
imagen
nombre
stock*/
export default ItemDetailContainer;