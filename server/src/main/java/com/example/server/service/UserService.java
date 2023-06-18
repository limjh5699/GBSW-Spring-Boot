package com.example.server.service;

import com.example.server.entity.dto.SignUpRequestDto;
import com.example.server.response.LoginResponse;

import java.util.Map;


public interface UserService {

  public Long signUp (SignUpRequestDto response) throws Exception;

  public LoginResponse login(Map<String, String> users);
}
