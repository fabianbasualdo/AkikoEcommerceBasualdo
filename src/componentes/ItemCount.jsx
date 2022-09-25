import { useEffect, useState } from 'react';

/*al parametro "initial" llegara el useState llamado itemCount, 
que se encuentra declarado en el componente ItemDetail */
const ItemCount = ({ stock = 0, initial = 1,  onAdd }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setCount(initial); /*con el valor de initial seteo el useState llamado count*/
    },[initial]);

    const increment = () => {
        if (count < stock) {
            setCount(count + 1);/*cada vez que cambie el valor de count cambiara el useState itemCount, porque entro a traves del parametro llamado initial*/
        }
    }
    
    const decrement = () => {
        if (count > initial+1) {
            setCount(count - 1);
        }
    }
    return (
        <>

        {/*al precionar el boton va cambiando el valor del useState count */}
            <button variant="text" onClick={increment} >+</button>
           <span>{count}</span>
            <button variant="text" onClick={decrement}>-</button>
            {
                /*en la primera carga del DOM, existe stock, pero "count" es cero
                es por eso que cargara el boton disabled*/
                /*al precionar el boton +, count ira incrementando, de esta manera "stock y count seran verdaderos, activando asi el boton" */
                stock && count
                ? <button variant="contained" color="primary" onClick={() => onAdd(count)}>Agregar al Carrito</button>/*al precionar el boton activa el evento click,llamando asi al metodo onAdd del componente ItemDetail, pasandole el valor de count, de esta manera cuando el componente itemDetail detecte el valor de count, como ya no sera cero, no llamara al componente ItemCount sino que dibujara un boton con la leyenda "terminar mi compra" asociado a un Link que redirecciona al precionarlo hacia el componente "Cart" */

                : <button variant="contained" disabled>Agregar al Carrito</button>
            }
         </>   
        
    );
}

export default ItemCount;