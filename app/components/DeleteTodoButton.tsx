'use client';

import { graphql } from "@/gql";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/navigation";
import { PropsWithChildren } from "react";

interface DeleteTodoButtonProps {
  taskId: string;
}

const DeleteTodoMutation = graphql(`mutation DeleteTask($taskId: ID!) {
  deleteTask(id: $taskId) {
    code
    success
    message
  }
}`)

const DeleteTodoButton = ({
  taskId,
  children
}: PropsWithChildren<DeleteTodoButtonProps>) => {
  const router = useRouter();

  const [deleteTodo, { loading }] = useMutation(
    DeleteTodoMutation,
    {
      onCompleted: () => {
        router.refresh();
      },
    }
  );

  const handleClick = async () => {
    await deleteTodo({
      variables: {
        taskId,
      },
    });
  };

  return (
    <button
      type="button"
      className="btn-tertiary"
      onClick={handleClick}
      disabled={loading}
    >
      {children}
    </button>
  );
};

export default DeleteTodoButton;
