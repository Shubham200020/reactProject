package com.example.demo.repositry;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.pojo.login.Login;

public interface LoginRepo extends JpaRepository<Login, Character>{

}
