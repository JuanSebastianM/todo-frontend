'use client';

import { signIn, useSession } from 'next-auth/react';
import Link from 'next/link';

const HomeCtaButton = () => {
  const { status } = useSession();

  if (status === 'authenticated') {
    return (
      <Link href="/todos" className="btn-primary">
        Check your to-dos
      </Link>
    );
  }

  return (
    <button
      onClick={() => signIn('github', { callbackUrl: '/todos' })}
      type="button"
      className="btn-primary"
    >
      Sign in with GitHub
    </button>
  );
};

export default HomeCtaButton;
