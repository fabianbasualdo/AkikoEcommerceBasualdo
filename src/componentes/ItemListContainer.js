import React from 'react';
import ItemCount from './ItemCount';

const onAdd=({props})=>{


    return(
        <div className="carrito" style={{color:"red"}}>se agregaron: {props}, unidades al carrito
        <br></br>
        <ItemCount stock={5} initial={1} onAdd={props}/>
        </div>
    )
}
    
export default onAdd