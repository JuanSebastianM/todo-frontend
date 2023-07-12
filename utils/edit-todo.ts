import { graphql } from "@/gql";
import { Task } from "@/gql/graphql";
import { getClient } from "@/lib/apolloClient";

const editTaskByIdMutation = graphql(`mutation EditTaskBody($taskId: ID!, $newTaskBody: TaskInput!) {
  editTaskBody(id: $taskId, task: $newTaskBody) {
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

export async function editTodo(
  newTaskData: Pick<
    Task,
    'title' | 'description' | 'authorEmail' | 'id'
  >
): Promise<Task | null | undefined> {
  const graphqlClient = getClient();

  const { data, errors } = await graphqlClient.mutate({
    mutation: editTaskByIdMutation,
    variables: {
      newTaskBody: {
        title: newTaskData.title,
        description: newTaskData.description,
      },
      authorEmail: newTaskData.authorEmail,
      taskId: newTaskData.id,
    },
  });

  if (errors && errors.length > 0) {
    throw new Error(errors[0].message);
  }

  if (!data?.editTaskBody?.success) {
    throw new Error(data?.editTaskBody?.message);
  }

  console.log(data);

  return data?.editTaskBody.task;
};