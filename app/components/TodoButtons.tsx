'use client';

import {
  TODO_MODE_BUTTONS,
  TodoModeEnum,
} from '@/utils/constants';

interface TodoButtonsProps {
  authorEmail: string;
  mode: TodoModeEnum;
}

const TodoButtons = ({
  authorEmail,
  mode,
}: TodoButtonsProps) => {
  const buttonTypes = TODO_MODE_BUTTONS[mode];

  return (
    <>
      <button type="button" className="btn-secondary">
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
