import { initializeApp } from "firebase/app";

const firebaseConfig = {

    apiKey: "AIzaSyD92Wa0jwYqsPt07Flf6yyVZ7Pka_J9myk",

    authDomain: "akikoecommerce.firebaseapp.com",

    projectId: "akikoecommerce",

    storageBucket: "akikoecommerce.appspot.com",

   
};

const app = initializeApp(firebaseConfig);

export const getFireStoreApp = () => {
    return app
}