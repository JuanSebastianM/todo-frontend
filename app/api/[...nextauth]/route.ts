import NextAuth from 'next-auth';

const handler = NextAuth({
  // Configure one or more authentication providers
  providers: [
    // Providers...
  ],
});

export { handler as GET, handler as POST };
