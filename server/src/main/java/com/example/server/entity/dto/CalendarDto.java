package com.example.server.entity.dto;

import com.example.server.entity.Calendar;
import com.example.server.entity.User;
import com.example.server.util.Role;
import lombok.Builder;
import lombok.Data;

@Data
public class CalendarDto {
  private Long id;

  private String writer;

  private String title;

  private String S_date;

  private String E_date;

  @Builder
  public Calendar toEntity() {
    return Calendar.builder()
            .id(id)
            .writer(writer)
            .title(title)
            .S_date(S_date)
            .E_date(E_date)
            .build();
  }
}
