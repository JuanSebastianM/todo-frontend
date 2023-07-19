import DeleteTodoButton from '@/app/components/DeleteTodoButton';
import {
  TODO_MODE_BUTTONS,
  TodoModeEnum,
} from '@/utils/constants';
import Link from 'next/link';

interface TodoReadingButtonsProps {
  todoId: string;
}

const TodoReadingButtons = ({
  todoId,
}: TodoReadingButtonsProps) => {
  const buttonTypes =
    TODO_MODE_BUTTONS[TodoModeEnum.READING];

  return (
    <>
      <Link
        href={`/todo/${todoId}/edit`}
        className="btn-secondary"
      >
        {buttonTypes.success}
      </Link>
      <DeleteTodoButton taskId={todoId}>
        {buttonTypes.danger}
      </DeleteTodoButton>
    </>
  );
};

export default TodoReadingButtons;
