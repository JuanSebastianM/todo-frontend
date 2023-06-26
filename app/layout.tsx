import { ApolloClientProvider } from '@/app/components/ApolloClientProvider';
import AuthProvider from '@/app/components/AuthProvider';
import GlobalHeader from '@/app/components/GlobalHeader';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { getSession } from '@/utils/get-session';

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
  const session = await getSession();

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
