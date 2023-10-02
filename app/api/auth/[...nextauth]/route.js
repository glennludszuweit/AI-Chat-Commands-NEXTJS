import User from '@models/user';
import { connectToDB } from '@utils/database';
import NextAuth from 'next-auth/next';
import GoogleProvider from 'next-auth/providers/google';

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_AUTH_ID,
      clientSecret: process.env.GOOGLE_AUTH_SECRET,
    }),
  ],
  callbacks: {
    async session({ session }) {
      const sessionUser = User.findOne({
        email: session.user.email,
      });
      if (sessionUser) {
        session.user.id = `${sessionUser._id}`;
      }

      return session;
    },
    async signIn({ profile }) {
      console.log(profile);
      try {
        await connectToDB();

        const userExist = await User.findOne({
          email: profile.email,
        });

        if (!userExist) {
          await User.create({
            email: profile.email,
            username: profile.name,
            image: profile.picture,
          });
        }

        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
  },
});

export { handler as GET, handler as POST };
