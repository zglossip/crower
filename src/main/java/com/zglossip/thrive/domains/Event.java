package com.zglossip.thrive.domains;

import java.time.LocalDate;

public record Event(
        String id,
        String description,
        Integer startTime,
        Integer endTime,
        LocalDate date
) {}
