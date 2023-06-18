package com.example.server.service.Impl;

import com.example.server.entity.User;
import com.example.server.entity.dto.SignUpRequestDto;
import com.example.server.jwt.JwtProvider;
import com.example.server.repository.UserRepository;
import com.example.server.response.LoginResponse;
import com.example.server.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@RequiredArgsConstructor
@Transactional
@Service
public class UserServiceImpl implements UserService {

  private final UserRepository userRepository;
  private final PasswordEncoder passwordEncoder;
  private final JwtProvider jwtProvider;

  @Transactional
  @Override
  public Long signUp(SignUpRequestDto requestDto) throws Exception {

      if (userRepository.findByUsername(requestDto.getUsername()).isPresent()) {
        throw new Exception("이미 존재하는 이메일입니다.");
      }

      User user = userRepository.save(requestDto.toEntity());
      user.encodePassword(passwordEncoder);

      return user.getId();
  }

  @Override
  public LoginResponse login(Map<String, String> members) {

    LoginResponse loginResponse = new LoginResponse();

    User user = userRepository.findByUsername(members.get("username"))
            .orElseThrow(() -> new IllegalArgumentException("가입되지 않은 id 입니다."));

    List<String> roles = new ArrayList<>();
    roles.add(user.getRole().name());

    String token = jwtProvider.createToken(user.getUsername(), roles);
    String username = user.getUsername();

    loginResponse.setUsername(username);
    loginResponse.setToken(token);

    return loginResponse;
  }

}