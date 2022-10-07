# Proyecto AkikoEcommerce

## 1. INSTALACIONES REALIZADAS:
## bootstrap
## firebase

# 2. COMPONENTES QUE FORMAN EL PROYECTO:


---
# Nabvar.jsx:
- Este componente se utiliza para crear una barra de menu simple.
- Contiene un Brand(con el nombre de la tienda)
- Contiene un listado de categorias clickeables
- Incorpora una libreria de estilo Bootstrap.

> Importa el componente CartWidget para mostrar el carrito.
> Realiza una destructuracion de `{Link}` que pertenece a `'react-router-dom'` para los enlaces.

---

# CartWidget.jsx:
- Importa `@fortawesome` para obtener de alli, el icono del carrito
- Importa `{ useCartContext }` el cual destructura de la ruta `../context/cartContext`
> Utiliza el metodo `iconCart()` que proviene de `useCartContext`, el cual fue importado, para llevar un conteo de los productos agregados al carrito.

> Utiliza `cartList` que proviene de `useCartContext`, el cual fue importado para saber si el carrito contiene productos, para ello utiliza `cartList.length === 0` dentro de un condicional ternario. En el caso que el carrito no contenga productos simplemente dibuja un `<span>`.

# ItemListContainer.jsx:
- Importa `'react'` destructurando `{useEffect,useState }`
- Importa `'react-router'` destructurando `{ useParams }`
- Importa el componente `'./ItemList'`
- Importa `'firebase/firestore'` destructurando `{collection, getDocs, getFirestore, query, where}`

> `datos` sera el `useState` creado de tipo array, el cual utiliza para cargar los productos encontrados en la base de datos a traves de `setDatos` luego de que `useEffect` nos brinde su resultado a traves de `.then`.

> El codigo dentro `useEffect` solo se ejecutara cada vez que haya un cambio en `idCategoria` valor que llegara utilizando `useParams()` a traves de la url, dicha url cambiara cada vez que el usuario seleccione una determinada categoria.

> El codigo `const db = getFirestore();` sera utilizado para iniciar la coneccion con la base de datos

> Si existe `idCategoria` cargara el `useState` llamado `datos` utilizando `where` para traer de la base de datos solo la categoria elegida por el usuario. En caso contrario si no existe `idCategoria` se trae todos los productos de la base de datos.

>Todo los productos cargados en `datos` seran pasados al componente llamado `ItemList` para que dicho componente ejecute su codigo fuente.

# Item.jsx:
- Importa `'react-bootstrap/Button'` para dibujar botones de bootstrap.
- Importa `'react-bootstrap/Card'` para dibujar tarjetas de bootstrap.
- Importa `'react-router-dom'` destructurando `{ Link }` para enviar el id del producto seleccionado al `router`.
>El boton llamado "ver detalle" es donde el usuario clickeara para ver el detalle del producto seleccionado, el cual sera pasado por url utilizando su "id", a traves del `<Link to={`/item/${id}`}>Ver detalle...</Link>` el cual utilizara `router` para luego invocar al componente llamado `ItemDetailContainer`.

# ItemList.jsx:
> Es un agrupador de un set de componentes item.js

>

>Recibira los datos desde el componente llamado `ItemListContainer` recordemos que `ItemListContainer` cargara el set de datos por la categoria seleccionada por el usuario.
> Al recibir los productos los recorrera con un `map` para ir dibujandolo en pantalla.

# ItemCount.jsx:
- Importa `'react'` destructurando `{ useEffect, useState }` 
> `ItemCount` recibira tres parametros los cuales son: `stock, initial y onAdd` que provienen del componente llamado `ItemDetail`.
>
>`initial` es el que cargara el `useState` llamado `count` utilizando un `useEffect` para que el codigo solo se ejecute al cambiar el `useState` llamado `count`

