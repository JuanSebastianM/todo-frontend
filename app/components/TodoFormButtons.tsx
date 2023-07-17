import {
  TODO_MODE_BUTTONS,
  TodoModeEnum,
} from '@/utils/constants';
import Link from "next/link";

interface TodoFormButtonsProps {
  mode: TodoModeEnum;
}

const TodoFormButtons = ({ mode }: TodoFormButtonsProps) => {
  const buttonTypes = TODO_MODE_BUTTONS[mode];

  const isReadingMode = mode === TodoModeEnum.READING;

  if (isReadingMode) {
    return null;
  }

  return (
    <>
      <button type="submit" className="btn-secondary">
        {buttonTypes.success}
      </button>
      {buttonTypes.danger ? (
        <Link href="/todos" className="btn-tertiary">
          {buttonTypes.danger}
        </Link>
      ) : null}
    </>
  );
};

export default TodoFormButtons;
