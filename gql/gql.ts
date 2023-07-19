/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "mutation CreateTask($authorEmail: String!, $task: TaskInput!) {\n  createTask(authorEmail: $authorEmail, task: $task) {\n    code\n    success\n    message\n    task {\n      authorEmail\n      id\n      title\n      description\n      done\n      createdAt\n      updatedAt\n    }\n  }\n}": types.CreateTaskDocument,
    "mutation DeleteTask($taskId: ID!) {\n  deleteTask(id: $taskId) {\n    code\n    success\n    message\n  }\n}": types.DeleteTaskDocument,
    "mutation EditTaskBody($taskId: ID!, $newTaskBody: TaskInput!) {\n  editTaskBody(id: $taskId, task: $newTaskBody) {\n    code\n    success\n    message\n    task {\n      authorEmail\n      id\n      title\n      description\n      done\n      createdAt\n      updatedAt\n    }\n  }\n}": types.EditTaskBodyDocument,
    "query GetTasksByAuthorEmail($authorEmail: String!) {\n  tasks(authorEmail: $authorEmail) {\n    authorEmail\n    id\n    title\n    description\n    done\n    createdAt\n    updatedAt\n  }\n}": types.GetTasksByAuthorEmailDocument,
    "query GetTaskById($taskId: ID!) {\n  task(id: $taskId) {\n    authorEmail\n    id\n    title\n    description\n    done\n    createdAt\n    updatedAt\n  }\n}": types.GetTaskByIdDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CreateTask($authorEmail: String!, $task: TaskInput!) {\n  createTask(authorEmail: $authorEmail, task: $task) {\n    code\n    success\n    message\n    task {\n      authorEmail\n      id\n      title\n      description\n      done\n      createdAt\n      updatedAt\n    }\n  }\n}"): (typeof documents)["mutation CreateTask($authorEmail: String!, $task: TaskInput!) {\n  createTask(authorEmail: $authorEmail, task: $task) {\n    code\n    success\n    message\n    task {\n      authorEmail\n      id\n      title\n      description\n      done\n      createdAt\n      updatedAt\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation DeleteTask($taskId: ID!) {\n  deleteTask(id: $taskId) {\n    code\n    success\n    message\n  }\n}"): (typeof documents)["mutation DeleteTask($taskId: ID!) {\n  deleteTask(id: $taskId) {\n    code\n    success\n    message\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation EditTaskBody($taskId: ID!, $newTaskBody: TaskInput!) {\n  editTaskBody(id: $taskId, task: $newTaskBody) {\n    code\n    success\n    message\n    task {\n      authorEmail\n      id\n      title\n      description\n      done\n      createdAt\n      updatedAt\n    }\n  }\n}"): (typeof documents)["mutation EditTaskBody($taskId: ID!, $newTaskBody: TaskInput!) {\n  editTaskBody(id: $taskId, task: $newTaskBody) {\n    code\n    success\n    message\n    task {\n      authorEmail\n      id\n      title\n      description\n      done\n      createdAt\n      updatedAt\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetTasksByAuthorEmail($authorEmail: String!) {\n  tasks(authorEmail: $authorEmail) {\n    authorEmail\n    id\n    title\n    description\n    done\n    createdAt\n    updatedAt\n  }\n}"): (typeof documents)["query GetTasksByAuthorEmail($authorEmail: String!) {\n  tasks(authorEmail: $authorEmail) {\n    authorEmail\n    id\n    title\n    description\n    done\n    createdAt\n    updatedAt\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetTaskById($taskId: ID!) {\n  task(id: $taskId) {\n    authorEmail\n    id\n    title\n    description\n    done\n    createdAt\n    updatedAt\n  }\n}"): (typeof documents)["query GetTaskById($taskId: ID!) {\n  task(id: $taskId) {\n    authorEmail\n    id\n    title\n    description\n    done\n    createdAt\n    updatedAt\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;