export enum TodoModeEnum {
  EDITING = 'editing',
  READING = 'reading',
  CREATING = 'creating',
}

interface TodoButtonTypes {
  success: string;
  danger?: string;
}

export const TODO_MODE_BUTTONS: Record<
  TodoModeEnum,
  TodoButtonTypes
> = {
  [TodoModeEnum.CREATING]: {
    success: 'Create',
  },
  [TodoModeEnum.EDITING]: {
    success: 'Save',
    danger: 'Cancel',
  },
  [TodoModeEnum.READING]: {
    success: 'Edit',
    danger: 'Delete',
  },
};
