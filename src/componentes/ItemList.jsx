import Item from "./Item";

//ItemList recibira como parametro la lista de productos que se la paso desde ItemListContainer.jsx
const ItemList=({items})=>{
return (
<div>
    {
        //mientras este en ejecucion los 2 segundos del setTImeout, length sera cero. por eso mientras mostrara "cargando..."
        items.length>0 
        /*recorro la lista de productos y le dih¿go que quiero que campos quiero que me muestre, utilizando el 
        componente Item que tiene el diseño de la tarjeta card.*/
        ?items.map(item=><Item key={item.id} id={item.id} title={item.nombre}  price={item.costo} pictureUrl={item.imagen[0]} stock={item.stock} idcategoria={item.idcategoria}/>)
        :<p>Cargando...</p>

        /*React necesita identificar qué ítems han cambiado, agregados, eliminados; entonces, necesitamos agregar el atributo key, para darle a cada elemento/componente un id fijo y único por lista. */
    }
</div>
);

}
export default ItemList;