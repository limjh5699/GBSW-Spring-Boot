package com.gbsw.homework.controller;

import com.gbsw.homework.entity.dto.MemberDto;
import com.gbsw.homework.jwt.CreateToken;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MemberController {
  @PostMapping("/login")
  public String login(@RequestBody MemberDto memberDto) {
    // 사용자 인증 로직 구현
    boolean isAuthenticated = authenticate(memberDto.getId(), memberDto.getPassword());

    if (isAuthenticated) {
      CreateToken CreateToken = new CreateToken();
      String token = CreateToken.createToken(memberDto.getId());
      return token;
    } else {
      // 인증 실패 처리
      return "fail";
    }
  }

  private boolean authenticate(String username, String password) {
    // 사용자 인증 로직 구현
    return true;
  }


}
