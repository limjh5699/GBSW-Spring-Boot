package com.gbsw.homework.repository;

import com.gbsw.homework.entity.Calendar;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MemberRepository extends JpaRepository<Calendar, Long> {
}
