'use client';

import Todo from '@/app/components/Todo';
import { graphql } from '@/gql';
import { Task } from '@/gql/graphql';
import { useSuspenseQuery } from '@apollo/experimental-nextjs-app-support/ssr';
import { Metadata } from 'next';
import { useSession } from 'next-auth/react';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Your To-dos',
};

const GetAllTasksQuery = graphql(`query GetAllTasks {
  getAllTasks {
    id
    title
    description
    done
    authorEmail
  }
}`);

export default function TodosPage() {
  const { data: session } = useSession();
  const { data } = useSuspenseQuery(GetAllTasksQuery);

  const areThereTasks = !!data.getAllTasks?.length;
  const introSentence = areThereTasks
    ? 'These are all of your to-dos:'
    : "You don't have any to-dos yet.";

  return (
    <section className="min-h-screen px-8 pt-20">
      <header>
        <h1>
          Hey, {session?.user?.name ?? 'user'} 👋!{' '}
          {introSentence}
        </h1>
      </header>
      <div className="max-w-xl mx-auto mt-12">
        {areThereTasks
          ? data.getAllTasks!.map((task) => {
              const {
                id,
                title,
                description,
                done,
                authorEmail,
              } = task as Task;

              return (
                <Todo
                  key={id}
                  title={title}
                  description={description}
                  authorEmail={authorEmail}
                  done={done}
                  id={id}
                />
              );
            })
          : null}
      </div>
    </section>
  );
}
