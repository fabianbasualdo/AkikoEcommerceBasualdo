import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';
import { useCartContext } from "../context/cartContext";
import Badge from 'react-bootstrap/Badge';



const Carrito =()=>{
    
    const { iconCart,cartList } = useCartContext();
    return(
        <>
{/*dibujo el carrito en el dom */}
<FontAwesomeIcon icon={faCartShopping}/>

{/*si el carrito esta vacio carga una etiqueta <span>, de lo contrario carga un componente nativo de react llamado Badge el cual llama al metodo global del cartContext.js "iconCart()" el cual contiene un acumulador numerico de cantidad de productos que voy agregando al carrito*/}
      {cartList.length === 0 
            ?
                <span></span>
            :
                <Badge pill bg="danger">{iconCart()}</Badge>}

        </>
    )
}
export default Carrito