/**
 * 
 * This file is for anything authentication wise for the application.
 * 
 */

import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase';

/**
 * This signs the user in with Google using Firebase.
 * 
 * @returns Firebase User Object
 */
export const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();

    try {
        const result = await signInWithPopup(auth, provider);

        const user = result.user;

        return user;
    } catch (error) {
        console.group(`[Authentication Error]`)
        console.error(error);
    }
}