> Este componente contendra un boton "+" y un boton "-", que al clikearlo ejecutara el metodo `increment` o `decrement` el cual alterara el valor de `count`, activando el boton llamado "Agregar al carrito" el cual ejecutara el metodo llamado `onAdd(count)`.

# ItemDetail.jsx:

> ItemDetail recibe como parametro `{item}` que es el registro de datos obtenido en la busqueda de `itemDetailContainer`.

>
> Contiene el `useState` llamado `itemCount`.Si `itemCount` es cero, entonces dibujo el componente llamado `ItemCount`, que me dara la posibilidad de comprar mas productos.
> De lo contrario si `itemCount` no es cero, me habilitara el boton llamado "Termina mi compra". el cual a traves de `<Link to='/cart'>` me enviara por medio de `router` al componente llamado `Cart`. como se puede observar: `<Route path='/cart' element={<Cart />} />`

>

> Cuando presione el boton "agregar al carrito" del componente `ItemCount.jsx`, cargara con la cantidad comprada y los detalle del producto elegido en el metodo llamado `addToCart`, que proviene del contexto llamado `cartContext.js`


# cartContext.js:
> En `cartContext` tendremos todos los elementos que utilizaremos de forma global en todo el proyecto.

>

> La palabra reservada `children` hace referencia a que envolvera a todos sus componentes hijos.

>

> `cartList` es un `useState` que utiliza para ir guardando en el carrito los productos.

>

> El metodo `addToCart` recibe como parametro `objProduct`.Utilizando un condicional pregunta si el id del producto ingresado a traves de `objProduct` ya existe dentro del carrito `cartList`. Si exite solamente suma la cantidad en dicha posicion del producto, de lo contrario si el producto no existe en el carrito entonces lo agrega al `useState` llamado  `cartList`. que es el que representa al carrito de compras.

>

> `const clearList = () => setCartList([]);` Este metodo es utilizado para borrar el carrito por completo.

>

> `totalPrice = ()` es utilizado para ir sumando precio * cantidad para calcular el total en carrito 

>

> `const removeProduct = (id) => {setCartList(cartList.filter((newProduct) => newProduct.product.id !== id));};` 
RemoveProduct es utilizada para eliminar del carrito un producto.

> `newProduct` es la variable que usa `filter` para trabajar con `cartList`, para poder filtrar su contenido, ya que incorporara a todo `cartList` menos al que el usuario selecciono para borrar.

>

>`const iconCart = ()` Este metodo es utilizado para acumular el contador de productos que va agregando el usuario al carrito. es decir, es el numero que se encuentra al lado del carrito indicando cuantos productos va comprando el usuario. 

> `value` contendra todos los elementos globales que compartira `cartContext`.





# Cart.jsx:

- `import { Link } from 'react-router-dom';`
- `import { useCartContext } from "../context/cartContext";`
- `import PriceTotal from './PriceTotal';`
- `import FormCount from './FormCount'`

> orderReady es un `useState` de `cartContext`, si es verdadero mostrara el numero de compra utilizando `orderId` que tambien es de `cartContext` 

>

> Si `orderReady  es false Y cartList.length === 0 ` entonces indicara que el carrito no contiene productos, de lo contrario recorrera `cartList` utilizando un `map`, para ir dibujando los productos que se encuentran en el carrito. tambien bibujara un boton que contendra el metodo `removeProduct` que proviene de `cartContext` y al presionarlo eliminara el producto de `cartList`

>

> Si `cartList.length > 0` entonces dibujara el componente llamado `<FormCount/>` y el componente llamado `<PriceTotal />`


# ItemDetailContainer.jsx:

- `import React,{useEffect,useState } from 'react';`
- `import { useParams } from "react-router";`
- `import ItemDetail from "./ItemDetail";`
- `import { doc, getDoc, getFirestore } from 'firebase/firestore';`

> `const [dato, setDato] = useState({})` lo utilizaremos para guardar los productos encontrados en la base de datos.

>

> `const { idItem } = useParams();` lo utilizaremos para saber el id del producto que selecciona el usuario, a traves de router.

