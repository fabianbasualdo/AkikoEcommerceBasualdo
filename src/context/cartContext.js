import { createContext, useState, useContext } from 'react';


/******************************************************************************************************/
const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

/******************************************************************************************************/


//children hace referencia a que envolvera a todos sus hijos.
export const CartContextProvider = ({ children }) => {


/******************************************************************************************************/
//carList la utilizare para ir guardando en el carrito
  const [cartList, setCartList] = useState([]);


//inicializo el false a orderReady
  const [orderReady, setOrderReady] = useState(false);


  const [orderId, setOrderId] = useState(null);



/******************************************************************************************************/
const addToCart = (objProduct) => {
   let carritoprevio = [...cartList];

    /*some: traera un verdadero o falso, si alguno de los valores del array cumplen con la condicion */
  if (carritoprevio.some((idex) => idex.product.id === objProduct.product.id))
  {
    //si encuentra el producto buscado, suma uno, a la variable cantidad
      carritoprevio.find((idex) => idex.product.id === objProduct.product.id).quantity += objProduct.quantity;
      //actualiza el producto encontrado con su nueva cantidad comprada.
      setCartList(carritoprevio);/*este es el valor que pasara el contexto */

   } //si no encuentra el producto buscado lo agrega como uno nuevo al carrito
    else {
      setCartList([...cartList, objProduct]);/*concatena lo que tiene cartList, con lo que tiene objProduct eso lo logra al colocar los tres puntitos, luego utiliza setCartList para asignarle el valor al useState llamado CartList*/
    }
  };
  /*function addToCart(item){

    const index = cartList.findIndex(i => i.id === item.id)

    if (index > -1) {
        const oldItem = cartList[index].quantity
        cartList.splice(index, 1)
        setCartList([...cartList, {...item, quantity: item.quantity + oldItem}])
    } else {
        setCartList([...cartList, item])
    }
}*/
/******************************************************************************************************/
//borro todo el contenido del carrito
  const clearList = () => setCartList([]);

/*****************************************************************************************************/
  const totalPrice = () => {
    let total = 0;

    cartList.forEach((newProduct) => {total +=parseInt(newProduct.product.costo) * parseInt(newProduct.quantity);});
    //newProduct es lo que usa el forEach para ir tratando el contenido de cartList
    //se va sumando precio * las cantidad para calcular el total en carrito
    return parseInt(total);
  };
/******************************************************************************************************/


//vuelvo a insertar todos los productos de cartList menos el que el usuario desea eliminar del carrito
  const removeProduct = (id) => {setCartList(cartList.filter((newProduct) => newProduct.product.id !== id));};
//newProduct es la variable que usa filter para trabajar con cartList, para poder filtrar su contenido, ya que incorporara a todo cartList menos al que el usuario elijio para borrar

/*******************************************************************************************/
//iconCart lo utilizo para acumular el contador de productos que va agregando el usuario al carrito 
  const iconCart = () =>cartList.reduce((acum, valor) => acum + valor.quantity, 0);
//voy sumando las cantidades de productos en carrito, en la variable valor.
/*******************************************************************************************/

//en value paso todos parametros que seran globales para ser utilizados en el proyecto
  return (
    <CartContext.Provider
      value={{
        cartList: cartList,
        setCartList,
        addToCart,
        clearList,
        totalPrice,
        removeProduct,
        iconCart,
        setOrderReady,
        orderReady,
        setOrderId,
        orderId,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
/******************************************************************************************************/