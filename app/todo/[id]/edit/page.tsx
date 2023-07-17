import TodoForm from "@/app/components/TodoForm";
import { graphql } from "@/gql";
import { getClient } from "@/lib/apolloClient";
import { TodoModeEnum } from "@/utils/constants";
import { getSession } from "@/utils/get-session";
import { notFound } from "next/navigation";

const GetTaskByIdQuery = graphql(`query GetTaskById($taskId: ID!) {
  task(id: $taskId) {
    authorEmail
    id
    title
    description
    done
    createdAt
    updatedAt
  }
}`)

const EditTodoPage = async ({
  params,
}: {
  params: { id: string };
}) => {
  const session = await getSession();

  const userEmail = session?.user?.email || '';

  const graphqlClient = getClient();

  const { data } = await graphqlClient.query({
    query: GetTaskByIdQuery,
    variables: {
      taskId: params.id,
    },
  });

  const task = data.task;

  if (!task || task.authorEmail !== userEmail) {
    notFound();
  }

  return (
    <section className="min-h-screen px-8 flex flex-col justify-center items-center">
      <h2 className="mb-8 font-bold text-2xl">
        Editing To-do
      </h2>
      <TodoForm
        mode={TodoModeEnum.EDITING}
        authorEmail={userEmail}
        todoData={task}
      />
    </section>
  );
};

export default EditTodoPage;
