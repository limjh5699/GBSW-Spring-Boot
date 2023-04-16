package com.gbsw.homework.jwt;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

import java.util.Date;

public class CreateToken {

  private final String secretKey = "eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTY4MTM2ODQ5MCwiaWF0IjoxNjgxMzY4NDkwfQ.Gcg2JFc9Z8Pf3AFAexykWh93hgG8Fy1ajCC34kRuAQc"; // JWT secret key
  private final long tokenValidTime = 30 * 60 * 1000L; // 토큰 유효시간 30분

  // JWT 토큰 생성
  public String createToken(String user_id) {
    Claims claims = Jwts.claims().setSubject(user_id); // JWT payload에 저장되는 정보단위
    Date now = new Date();
    return Jwts.builder()
            .setClaims(claims) // 정보 저장
            .setIssuedAt(now) // 토큰 발행 시간 정보
            .setExpiration(new Date(now.getTime() + tokenValidTime)) // 만료 시간 설정
            .signWith(SignatureAlgorithm.HS256, secretKey.getBytes()) // 사용할 암호화 알고리즘과 signature에 들어갈 secret값 세팅
            .compact();
  }
}