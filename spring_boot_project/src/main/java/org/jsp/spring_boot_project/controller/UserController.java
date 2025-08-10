package org.jsp.spring_boot_project.controller;

import org.jsp.spring_boot_project.entity.User;
import org.jsp.spring_boot_project.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {
	
	@Autowired
	UserService service;
	
	@PostMapping("/users")
	public ResponseEntity<?> saveUser(@RequestBody User u){
		return service.saveUser(u);
	}
}
