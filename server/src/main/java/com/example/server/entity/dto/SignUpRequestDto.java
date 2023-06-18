package com.example.server.entity.dto;

import com.example.server.entity.User;
import com.example.server.util.Role;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class SignUpRequestDto {
  private Long id;

  private String username;

  private String password;

  private Role role;

  @Builder
  public User toEntity() {
    return User.builder()
            .username(username)
            .password(password)
            .role(Role.USER)
            .build();
  }
}
