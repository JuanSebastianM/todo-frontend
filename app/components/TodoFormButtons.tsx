import {
  TODO_MODE_BUTTONS,
  TodoModeEnum,
} from '@/utils/constants';

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
        <button type="button" className="btn-tertiary">
          {buttonTypes.danger}
        </button>
      ) : null}
    </>
  );
};

export default TodoFormButtons;
