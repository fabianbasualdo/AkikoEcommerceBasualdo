const productos =[
{
id:20,
nombre:"Producto 1",
stock:9,
costo: 140,
descripcion:"Producto 1 contiene un metal reforzado, de primera calidad",
imagen:["logo.png"],
idcategoria:1,
categoria:{
    nombre:"ss",
    id:1
}
},
{
    id:21,
    nombre:"Producto 2",
    stock:5,
    costo: 145,
    descripcion:"Producto 2 es un producto que se destaca por su confortable resistencia a la humedad",
    imagen:["logo.png"],
    idcategoria:2,
    categoria:{
        nombre:"ee",
        id:2
    }
    
    }
];
module.exports = {
    productos,
  }
