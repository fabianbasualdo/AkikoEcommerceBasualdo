let is_ok =true;

//desde aqui declaro la promesa, a la cual le paso por parametro, el time que es el tiempo del serTimeout
//task es el parametro que utilizo para pasarle la lista de mis productos utilizando productos.js
const customFetch=(time,task)=>{
return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(is_ok){
            resolve(task);
        }else {
            reject("error en el customFetch:");
        }
    },time);
});

}
export default customFetch;