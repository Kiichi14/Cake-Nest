import { doc, updateDoc, getDoc, arrayRemove, arrayUnion } from 'firebase/firestore';
import { db } from './firebase-config';

export const deleteProduct = async (idUser, idProduct) => {
    const docRef = doc(db, "users", idUser);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        const userData = docSnap.data();
        const index = userData.menu.findIndex(item => item.id === idProduct);
        if (index !== -1) {
            await updateDoc(docRef, {
                menu: arrayRemove(userData.menu[index])
            });
        } else {
            console.error("ID du produit à supprimer non trouvé dans le tableau menu.");
        }
    } else {
        console.error("Document utilisateur non trouvé.");
    }
}

export const addProduct = async (idUser, item) => {
    const docRef = doc(db, "users", idUser);
    await updateDoc(docRef, {
        menu: arrayUnion(item)
    });
}