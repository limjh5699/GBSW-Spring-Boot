package com.example.server.controller;

import com.example.server.entity.dto.SignUpRequestDto;
import com.example.server.response.LoginResponse;
import com.example.server.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api")
public class UserController {

  @Autowired
  UserService userService;

  @CrossOrigin(origins = "*", allowedHeaders = "*")
  @PostMapping(value = "/regist")
  public Long signUp(@RequestBody SignUpRequestDto request) throws Exception {
    return userService.signUp(request);
  }

  @CrossOrigin(origins = "*", allowedHeaders = "*")
  @PostMapping(value = "/login")
  public LoginResponse login(@RequestBody Map<String, String> user) {
    return userService.login(user);
  }

}

