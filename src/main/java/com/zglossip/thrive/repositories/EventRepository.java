package com.zglossip.thrive.repositories;

import com.zglossip.thrive.domains.Event;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.*;
import java.util.stream.Collectors;

@Repository
public class EventRepository {

    //TODO Replace with DB
    private final Map<String, Event> eventStore = new HashMap<>();

    //TODO Remove this after testing
    private Integer generateId() {
        Integer maxId = Collections.max(eventStore.keySet().stream().map(Integer::valueOf).collect(Collectors.toSet()));
        return maxId + 1;
    }

    public List<Event> searchEventsByDate(LocalDate date) {
        List<Event> result = new ArrayList<>();
        for (Event event : eventStore.values()) {
            if (event.date().equals(date)) {
                result.add(event);
            }
        }
        return result;
    }

    public Event upsertEvent(Event event) {
        if(Objects.isNull(event.id())) {
            Event newEvent = new Event(generateId().toString(), event.description(), event.startTime(), event.endTime(), event.date());
            eventStore.put(newEvent.id(), newEvent);
            return newEvent;
        } else {
            eventStore.replace(event.id(), event);
            return event;
        }
    }

    public boolean deleteEvent(String id){
        eventStore.remove(id);
        return true;
    }

}
