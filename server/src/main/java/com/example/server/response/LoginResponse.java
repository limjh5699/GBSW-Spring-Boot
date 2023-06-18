package com.example.server.response;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class LoginResponse {
  private String username;
  private String token;
}
