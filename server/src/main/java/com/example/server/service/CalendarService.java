package com.example.server.service;

import com.example.server.entity.Calendar;
import com.example.server.entity.dto.CalendarDto;

import java.util.List;

public interface CalendarService {
  public List<Calendar> getPosts (String username);

  public String createPost (CalendarDto calendarDto);
}
