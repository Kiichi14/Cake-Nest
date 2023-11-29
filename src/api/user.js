import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from './firebase-config';
import fakeMenu2 from '../fakeData/fakeMenu';

export const getUser = async (idUser) => {
    const docRef = doc(db, "users", idUser);
    const docSnapshot = await getDoc(docRef);
    if(docSnapshot.exists()) {
        const userReceived = docSnapshot.data();
        return userReceived;
    }
}

export const createUser = async (userId) => {
    const docRef = doc(db, "users", userId);
    const data = {
        username: userId,
        menu: fakeMenu2
    }
    try {
        await setDoc(docRef, data);
        return data;
    } catch (error) {
        console.error("Error creating user:", error);
        throw error;
    }
}