package com.example.server.controller;

import com.example.server.entity.Calendar;
import com.example.server.entity.dto.CalendarDto;
import com.example.server.service.CalendarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/api")
public class CalendarController {

  @Autowired
  CalendarService calendarService;

  @GetMapping(value = "/posts")
  public List<Calendar> getPosts(@RequestParam(value = "username") String params) {
    List<Calendar> list = calendarService.getPosts(params);
    return list;
  }

  @PostMapping(value = "/createPost")
  public String createPost(@RequestBody CalendarDto request) {
    calendarService.createPost(request);
    return "성공";
  }
}
