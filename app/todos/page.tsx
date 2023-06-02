'use client';

import { Metadata } from 'next';
import { useSession } from 'next-auth/react';

export const metadata: Metadata = {
  title: 'Your To-dos',
};

export default function TodosPage() {
  const { data: session } = useSession();

  return (
    <section className="min-h-screen px-8 pt-20">
      <header>
        <h1>
          Hey, {session?.user?.name ?? 'user'} 👋!
          These are all of your to-dos:
        </h1>
      </header>
    </section>
  );
}
