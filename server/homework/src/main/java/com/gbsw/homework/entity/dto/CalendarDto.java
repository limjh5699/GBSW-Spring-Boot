package com.gbsw.homework.entity.dto;

import java.time.LocalDate;

import lombok.Data;

@Data
public class CalendarDto {

  private Long no;

  private String id;

  private String title;

  private LocalDate date;
}
