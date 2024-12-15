package com.zglossip.thrive.exceptions;

public class GraphQLException extends RuntimeException {
  private final ErrorCode errorCode;

  public GraphQLException(String message, ErrorCode errorCode) {
    super(message);
    this.errorCode = errorCode;
  }

  public ErrorCode getErrorCode() {
    return errorCode;
  }
}
