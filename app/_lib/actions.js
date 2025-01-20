'use server';

import { signIn, signOut } from "./auth";

export async function signInFunction() {
    return await signIn('google', {
        redirectTo: '/account'
    })
}

export async function signOutFunction() {
    await signOut({ redirectTo: '/' });
}