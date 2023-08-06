// lucia.ts
import { lucia } from 'lucia';
import 'lucia/polyfill/node';
import { nextjs } from 'lucia/middleware';
import { prisma } from '@lucia-auth/adapter-prisma';
import { db } from './db';
import { cache } from 'react';
import { cookies } from 'next/headers';

// expect error
export const auth = lucia({
  env: 'DEV', // "PROD" if deployed to HTTPS
  adapter: prisma(db, {
    key: 'key',
    user: 'user',
    session: 'session',
  }),
  middleware: nextjs(),
  sessionCookie: {
    expires: false,
  },
  getUserAttributes: (data) => {
    return {
      username: data.username,
    };
  },
});

export type Auth = typeof auth;

export const getPageSession = cache(() => {
  const authRequest = auth.handleRequest({
    request: null,
    cookies,
  });
  return authRequest.validate();
});
