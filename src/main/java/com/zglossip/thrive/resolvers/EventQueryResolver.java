package com.zglossip.thrive.resolvers;

import com.zglossip.thrive.domains.Event;
import com.zglossip.thrive.services.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;

import java.time.LocalDate;
import java.util.List;

@Controller
public class EventQueryResolver {

  private final EventService eventService;

  @Autowired
  public EventQueryResolver(EventService eventService) {
    this.eventService = eventService;
  }

  @QueryMapping
  public List<Event> searchEventsByDate(@Argument String date) {
    LocalDate parsedDate = LocalDate.parse(date);
    return eventService.searchEventsByDate(parsedDate);
  }

}
