import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';
import Card from 'react-bootstrap/Card';

/*importo el contexto */
import { useCartContext } from "../context/cartContext";

const Imagenes=require.context('../assets/img',true);

//item es el registro obtenido en la busqueda de itemDetailContainer.jsx
const ItemDetail = ({ item }) => {
    const [itemCount, setItemCount] = useState(0);


    
    //const [addedToCart, setAddedToCart] = useState(false);
    const { addToCart } = useCartContext();
   
    
   
    const onAdd = (qty) => {
      
         /*cuando presione el boton "agregar al carrito" del componente ItemCount.jsx,cargara con la cantidad comprada y los detalle del producto elegido en este metodo llamado addToCart, que proviene del contexto llamado cartContext.js */
       addToCart({
        quantity: qty, /*qty es la variable  del boton "+ o -", que indica la cantidad comprada */
        product: item, /*ingreso el producto elegido utilizando item */
      });
         

           
        alert("tu seleccionaste para agregar al carrito " + qty + " elementos.");
        setItemCount(qty);
        
    }

    return (
        <>
        {
            //pregunto si obtuve un registro, si lo obtuve dibujo el DOM
            item && item.imagen
           ? 

<Card style={{ width: '18rem' }}>
      {/* utilizo las llaves para colocar comentario:
      utilizo la constante llamada Imagenes para indicar la ruta donde tengo las imagenes, 
      pictureUrl contiene el nombre de la imagen, dicho nombre la leo del archivo JSON llamado Productos
      */}
      <Card.Img variant="top" src={Imagenes(`./${item.imagen[0]}`)} />
      <Card.Body>
        {/*title la obtengo del JSON */}
        <Card.Title>{item.nombre}
</Card.Title>
        <Card.Text>
          {/*id la obtengo del JSON */}
         identificador: {item.id}
        </Card.Text>
        <Card.Text>
           {/*costo la obtengo del JSON */}
        Precio: ${item.costo}
        </Card.Text>
        <Card.Text>
           {/*stock la obtengo del JSON */}
         Stock disponible: {item.stock} unidades.
        </Card.Text>
        <Card.Text>
           {/*descripcion la obtengo del JSON */}
           Descripcion: {item.descripcion}
        </Card.Text>
        {
            /*si itemCount es cero, entonces dibujo el componente ItemCount, que me dara la posibilidad de comprar mas productos*/
                        itemCount === 0
                        ? <ItemCount stock={item.stock} initial={itemCount} onAdd={onAdd} />
                        : <Link to='/cart' style={{textDecoration: "none"}}><Button variant="contained" color="secondary">Terminar mi Compra</Button></Link>
                    }

      </Card.Body>
    </Card>

         //de lo contrario si no obtuve registro, coloco la siguiente leyenda.
            : <p>Cargando...</p>
        }
        </>
    );
}

export default ItemDetail;

