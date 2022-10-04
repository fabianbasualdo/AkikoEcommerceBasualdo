import {useState} from 'react';
//import firebase from "firebase/compat/app";
//import "firebase/compat/firestore";
//import {getFirestore,collection, getDocs, query} from 'firebase/firestore';
//import {getFirestore} from 'firebase/firestore';

import { createItem } from '../config/api'

/********************************************************************************************/
import { useCartContext } from "../context/cartContext";
/*******************************************************************************************/


const FormCount = () => {

/*******************************************************************************************/
const { cartList, totalPrice, setOrderReady, setOrderId, setCartList } =useCartContext();
/******************************************************************************************/

/*****************************************************************************************/
const [formData, setFormData] = useState({});/*para guardar el valor de los textbox */
/****************************************************************************************/

/*aca tenemos el evento OnChange */
  const handleOnChange = (e) =>setFormData({...formData,[e.target.name]: e.target.value,});

  /*obtiene el nombre y el valor capturado por el evento onChange, y lo guarda en la variable de estado useState llamada formData, que es un array.
  de esta manera voy a estar guardando: el nombre, el mail, y el telefono.
  */
   



/****************************************************************************************/
    


/*aca tenemos otro evento que es al apretar el boton, evento OnSubmit */
   const handleOnSubmit = async(e) => {
    e.preventDefault();/*Evito el comportamiento por defecto del boton al producirse el evento*/

    /*creo un array */
    let orden = {}; //guardare la fecha, formdata que tiene los datos personales, el preciototal comprado.

    orden.fecha = new Date();//"02/10/2022"//firebase.firestore.Timestamp.fromDate(new Date());

    
    /*formData es un useState, lo uso para guardar los datos personales*/
    orden.comprador = formData; /*formData es el useState declarado arriba*/

    orden.total = totalPrice();/*este parametro viene del contexto cartContext.js*/

    /*cartList es un parametro que viene del contexto llamado cartContext.js */

    /*recorro cartList y lo guardo en items, dentro de ese id del array orden*/
    /*items lo usare para insertar el detalle de la compra */
    orden.items = cartList.map((cartItem) => {
      const id = cartItem.product.id; /*id */
      const title = cartItem.product.nombre;/*titulo */
      const quantity = cartItem.quantity; /*cantidad comprada*/
      const price = cartItem.product.costo * cartItem.quantity;/*precio subtotal*/

      /* dibujo en el DOM */
      return {
        id,
        title,
        quantity,
        price,
      };
    });

/*******************************************************************************************/

//EMPIEZA CON LA BASE DE DATOS  orden es el array que cargamos arriba en este jsx, y contiene la data que voy a guardar en la base de datos:
  
console.log("FORMCOUNT")
console.log(orden);

 
//INSERTO NUEVO REGISTRO A LA COLECCION LLAMADA ORDERS de firebase
const ident=await createItem({orden})
console.log("IDENTIFICADOR")
console.log(ident);


setOrderId(ident);
setOrderReady(true);
setFormData({
  nombre: "",
  telefono: "",
  email: "",
});

setCartList([]);


alert("La compra fue un exito, tus datos fueron almacenados en orders")
//metodo insertar en la base de datos
    /*const db = getFirestore();
    db.collection('Orders')

      .add(orden)

      .then((resp) => {
        setOrderId(resp.id);
        setOrderReady(true);
      })
      .catch((err) => console.log(err))
      .finally(
        () => {
         
          setFormData({
            nombre: "",
            telefono: "",
            email: "",
          });

          setCartList([]); 
        }
        
      );*/
    
 

/********************************************************************************************* */










  };








/*******************************************************************************************/


  return (
    <div className="mt-10 sm:mt-8 border-solid border-2 border-indigo-100 p-8">
      <div className="md:grid md:grid-cols-3 md:gap-6">
        <div className="md:col-span-1">
          <div className="px-4 sm:px-0">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Personal Information
            </h3>
            <p className="mt-1 text-sm text-gray-600">
              Se recomienda utilizar un email donde puedas recibir la informacion
            </p>
          </div>
        </div>
        <div className="mt-5 md:mt-0 md:col-span-2">


{/**el formulario es el que captura ambos eventos, tanto el evento OnChange, como el evento OnSubmit**/}
          <form onChange={handleOnChange} onSubmit={handleOnSubmit}>

          <div className="col-span-6 sm:col-span-4">
                    <label
                      htmlFor="emailAdress"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email
                    </label>


                    <input
                      type="text"
                      name="emailAdress"
                      id="emailAdress"
                      autoComplete="email"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />


                  </div>

            <div className="shadow overflow-hidden sm:rounded-md">
              <div className="px-4 py-5 bg-white sm:p-6">
                <div className="grid grid-cols-6 gap-6">


                  <div className="col-span-6 sm:col-span-3">
                    
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Nombre
                    </label>


                    <input
                      type="text"
                      name="firstName"
                      id="firstName"
                      autoComplete="given-name"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />


                  </div>



                 



                  {/* 
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Apellido
                    </label>


                    <input
                      type="text"
                      name="lastName"
                      id="lastName"
                      autoComplete="family-name"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />


                  </div>
*/}


                  <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Telefono
                    </label>


                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      autoComplete="phone"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />


                  </div>


                </div>
              </div>



              <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                
                <button
                  type="submit"
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Guardar Datos
                </button>



              </div>
            </div>
          </form>
{/****************************************************************************************************/}



        </div>
      </div>
    </div>
  );
};
export default FormCount;
