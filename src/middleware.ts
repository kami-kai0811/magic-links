// export { auth as middleware } from '@/configuration/auth';

import { authConfig } from './configuration/auth-config';
import NextAuth from 'next-auth';

export const { auth: middleware } = NextAuth(authConfig);
