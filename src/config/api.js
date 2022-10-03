import { collection, getDocs, query, doc, getDoc, addDoc, deleteDoc, updateDoc,  where,getFirestore} from "firebase/firestore"
//import { db } from '../config/getFireStoreApp.jsx'
//const db=Firestore();
// CREATE
export const createItem = async(obj) => {
    const db=getFirestore();
    const colRef = collection(db, 'Orders')
    const data = await addDoc(colRef, obj)
    return data.id
}


// UPDATE
export const updateItem = async (id, obj) => {
    const db=getFirestore();
    const colRef = collection(db,'Productos')
    await updateDoc(doc(colRef, id), obj)
}

// READ
export const getItems= async ()  => {
    const db=getFirestore();
    const colRef = collection(db, 'Productos')
    const result = await getDocs(query(colRef))
    return getArrayFromCollection(result);
}

// READ WITH WHERE
// Tener en cuenta que el tipo de dato de la condición debe coincidir con el tipo de dato que hay en Firebase o no obtendré un dato de respuesta
export const getItemsByCondition = async (value) => {
    const db=getFirestore();
    const colRef = collection(db, 'Productos')
    const result = await getDocs(query(colRef, where('idcategoria', '==', value)))
    return getArrayFromCollection(result)
}

export const getItemById = async (id) => {
    const db=getFirestore();
    const colRef = collection(db,'Orders')
    const result = await getDoc(doc(colRef, id))
    return result.data()
}

// DELETE
export const deleteItem = async (id) => {
    const db=getFirestore();
    const colRef = collection(db, 'Productos')
    await deleteDoc(doc(colRef, id))
}

const getArrayFromCollection = (collection) => {
    return collection.docs.map(doc => {
        return { ...doc.data(), id: doc.id }
    })
}