package com.zglossip.thrive.repositories.mappers;

import com.zglossip.thrive.domains.Event;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Component;

import java.sql.ResultSet;
import java.sql.SQLException;

@Component
public class EventMapper implements RowMapper<Event> {

    @Override
    public Event mapRow(ResultSet rs, int rowNum) throws SQLException {
        return new Event(rs.getString("id"),
                rs.getString("description"),
                rs.getInt("start_time"),
                rs.getInt("end_teme"),
                rs.getDate("date").toLocalDate());
    }
}
