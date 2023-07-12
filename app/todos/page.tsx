import TodoForm from "@/app/components/TodoForm";
import Todo from '@/app/components/Todo';
import { graphql } from '@/gql';
import { Task } from '@/gql/graphql';
import { Metadata } from 'next';
import { TodoModeEnum } from "@/utils/constants";
import { getSession } from "@/utils/get-session";
import { getClient } from "@/lib/apolloClient";

export const metadata: Metadata = {
  title: 'Your To-dos',
};

const GetAllTasksByAuthorQuery = graphql(`query GetTasksByAuthorEmail($authorEmail: String!) {
  tasks(authorEmail: $authorEmail) {
    authorEmail
    id
    title
    description
    done
    createdAt
    updatedAt
  }
}`);

export default async function TodosPage() {
  const session = await getSession();

  const graphqlClient = getClient();

  const { data } = await graphqlClient.query({
    query: GetAllTasksByAuthorQuery,
    variables: {
      authorEmail: session?.user?.email ?? '',
    }
  });

  const user = session?.user;

  const areThereTasks = !!data.tasks?.length;
  const introSentence = `Hey, ${user?.name ?? 'user'} 👋! ${
    areThereTasks
      ? 'These are all of your to-dos:'
      : "You don't have any to-dos yet."
  }`;
  
  return (
    <section className="min-h-screen px-8 pt-20">
      <header className="mb-12">
        <h1>{introSentence}</h1>
      </header>
      <div>
        <TodoForm
          authorEmail={user?.email ?? ''}
          mode={TodoModeEnum.CREATING}
        />
      </div>
      {areThereTasks ? (
        <div className="max-w-xl mx-auto mt-12">
          {data.tasks!.map((task) => {
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
          })}
        </div>
      ) : null}
    </section>
  );
}
