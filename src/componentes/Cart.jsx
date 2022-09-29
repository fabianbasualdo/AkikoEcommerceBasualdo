import { Link } from 'react-router-dom';

/******************************************************************************************************/
import { useCartContext } from "../context/cartContext";

//import 'bootstrap/dist/css/bootstrap.min.css'
/******************************************************************************************************/


import PriceTotal from './PriceTotal';


const Imagenes=require.context('../assets/img',true);

const Cart = () => {

  /******************************************************************************************************/

  //orderid sera utilizada en un futuro para mostrar el ticket de la compra
  const { cartList, removeProduct, orderReady, orderId } = useCartContext();
  /******************************************************************************************************/

  return (
    <div className="container py-10">
      
      
     
      {orderReady && (
        <div className="flex flex-col items-center justify-center text-center h-96">
          <h2 className="mb-8 text-3xl font-extrabold text-gray-700">
            Gracias por tu compra <br />

        
            tu compra # es : {orderId}
          

          </h2>
          {/*linkeara en un futuro hacia esta pagina que simulara el ticket */}
          <Link to={`/order/${orderId}`}>


            <button
              type="button"
              className="px-4 py-3 font-bold text-center text-white bg-indigo-500 rounded hover:bg-indigo-700"
            >
             mira tu compra
            </button>
          </Link>
        </div>
      )}
  


   {/************Si cartList es cero(es decir, no tengo productos en el carrito) y orderReady=false dibuja en el DOM : "El carrito no tiene productos" y muestro el boton continuar, con un Link que me lleva utilizando routing hacia la url raiz**************/}
      {!orderReady && cartList.length === 0 ? (


        <div className="flex flex-col items-center justify-center text-center h-96">
          <h2 className="mb-8 text-3xl font-extrabold text-gray-700">
            El carrito no contiene productos
          </h2>
          <Link to={'/'}>
            <button
              type="button"
              className="px-4 py-3 font-bold text-center text-white bg-indigo-500 rounded hover:bg-indigo-700"
            >
              continuar comprando
            </button>
          </Link>

        </div>
      ) : 



      (
        //cuando preciona "terminar la compra" del itemDetail, si el carrito(cartList) tiene productos ejecuta el siguiente codigo:
        //recordemos que addToCart que se encuentra en cartContext carga a "quality" y a item.product,y ademas decir que, addToCart se carga en ItemDetail.jsx al llamar al componente ItemCount.jsx
        <>
          <div className="grid grid-cols-1 px-4 mt-6 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {
            //recorro el carrito(cartList) y voy dibujando el DOM
            cartList.map((item) => {
              return (
                <div
                  key={item.product.id}
                  className="relative flex flex-col justify-between group"
                >
                  <div className="w-full overflow-hidden bg-gray-200 rounded-md min-h-80 aspect-w-1 aspect-h-1 group-hover:opacity-75 lg:h-80 lg:aspect-none">
                    <img
                      src={Imagenes(`./${item.product.imagen[0]}`)}
                      alt={item.product.nombre}
                      className="object-cover object-center w-full h-full lg:w-full lg:h-full"
                    />
                  </div>


                  <div className="mb-4">
                    <h3 className="text-sm font-extrabold text-gray-700">
                      <span aria-hidden="true" className="inset-0" />
                      {item.product.nombre}
                    </h3>
                    <p className="mt-1 text-sm font-bold text-gray-500 capitalize">
                      {item.product.category}
                    </p>
                    {/*muestro el precio */}
                    <p className="mt-3 font-bold text-green-600 text-md">{`Precio :$${item.product.costo}`}</p>

                    {/*muestro la cantidad */}
                    <p className="font-bold text-indigo-700 text-md">{`Cantidad :  ${item.quantity} `}</p>

                    {/*muestro el precio x la cantidad */}
                    <p className="font-bold text-green-600 text-md">
                      Sub total : $
                      {parseInt(item.quantity) * parseInt(item.product.costo)}
                    </p>
                  </div>


                {/*removeProduct es una funcion que esta en la carpeta context, en el archivo cartContext.js, el cual se ejecutara al precionar el boton*/}
                  <button
                    type="button"
                    className="px-4 py-3 font-bold text-center text-white bg-red-500 rounded hover:bg-red-700"
                    
                    onClick={() => removeProduct(item.product.id)}
                  >
                    ELIMINAR PRODUCTO{' '}
                  </button>


                </div>
              );
            })}
          </div>
        </>
      )}

{/**************************************************************************************************/}



{/******************Si cartList es mayor a cero(es decir, si el carrito tiene productos) carga el componente PriceTotal, que es total en pesos que pagara el cliente, sumara todos los productos agregados al carrito********************/}
      {cartList.length > 0 ? (
        <>
         
          <PriceTotal />
        </>
      ) : null}
{/**************************************************************************************************/}



    </div>
  );
};

export default Cart;