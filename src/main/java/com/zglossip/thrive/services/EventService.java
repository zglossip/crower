package com.zglossip.thrive.services;

import com.zglossip.thrive.domains.Event;
import com.zglossip.thrive.repositories.EventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class EventService {

  private final EventRepository eventRepository;

  @Autowired
  public EventService(EventRepository eventRepository) {
    this.eventRepository = eventRepository;
  }

  public List<Event> searchEventsByDate(LocalDate date) {
    return eventRepository.searchEventsByDate(date);
  }

  public Event upsertEvent(Event event) {
    return eventRepository.upsertEvent(event);
  }

  public boolean deleteEvent(String id) {
    return eventRepository.deleteEvent(id);
  }

}
