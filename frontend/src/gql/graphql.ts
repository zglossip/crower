import gql from 'graphql-tag';
import * as VueApolloComposable from '@vue/apollo-composable';
import * as VueCompositionApi from '@vue/apollo-composable';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type ReactiveFunction<TParam> = () => TParam;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Event = {
  __typename?: 'Event';
  description: Scalars['String']['output'];
  endTime: Scalars['Int']['output'];
  eventDate: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  startTime: Scalars['Int']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  deleteEvent?: Maybe<Scalars['Boolean']['output']>;
  upsertEvent?: Maybe<Event>;
};


export type MutationDeleteEventArgs = {
  id: Scalars['ID']['input'];
};


export type MutationUpsertEventArgs = {
  description: Scalars['String']['input'];
  endTime: Scalars['Int']['input'];
  eventDate: Scalars['String']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
  startTime: Scalars['Int']['input'];
};

export type Query = {
  __typename?: 'Query';
  searchEventsByDate: Array<Event>;
};


export type QuerySearchEventsByDateArgs = {
  eventDate: Scalars['String']['input'];
};

export type DeleteEventMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteEventMutation = { __typename?: 'Mutation', deleteEvent?: boolean | null };

export type UpsertEventMutationVariables = Exact<{
  id?: InputMaybe<Scalars['ID']['input']>;
  description: Scalars['String']['input'];
  eventDate: Scalars['String']['input'];
  startTime: Scalars['Int']['input'];
  endTime: Scalars['Int']['input'];
}>;


export type UpsertEventMutation = { __typename?: 'Mutation', upsertEvent?: { __typename?: 'Event', id: string, description: string, eventDate: string, startTime: number, endTime: number } | null };

export type SearchEventsByDateQueryVariables = Exact<{
  eventDate: Scalars['String']['input'];
}>;


export type SearchEventsByDateQuery = { __typename?: 'Query', searchEventsByDate: Array<{ __typename?: 'Event', id: string, description: string }> };


export const DeleteEventDocument = gql`
    mutation DeleteEvent($id: ID!) {
  deleteEvent(id: $id)
}
    `;

/**
 * __useDeleteEventMutation__
 *
 * To run a mutation, you first call `useDeleteEventMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useDeleteEventMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useDeleteEventMutation({
 *   variables: {
 *     id: // value for 'id'
 *   },
 * });
 */
export function useDeleteEventMutation(options: VueApolloComposable.UseMutationOptions<DeleteEventMutation, DeleteEventMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<DeleteEventMutation, DeleteEventMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<DeleteEventMutation, DeleteEventMutationVariables>(DeleteEventDocument, options);
}
export type DeleteEventMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<DeleteEventMutation, DeleteEventMutationVariables>;
export const UpsertEventDocument = gql`
    mutation UpsertEvent($id: ID, $description: String!, $eventDate: String!, $startTime: Int!, $endTime: Int!) {
  upsertEvent(
    id: $id
    description: $description
    eventDate: $eventDate
    startTime: $startTime
    endTime: $endTime
  ) {
    id
    description
    eventDate
    startTime
    endTime
  }
}
    `;

/**
 * __useUpsertEventMutation__
 *
 * To run a mutation, you first call `useUpsertEventMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useUpsertEventMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useUpsertEventMutation({
 *   variables: {
 *     id: // value for 'id'
 *     description: // value for 'description'
 *     eventDate: // value for 'eventDate'
 *     startTime: // value for 'startTime'
 *     endTime: // value for 'endTime'
 *   },
 * });
 */
export function useUpsertEventMutation(options: VueApolloComposable.UseMutationOptions<UpsertEventMutation, UpsertEventMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<UpsertEventMutation, UpsertEventMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<UpsertEventMutation, UpsertEventMutationVariables>(UpsertEventDocument, options);
}
export type UpsertEventMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<UpsertEventMutation, UpsertEventMutationVariables>;
export const SearchEventsByDateDocument = gql`
    query SearchEventsByDate($eventDate: String!) {
  searchEventsByDate(eventDate: $eventDate) {
    id
    description
  }
}
    `;

/**
 * __useSearchEventsByDateQuery__
 *
 * To run a query within a Vue component, call `useSearchEventsByDateQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchEventsByDateQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useSearchEventsByDateQuery({
 *   eventDate: // value for 'eventDate'
 * });
 */
export function useSearchEventsByDateQuery(variables: SearchEventsByDateQueryVariables | VueCompositionApi.Ref<SearchEventsByDateQueryVariables> | ReactiveFunction<SearchEventsByDateQueryVariables>, options: VueApolloComposable.UseQueryOptions<SearchEventsByDateQuery, SearchEventsByDateQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<SearchEventsByDateQuery, SearchEventsByDateQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<SearchEventsByDateQuery, SearchEventsByDateQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<SearchEventsByDateQuery, SearchEventsByDateQueryVariables>(SearchEventsByDateDocument, variables, options);
}
export function useSearchEventsByDateLazyQuery(variables?: SearchEventsByDateQueryVariables | VueCompositionApi.Ref<SearchEventsByDateQueryVariables> | ReactiveFunction<SearchEventsByDateQueryVariables>, options: VueApolloComposable.UseQueryOptions<SearchEventsByDateQuery, SearchEventsByDateQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<SearchEventsByDateQuery, SearchEventsByDateQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<SearchEventsByDateQuery, SearchEventsByDateQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<SearchEventsByDateQuery, SearchEventsByDateQueryVariables>(SearchEventsByDateDocument, variables, options);
}
export type SearchEventsByDateQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<SearchEventsByDateQuery, SearchEventsByDateQueryVariables>;