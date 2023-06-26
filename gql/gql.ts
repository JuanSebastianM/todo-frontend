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
    "mutation CreateTask($authorEmail: String!, $title: String!, $description: String) {\n  createTask(authorEmail: $authorEmail, title: $title, description: $description) {\n    authorEmail\n    id\n    title\n    description\n    done\n  }\n}": types.CreateTaskDocument,
    "mutation EditTaskById($id: ID!, $title: String, $description: String) {\n  editTask(id: $id, title: $title, description: $description) {\n    authorEmail\n    id\n    title\n    description\n    done\n  }\n}": types.EditTaskByIdDocument,
    "query GetAllTasks {\n  getAllTasks {\n    id\n    title\n    description\n    done\n    authorEmail\n  }\n}": types.GetAllTasksDocument,
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
export function graphql(source: "mutation CreateTask($authorEmail: String!, $title: String!, $description: String) {\n  createTask(authorEmail: $authorEmail, title: $title, description: $description) {\n    authorEmail\n    id\n    title\n    description\n    done\n  }\n}"): (typeof documents)["mutation CreateTask($authorEmail: String!, $title: String!, $description: String) {\n  createTask(authorEmail: $authorEmail, title: $title, description: $description) {\n    authorEmail\n    id\n    title\n    description\n    done\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation EditTaskById($id: ID!, $title: String, $description: String) {\n  editTask(id: $id, title: $title, description: $description) {\n    authorEmail\n    id\n    title\n    description\n    done\n  }\n}"): (typeof documents)["mutation EditTaskById($id: ID!, $title: String, $description: String) {\n  editTask(id: $id, title: $title, description: $description) {\n    authorEmail\n    id\n    title\n    description\n    done\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetAllTasks {\n  getAllTasks {\n    id\n    title\n    description\n    done\n    authorEmail\n  }\n}"): (typeof documents)["query GetAllTasks {\n  getAllTasks {\n    id\n    title\n    description\n    done\n    authorEmail\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;