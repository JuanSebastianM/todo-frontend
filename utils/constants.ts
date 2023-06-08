import { gql } from '@apollo/client';

export type TodoMode = 'editing' | 'reading' | 'creating';

interface TodoButtonTypes {
  success: string;
  danger?: string;
}

export const GET_ALL_TASKS = gql`
  query GetAllTasks {
    getAllTasks {
      id
      title
      description
      done
    }
  }
`;

export const TODO_MODE_BUTTONS: Record<
  TodoMode,
  TodoButtonTypes
> = {
  creating: {
    success: 'Create',
  },
  editing: {
    success: 'Save',
    danger: 'Cancel',
  },
  reading: {
    success: 'Edit',
    danger: 'Delete',
  },
};
