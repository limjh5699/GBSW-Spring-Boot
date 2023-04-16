package com.gbsw.homework.entity.dto;

import lombok.Data;

@Data
public class MemberDto {
  private Long no;

  private String id;

  private String password;

  public Long getNo() {
    return no;
  }

  public void setNo(Long no) {
    this.no = no;
  }

  public String getId() {
    return id;
  }

  public void setId(String id) {
    this.id = id;
  }

  public String getPassword() {
    return password;
  }

  public void setPassword(String password) {
    this.password = password;
  }
}
