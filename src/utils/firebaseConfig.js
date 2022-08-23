import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDpfw4nBdzGnXyLJXKVVA0Hdgr1ptMezGA",
  authDomain: "ecommerce-skateshop.firebaseapp.com",
  projectId: "ecommerce-skateshop",
  storageBucket: "ecommerce-skateshop.appspot.com",
  messagingSenderId: "69817069099",
  appId: "1:69817069099:web:3151b3f04129a19ad7846e"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
