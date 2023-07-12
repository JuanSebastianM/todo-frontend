import { graphql } from '@/gql';
import { Task } from '@/gql/graphql';
import { getClient } from '@/lib/apolloClient';

const createTodoMutation = graphql(`mutation CreateTask($authorEmail: String!, $task: TaskInput!) {
  createTask(authorEmail: $authorEmail, task: $task) {
    code
    success
    message
    task {
      authorEmail
      id
      title
      description
      done
      createdAt
      updatedAt
    }
  }
}`);

export async function addTodo(
  newTaskData: Pick<
    Task,
    'title' | 'description' | 'authorEmail'
  >
): Promise<Task | null | undefined> {
  const graphqlClient = getClient();

  const { data, errors } = await graphqlClient.mutate({
    mutation: createTodoMutation,
    variables: {
      authorEmail: newTaskData.authorEmail,
      task: {
        title: newTaskData.title,
        description: newTaskData.description,
      },
    },
  });

  if (errors && errors.length > 0) {
    throw new Error(errors[0].message);
  }

  if (!data?.createTask?.success) {
    throw new Error(data?.createTask?.message);
  }

  console.log(data);

  return data.createTask.task;
}
