package com.example.server.repository;

import com.example.server.entity.Calendar;
import com.example.server.entity.dto.CalendarDto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface CalendarRepository extends JpaRepository<Calendar, Long> {
  List<Calendar> findCalendarsByWriter(String username);
}
