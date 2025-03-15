import NextAuth from 'next-auth';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { prisma } from '@/configuration/prisma';
import Resend from 'next-auth/providers/resend';
import { sendVerificationRequest } from '@/lib/send-request';

export const { handlers, signIn, signOut, auth } = NextAuth({
  secret: process.env.AUTH_SECRET,
  adapter: PrismaAdapter(prisma),
  pages: {
    signIn: '/',
  },
  providers: [
    Resend({
      apiKey: process.env.AUTH_RESEND_KEY,
      from: 'onboarding@resend.dev',
      server: process.env.EMAIL_SERVER,
      sendVerificationRequest({ identifier, url, provider, theme }) {
        sendVerificationRequest({
          identifier,
          url,
          provider,
          theme,
        });
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
});
