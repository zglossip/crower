package com.zglossip.thrive.config;

import com.zglossip.thrive.exceptions.GraphQLException;
import graphql.GraphQLError;
import graphql.GraphqlErrorBuilder;
import graphql.schema.DataFetchingEnvironment;
import org.springframework.graphql.execution.DataFetcherExceptionResolverAdapter;
import org.springframework.stereotype.Component;

import java.util.Map;

import static com.zglossip.thrive.exceptions.ErrorCode.UNKNOWN;

@Component
public class CustomGraphQLExceptionResolver extends DataFetcherExceptionResolverAdapter {

  @Override
  protected GraphQLError resolveToSingleError(Throwable ex, DataFetchingEnvironment env) {
    if (ex instanceof GraphQLException gqlEx) {
      return GraphqlErrorBuilder.newError()
          .message(gqlEx.getMessage())
          .path(env.getExecutionStepInfo().getPath())
          .errorType(graphql.ErrorType.ValidationError)
          .extensions(Map.of("errorCode", gqlEx.getErrorCode()))
          .build();
    }

    return GraphQLError.newError()
        .message(ex.getMessage())
        .path(env.getExecutionStepInfo().getPath())
        .errorType(graphql.ErrorType.ExecutionAborted)
        .extensions(Map.of("errorCode", UNKNOWN))
        .build();
  }

}
