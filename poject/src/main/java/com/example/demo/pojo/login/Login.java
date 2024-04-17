package com.example.demo.pojo.login;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "Login")
public class Login {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private char id;
	@Column(name = "username",length = 20)
	private String user;
	@Column(name = "password",length = 20)
	private String password;
	public Login(char id, String user, String password) {
		super();
		this.id = id;
		this.user = user;
		this.password = password;
	}
	public Login() {
		super();
	}
	public char getId() {
		return id;
	}
	public void setId(char id) {
		this.id = id;
	}
	public String getUser() {
		return user;
	}
	public void setUser(String user) {
		this.user = user;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	
	

}
