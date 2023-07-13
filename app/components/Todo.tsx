import TodoButtons from '@/app/components/TodoButtons';
import { Task } from '@/gql/graphql';
import { TodoModeEnum } from '@/utils/constants';

const Todo = ({ title, description }: Task) => {  
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
        <TodoButtons mode={TodoModeEnum.READING} />
      </div>
    </article>
  );
};

export default Todo;
