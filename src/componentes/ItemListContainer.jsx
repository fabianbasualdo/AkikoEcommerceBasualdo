import React,{useEffect,useState } from 'react';
import ItemCount from './ItemCount';
import ItemList from './ItemList';
import customFetch from '../utils/customFetch';
const {productos}=require("../utils/productos");


    const ItemListContainer=()=>{
        //inicializo un useState de tipo lista (array), porque le voy a cargar objetos que provengan del json
const [datos,setDatos]=useState([]);

useEffect(()=>{
    //llamo a customFetch le paso el tiempo de 2 segundos, y le paso el JSON con mis productos.
    customFetch(2000,productos.filter(item=>{
        return item
    }))
    .then(result=>setDatos(result))//el resultado sera la lista de mis productos que vienen de la promesa
    .catch(err=>console.log(err))
},[datos]);
    return(
        <>
        {/*le paso  la lista de productos al componente ItemList*/}
        <ItemList items={datos}/>
        <ItemCount stock={5} initial={1} />
        </>
      
    );
}
    
export default ItemListContainer;
/*<div className="carrito" style={{color:"red"}}>se agregaron: {props}, unidades al carrito
<br></br>
<ItemCount stock={5} initial={1} onAdd={props}/>
</div>*/
