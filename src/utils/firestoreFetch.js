import { collection, doc, getDoc, getDocs, getFirestore, orderBy, query, where } from "firebase/firestore";

export const firestoreFetch = async (id) =>{

    let q;
    const db = getFirestore();

    if (id) {
        q = query (collection(db, "products"), where("categoria", "==", id));
    }else {
        q = query(collection(db, "products"), orderBy("nombre"));
    }

    const querySnapshot = await getDocs(q);
    const dataFromFirestore = querySnapshot.docs.map(document => ({
        id: document.id,
        ...document.data()
    }));
    return dataFromFirestore;

}

export const firestoreFetchOne = async (detailId) => {
    const db = getFirestore();
    const docRef = doc(db, "products", detailId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()){
    let result = {
        id: detailId,
        ...docSnap.data(),
     };
    return result;
     
    }else{
        console.log("no existe!");
    }
}