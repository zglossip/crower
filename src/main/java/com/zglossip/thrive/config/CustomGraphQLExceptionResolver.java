package com.zglossip.thrive.config;

import com.zglossip.thrive.exceptions.GraphQLException;
import graphql.GraphQLError;
import graphql.GraphqlErrorBuilder;
import graphql.schema.DataFetchingEnvironment;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.graphql.execution.DataFetcherExceptionResolverAdapter;
import org.springframework.stereotype.Component;

import java.io.PrintWriter;
import java.io.StringWriter;
import java.util.Map;

import static com.zglossip.thrive.exceptions.ErrorCode.UNKNOWN;

@Component
public class CustomGraphQLExceptionResolver extends DataFetcherExceptionResolverAdapter {

  private static final Logger logger = LoggerFactory.getLogger(CustomGraphQLExceptionResolver.class);

  @Override
  protected GraphQLError resolveToSingleError(Throwable ex, DataFetchingEnvironment env) {
    StringWriter sw = new StringWriter();
    PrintWriter pw = new PrintWriter(sw);
    ex.printStackTrace(pw);
    String stackTraceString = sw.toString();
    logger.error(stackTraceString);
    
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