> Utiliza  `useEffect` para ejecutar un determinado codigo para traer productos de la coleccion llamada `Productos` en funcion de su `idItem` para ello utilizaremos `db, doc y getDoc de firebase`
dicho codigo solo se ejecutara cada vez que haya un cambio en `idItem`
> 

> Al obtener el resultado del `useEffect` guardamos dicho resultado en el `useState` llamado `dato` adjuntando el `id` automatico que nos brinda `firebase`.

>

> al `useState` llamado `dato` se lo pasamos al componente llamado ` <ItemDetail item={dato} />`



# getFireStoreApp.jsx:
- `import { initializeApp } from "firebase/app";`

    authDomain: "akikoecommerce.firebaseapp.com",
> En `const firebaseConfig = {` colocaremos toda la configuracion que nos brindara `firebase` para poder conectarnos a la base de datos, como el `apiKey,authDomain,projectId,storageBucket`.




# FormCount.jsx:

> Lo utiliza para guardar en la base de datos los datos del usuario que realizo la compra y la factura de la orden de compra junto con la fecha y el precio total comprado.

- `import {useState} from 'react';`
- `import { createItem } from '../config/api'`
- `import { useCartContext } from "../context/cartContext";`


> `const { cartList, totalPrice, setOrderReady, setOrderId, setCartList } =useCartContext();`

>

> `const [formData, setFormData] = useState({});` 

>

> Dentro de un formulario le pediremos al usuario que coloque el mail, el nombre y el telefono al precionar el boton llamado "Guardar Datos" ejecutara el metodo llamado `handleOnSubmit` el cual se encargara de crear un array llamado `let orden = {};`, para guardar los datos con la estructura de la coleccion llamada `Orders` de la base de datos.

>

> En el array llamado `orden` guardaremos la fecha de la orden `orden.fecha = new Date()`, guardaremos los datos personales cargados en el formulario por el usuario `orden.comprador = formData;`, guardaremos el precio total de compra `orden.total = totalPrice();` y guardaremos los productos que contenga el carrito para ello recorreremos con un `map` el contenido de `cartList`

> Para guardar en la base de datos utilizaremos el metodo `createItem` que se encuentra en la `api.js`, `const ident=await createItem({orden})`

# PriceTotal.jsx:
- `import { useCartContext } from "../context/cartContext";`
- `const { totalPrice } = useCartContext();`

> mostrara el Total a pagar utilizando el metodo `TotalPrice()`, ` Total a pagar :  totalPrice()`

# api.js:

- `import { collection, getDocs, query, doc, getDoc, addDoc, deleteDoc, updateDoc,  where,getFirestore} from "firebase/firestore"`

> createItem: metodo utilizado para traer la coleccion llamada `Orders`

>

> getItems: metodo utilizado para traer la coleccion llamada `Productos`

>


> getItemsByCondition: metodo utilizado para traer la coleccion llamada `Productos` utilizando la condicion llamada `where` para traer el producto segun la categoria seleccionada por el usuario.

>

> getItemById: metodo utilizado para traer la coleccion llamada `Orders`


# Home.jsx:
> Aqui especifica el enrutador, el cual en funcion a la url solicitada derivara al usuario hacia un componente especifico.
pasandole por url el identificador del producto o categoria elegida.

> <Route path='/' element={<ItemListContainer />} />

> <Route path='/categoria/:idCategory' element={<ItemListContainer /> }/>


> <Route path='/item/:idItem' element={<ItemDetailContainer />} />


> <Route path='/cart' element={<Cart />} />


> <Route path="/order/:orderId" element={<Order />} />


# customFetch.js:
> Contiene una promesa que la resolvera en un tiempo determinado, el cual lo indicara el usuario, este esta en desuso porque se incorporo firebase.

# products.js:
> es la API de productos que utilizaba antes de incorporar firebase, ahora esta en desuso.