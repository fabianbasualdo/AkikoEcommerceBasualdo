
import { createContext, useState, useContext } from 'react';


/*creo el contexto */
const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

/** children significa que todos sus hijos heredaran lo que tiene este contexto **/
export const CartContextProvider = ({ children }) => {

    /*variable de estado cartList que guardara los productos agregados al carrito */
 const [cartList, setCartList] = useState([]);



/**************addToCart para asignar al carrito, su cantidad comprada o el nuevo producto*****************/

 const addToCart = (objProduct) => {
    let carritoprevio = [...cartList];

    /*some: traera un verdadero o falso, si alguno de los valores del array cumplen con la condicion */
  if (carritoprevio.some((idex) => idex.product.id === objProduct.product.id))
  {
    //si encuentra el producto buscado, suma uno, a la variable cantidad del producto encontrado
      carritoprevio.find((idex) => idex.product.id === objProduct.product.id).quantity += objProduct.quantity;
      //actualiza el producto encontrado con su nueva cantidad comprada, utilizando setCartList
      setCartList(carritoprevio);/*este es el valor que pasara el contexto a sus componentes */
      alert("Producto suma cantidad al setCartList, metodo addToCart, observar en console");
      console.log(carritoprevio)
    } //si no encuentra el producto buscado, lo agrega como uno nuevo al carrito
    else {
        
      setCartList([...cartList, objProduct]);/*concatena lo que tiene cartList, con lo que tiene objProduct eso lo logro al colocar los tres puntitos, luego utilizo setCartList para asignarle el valor al useState llamado CartList*/
      alert("Producto nuevo agregado al setCartList, metodo addToCart, observar en console");
      console.log(objProduct)
    }
  };
/*************************************************************************************************************/




/**********************Borra el contenido del useState llamado setCartList************************************/

  const clearList = () => setCartList([]);

/**************************************************************************************************************/



/*********Recorre el useState llamado carList, para sumar el precio total de los productos comprados************/
  const totalPrice = () => {
    let total = 0;

    cartList.forEach((newProduct) => {total +=parseInt(newProduct.product.price) * parseInt(newProduct.quantity);});

    return parseInt(total);
  };
/***************************************************************************************************************/



/********Agrega a setCartList todos los productos menos el que quiero borrar del carrito************************/

  const removeProduct = (id) => {setCartList(cartList.filter((newProduct) => newProduct.product.id !== id));};


/***************************************************************************************************************/



/*********************acumula la cantidad de productos comprados en la variable valor***************************/
  const iconCart = () =>cartList.reduce((acum, valor) => acum + valor.quantity, 0);

/***************************************************************************************************************/


  return (
    /*Asigno al value del proveedor todo lo que voy a compartir globalmente con los componentes que asocie a este contexto*/
    <CartContext.Provider
      value={{
        cartList: 
        cartList,
        setCartList,
        addToCart,
        clearList,
        totalPrice,
        removeProduct,
        iconCart,    
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
/******************************************************************************************************/