import TodoButtons from '@/app/components/TodoButtons';
import { Task } from '@/gql/graphql';
import { TodoModeEnum } from '@/utils/constants';
import { addTodo } from '@/utils/add-todo';
import { redirect } from 'next/navigation';
import { editTodo } from '@/utils/edit-todo';

interface TodoFormProps {
  authorEmail: string;
  mode: TodoModeEnum;
  todoData?: Task;
}

const TodoForm = ({
  authorEmail,
  mode,
  todoData,
}: TodoFormProps) => {
  async function action(formData: FormData) {
    'use server';
    const title = formData.get('title');
    const description = formData.get('description');

    if (!title || typeof title !== 'string' || !authorEmail)
      return;
    if (description && typeof description !== 'string')
      return;

    if (mode === TodoModeEnum.CREATING) {
      await addTodo({
        title,
        description,
        authorEmail,
      });
    }

    if (mode === TodoModeEnum.EDITING) {
      await editTodo({
        id: todoData?.id ?? '',
        title,
        description,
        authorEmail,
      });
    }

    redirect('/todos');
  }

  return (
    <form action={action}>
      <div className="flex flex-col justify-center items-center gap-4 mb-4 lg:mb-0">
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            defaultValue={todoData?.title}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <input
            type="text"
            name="description"
            id="description"
            defaultValue={todoData?.description ?? ''}
          />
        </div>
      </div>
      <div className="flex justify-center items-center gap-4">
        <TodoButtons mode={mode} />
      </div>
    </form>
  );
};

export default TodoForm;
