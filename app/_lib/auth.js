import NextAuth from 'next-auth';
import Google from 'next-auth/providers/google';
import { createGuest, getGuest } from './data-service';

const authConfig = {
    providers: [
        Google({
            clientId: process.env.AUTH_GOOGLE_ID,
            clientSecret: process.env.AUTH_GOOGLE_SECRET,
        }),
    ],
    callbacks: {
        authorized({ auth, response }) {
            return !!auth?.user;
        },
        async signIn({ user, account, profile }) {
            try {
                const existingUser = await getGuest(user.email);
                if (!existingUser) {
                    await createGuest({
                        // id: user.id,
                        fullName: user.name,
                        email: user.email,
                        // image: profile.picture,
                    });
                }
                return true;
            } catch (error) {
                return false;
            }
        },
        async session({ session, user }) {
            const guest = await getGuest(session.user.email);
            console.log('srnfkjrefnkejrfer', guest, session.user.email)
            session.user.guestId = guest?.id;
            return session;
        }
    },
    pages: {
        signIn: '/login',
    }
}

export const {
    auth,
    signIn,
    signOut,
    handlers: { GET, POST }
} = NextAuth(authConfig)