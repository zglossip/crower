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
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
const documents = {
    "mutation DeleteEvent($id: ID!) {\n  deleteEvent(id: $id)\n}": types.DeleteEventDocument,
    "mutation UpsertEvent($id: ID, $description: String!, $eventDate: String!, $startTime: Int!, $endTime: Int!) {\n  upsertEvent(\n    id: $id\n    description: $description\n    eventDate: $eventDate\n    startTime: $startTime\n    endTime: $endTime\n  ) {\n    id\n    description\n    eventDate\n    startTime\n    endTime\n  }\n}": types.UpsertEventDocument,
    "query SearchEventsByDate($eventDate: String!) {\n  searchEventsByDate(eventDate: $eventDate) {\n    id\n    description\n  }\n}": types.SearchEventsByDateDocument,
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
export function graphql(source: "mutation DeleteEvent($id: ID!) {\n  deleteEvent(id: $id)\n}"): (typeof documents)["mutation DeleteEvent($id: ID!) {\n  deleteEvent(id: $id)\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation UpsertEvent($id: ID, $description: String!, $eventDate: String!, $startTime: Int!, $endTime: Int!) {\n  upsertEvent(\n    id: $id\n    description: $description\n    eventDate: $eventDate\n    startTime: $startTime\n    endTime: $endTime\n  ) {\n    id\n    description\n    eventDate\n    startTime\n    endTime\n  }\n}"): (typeof documents)["mutation UpsertEvent($id: ID, $description: String!, $eventDate: String!, $startTime: Int!, $endTime: Int!) {\n  upsertEvent(\n    id: $id\n    description: $description\n    eventDate: $eventDate\n    startTime: $startTime\n    endTime: $endTime\n  ) {\n    id\n    description\n    eventDate\n    startTime\n    endTime\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query SearchEventsByDate($eventDate: String!) {\n  searchEventsByDate(eventDate: $eventDate) {\n    id\n    description\n  }\n}"): (typeof documents)["query SearchEventsByDate($eventDate: String!) {\n  searchEventsByDate(eventDate: $eventDate) {\n    id\n    description\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;