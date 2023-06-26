import { graphql } from "@/gql";
import { Task } from "@/gql/graphql";
import { getClient } from '@/lib/apolloClient';

const createTodoMutation = graphql(`mutation CreateTask($authorEmail: String!, $title: String!, $description: String) {
  createTask(authorEmail: $authorEmail, title: $title, description: $description) {
    authorEmail
    id
    title
    description
    done
  }
}`);

export async function addTodo(
  newTaskData: Pick<Task, 'title' | 'description' | 'authorEmail'>,
): Promise<Task | undefined> {
  const graphqlClient = getClient();

  const { data, errors } = await graphqlClient.mutate({
    mutation: createTodoMutation,
    variables: newTaskData,
  });

  if (errors) {
    throw new Error(errors[0].message);
  }

  console.log(data);
  
  return data?.createTask;
}
