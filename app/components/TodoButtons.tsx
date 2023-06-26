'use client';

import {
  TODO_MODE_BUTTONS,
  TodoModeEnum,
} from '@/utils/constants';

interface TodoButtonsProps {
  mode: TodoModeEnum;
}

const TodoButtons = ({ mode }: TodoButtonsProps) => {
  const buttonTypes = TODO_MODE_BUTTONS[mode];

  const isSubmitButton = [
    TodoModeEnum.CREATING,
    TodoModeEnum.EDITING,
  ].includes(mode);
  
  const buttonTypeConfig = isSubmitButton
    ? 'submit'
    : 'button';

  return (
    <>
      <button
        type={buttonTypeConfig}
        className="btn-secondary"
      >
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

export default TodoButtons;
