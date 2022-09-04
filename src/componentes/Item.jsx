import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Imagenes=require.context('../assets/img',true);//true es para que tambien busque en subdirectorios

const  Item= ({id,title,stock,price,pictureUrl}) =>{
  return (
    <Card style={{ width: '18rem' }}>
      {/* utilizo las llaves para colocar comentario:
      utilizo la constante llamada Imagenes para indicar la ruta donde tengo las imagenes, 
      pictureUrl contiene el nombre de la imagen, dicho nombre la leo del archivo JSON llamado Productos
      */}
      <Card.Img variant="top" src={Imagenes(`./${pictureUrl}`)} />
      <Card.Body>
        {/*title la obtengo del JSON */}
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {/*id la obtengo del JSON */}
         identificador: {id}
        </Card.Text>
        <Card.Text>
           {/*price la obtengo del JSON */}
        Precio: ${price}
        </Card.Text>
        <Card.Text>
           {/*stock la obtengo del JSON */}
         Stock disponible: {stock} unidades.
        </Card.Text>
        <Button variant="success">Ver detalle...</Button>
      </Card.Body>
    </Card>
  );
}

export default Item;