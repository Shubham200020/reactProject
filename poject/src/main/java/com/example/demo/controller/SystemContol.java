package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.pojo.login.Login;
import com.example.demo.repositry.LoginRepo;

@RestController
@RequestMapping("/project")
@CrossOrigin("http://localhost:3000/")
public class SystemContol {
	@Autowired
	LoginRepo rlog;
	@GetMapping("/")
	public String home() {
		return "Hello Shubham";
	}
	@GetMapping("/find-login")
	public List<Login> findAllDetels()
	{
		List<Login> lg=rlog.findAll();
		return lg;
	}
	@PostMapping("/verifyUser/{usname}")
	public Login verifyusname(@PathVariable String usname)
	{
		Login data=null ;
		List<Login> lg=rlog.findAll();
		for(Login l:lg) {
			if(l.getUser().equals(usname)) {
					
				
					data=l;
				
			
			}
		}
		return data;
	}
	@PostMapping("/verifypass/{pass}")
	public Login verifypass(@PathVariable String pass)
	{
		Login data=null ;
		List<Login> lg=rlog.findAll();
		for(Login l:lg) {
			if(l.getPassword().equals(pass)) {
					
				
					data=l;
				
			
			}
		}
		return data;
	}
	@PostMapping("/login/{pass}/{usname}")
	public Login Login(@PathVariable String pass,@PathVariable String usname)
	{
		Login data=null ;
		List<Login> lg=rlog.findAll();
		for(Login l:lg) {
			if(l.getUser().equals(usname)) {
				if(l.getPassword().equals(pass))	
				{
					data=l;
				}
			
			}
		}
		return data;
	}
}
