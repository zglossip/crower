package com.zglossip.thrive.resolvers;

import com.zglossip.thrive.domains.Event;
import com.zglossip.thrive.services.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.MutationMapping;
import org.springframework.stereotype.Controller;

import java.time.LocalDate;

@Controller
public class EventMutationResolver {

  private final EventService eventService;

  @Autowired
  public EventMutationResolver(EventService eventService) {
    this.eventService = eventService;
  }

  @MutationMapping
  public Event upsertEvent(
      @Argument String id,
      @Argument String description,
      @Argument Integer startTime,
      @Argument Integer endTime,
      @Argument String eventDate
  ) {
    return eventService.upsertEvent(new Event(
        id,
        description,
        startTime,
        endTime,
        LocalDate.parse(eventDate)
    ));
  }

  @MutationMapping
  public boolean deleteEvent(@Argument String id) {
    return eventService.deleteEvent(id);
  }

}
