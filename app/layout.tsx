import { ApolloClientProvider } from '@/app/components/ApolloClientProvider';
import AuthProvider from '@/app/components/AuthProvider';
import GlobalHeader from '@/app/components/GlobalHeader';
import { authOptions } from '@/authOptions';
import { Metadata } from 'next';
import { Session, getServerSession } from 'next-auth';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'To-do App',
  description:
    'A simple to-do app built with Next.js, TypeScript, GraphQL, MongoDB, and NextAuth.',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  let session: Session | null;

  try {
    session = await getServerSession(authOptions);
  } catch {
    session = null;
  }

  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider session={session}>
          <ApolloClientProvider>
            <GlobalHeader />
            <main>{children}</main>
          </ApolloClientProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
