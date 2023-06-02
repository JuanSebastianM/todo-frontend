'use client';

import {
  signOut,
  useSession,
} from 'next-auth/react';
import { useRouter } from 'next/navigation';

const LogOut = () => {
  const router = useRouter();

  const { status } = useSession();

  const handleClick = async () => {
    const data = await signOut({
      redirect: false,
      callbackUrl: '/',
    });

    router.push(data.url);
  };

  if (status === 'unauthenticated') return null;

  return (
    <button
      type="button"
      className="btn-primary"
      onClick={handleClick}
    >
      Log out
    </button>
  );
};

export default LogOut;
