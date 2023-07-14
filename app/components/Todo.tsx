import TodoReadingButtons from '@/app/components/TodoReadingButtons';
import { Task } from '@/gql/graphql';

const Todo = ({ title, description, id }: Task) => {
  return (
    <article className="flex flex-col lg:flex-row items-center border border-black rounded-2xl max-w-xl w-full pb-4 lg:pb-0">
      <div className="flex flex-col items-center basis-1/2">
        <header className="p-4 text-center">
          <h2>{title}</h2>
        </header>
        <hr className="w-full" />
        <p className="p-4 text-center">
          {description || 'No description'}
        </p>
      </div>
      <div className="flex justify-center items-center gap-4 basis-1/2">
        <TodoReadingButtons todoId={id} />
      </div>
    </article>
  );
};

export default Todo;
