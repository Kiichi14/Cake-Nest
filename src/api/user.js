import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from './firebase-config';
import fakeMenu2 from '../fakeData/fakeMenu';

export const getUser = async (idUser) => {
    const docRef = doc(db, "users", idUser);
    const docSnapshot = await getDoc(docRef);
    if(docSnapshot.exists()) {
        const userReceived = docSnapshot.data();
        console.log(userReceived);
        return userReceived;
    }
}

export const createUser = (userId) => {
    const docRef = doc(db, "users", userId);
    const data = {
        username: userId,
        menu: fakeMenu2
    }
    setDoc(docRef, data);
}