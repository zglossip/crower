package com.zglossip.thrive.repositories;

import com.zglossip.thrive.domains.Event;
import com.zglossip.thrive.repositories.mappers.EventMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.core.namedparam.SqlParameterSource;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public class EventRepository {

  private final NamedParameterJdbcTemplate jdbcTemplate;
  private final EventMapper eventMapper;

  @Autowired
  public EventRepository(NamedParameterJdbcTemplate jdbcTemplate, EventMapper eventMapper) {
    this.jdbcTemplate = jdbcTemplate;
    this.eventMapper = eventMapper;
  }

  public List<Event> searchEventsByDate(LocalDate date) {
    String sql = " SELECT id, description, start_time, end_time, date" +
                 " FROM thrive.event" +
                 " WHERE date = :date";

    SqlParameterSource params = new MapSqlParameterSource("date", date);

    return jdbcTemplate.query(sql, params, eventMapper);
  }

  public Event upsertEvent(Event event) {
    String sql = " INSERT INTO thrive.event (start_time, date, end_time, description)" +
                 " VALUES (:startTime, :date, :endTime, :description)" +
                 " ON CONFLICT(start_time, date)" +
                 "   DO UPDATE SET " +
                 "     description = :description," +
                 "     start_time = :startTime," +
                 "     end_time = :endTime," +
                 "     date = :date" +
                 " RETURNING id";

    SqlParameterSource params = new MapSqlParameterSource()
        .addValue("description", event.description())
        .addValue("startTime", event.startTime())
        .addValue("endTime", event.endTime())
        .addValue("date", event.date());

    Integer id = jdbcTemplate.queryForObject(sql, params, Integer.class);

    return new Event(
        String.valueOf(id),
        event.description(),
        event.startTime(),
        event.endTime(),
        event.date()
    );

  }

  public boolean deleteEvent(String id) {
    String sql = "DELETE FROM thrive.event WHERE id = :id";

    SqlParameterSource params = new MapSqlParameterSource("id", id);

    jdbcTemplate.update(sql, params);

    return true;
  }

  public List<Event> findOverlaps(Event event) {
    String sql = " SELECT id, description, start_time, end_time, date" +
                 " FROM thrive.event" +
                 " WHERE date = :date" +
                 "   AND (" +
                 "         (:startTime > start_time AND :startTime < end_time)" +
                 "         OR (:endTime > start_time AND :endTime < end_time)" +
                 "       )";

    SqlParameterSource params = new MapSqlParameterSource()
        .addValue("date", event.date())
        .addValue("startTime", event.startTime())
        .addValue("endTime", event.endTime());

    return jdbcTemplate.query(sql, params, eventMapper);
  }

}
