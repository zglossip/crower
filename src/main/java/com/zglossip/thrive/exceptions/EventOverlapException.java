package com.zglossip.thrive.exceptions;

import com.zglossip.thrive.domains.Event;

import java.util.List;

import static com.zglossip.thrive.exceptions.ErrorCode.EVENT_OVERLAP;
import static com.zglossip.thrive.services.Util.getTimeString;

public class EventOverlapException extends GraphQLException {
  public EventOverlapException(List<Event> overlappingEvents) {
    super(getErrorMessage(overlappingEvents), EVENT_OVERLAP);
  }

  private static String getErrorMessage(List<Event> overlappingEvents) {
    StringBuilder sb = new StringBuilder();

    sb.append("Event will overlap with the following events:");

    overlappingEvents.forEach(event -> {
      sb.append(String.format(" Event %s starts at %s and ends at %s", event.description(), getTimeString(event.startTime()), getTimeString(event.endTime())));
    });

    return sb.toString();
  }
}
