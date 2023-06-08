'use client';

import Todo from '@/app/components/Todo';
import { GET_ALL_TASKS } from '@/utils/constants';
import { useSuspenseQuery } from '@apollo/experimental-nextjs-app-support/ssr';
import { Metadata } from 'next';
import { useSession } from 'next-auth/react';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Your To-dos',
};

export default function TodosPage() {
  const { data: session } = useSession();
  const { data } = useSuspenseQuery<{ getAllTasks: any[] }>(
    GET_ALL_TASKS
  );

  return (
    <section className="min-h-screen px-8 pt-20">
      <header>
        <h1>
          Hey, {session?.user?.name ?? 'user'} 👋! These are
          all of your to-dos:
        </h1>
      </header>
      <div className="max-w-xl mx-auto mt-12">
        {data.getAllTasks.map((task) => {
          const { id, title, description, authorEmail } =
            task;

          return (
            <Todo
              key={id}
              title={title}
              description={description}
              authorEmail={authorEmail}
            />
          );
        })}
      </div>
    </section>
  );
}
