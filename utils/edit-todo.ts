import { graphql } from "@/gql";
import { Task } from "@/gql/graphql";
import { getClient } from "@/lib/apolloClient";

const editTaskByIdMutation = graphql(`mutation EditTaskById($id: ID!, $title: String, $description: String) {
  editTask(id: $id, title: $title, description: $description) {
    authorEmail
    id
    title
    description
    done
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
    variables: newTaskData,
  });

   if (errors) {
     throw new Error(errors[0].message);
   }

   console.log(data);

   return data?.editTask;
};