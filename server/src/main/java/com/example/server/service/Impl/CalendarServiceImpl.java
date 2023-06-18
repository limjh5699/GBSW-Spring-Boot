package com.example.server.service.Impl;

import com.example.server.entity.Calendar;
import com.example.server.entity.dto.CalendarDto;
import com.example.server.repository.CalendarRepository;
import com.example.server.service.CalendarService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@RequiredArgsConstructor
@Transactional
@Service
public class CalendarServiceImpl implements CalendarService {

  @Autowired
  CalendarRepository calendarRepository;

  @Override
  public List<Calendar> getPosts(String username) {
    return calendarRepository.findCalendarsByWriter(username);
  }

  @Override
  public String createPost(CalendarDto calendarDto) {
    calendarRepository.save(calendarDto.toEntity());
    return "성공";
  }
}
