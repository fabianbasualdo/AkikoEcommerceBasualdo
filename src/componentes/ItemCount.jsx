import React,{useState} from 'react';


export default function ItemCount({stock,initial,onAdd}){
    const[sstock,setSstock]=useState(initial);


    const sumar = ()=>setSstock(sstock + 1);
    const restar = ()=>setSstock(sstock - 1);
    function carrito(any){
    alert("Agregaste al carrito: " + any + " productos");
    }


  return (
    <>
    <h2>ItemCount</h2>
    <nav>
        <button disabled={sstock>=stock} onClick={sumar}>+</button>
        <button disabled={sstock<=1} onClick={restar}>-</button>
        <h3>{sstock}</h3>
        <div>
          <br></br>
          <button disabled={sstock<=0} onClick={()=>carrito(sstock)}>Agregar al carrito</button>
          
        </div>
    </nav>
   
    </>
  );
}
