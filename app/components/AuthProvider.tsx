'use client';

import { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';

interface AuthProviderProps {
  session: Session | null;
  children: React.ReactNode;
}

const AuthProvider = ({ session, children }: AuthProviderProps) => {
  return <SessionProvider session={session}>{children}</SessionProvider>;
};

export default AuthProvider;
