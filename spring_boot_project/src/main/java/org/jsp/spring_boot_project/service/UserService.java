package org.jsp.spring_boot_project.service;

import org.jsp.spring_boot_project.dao.UserDao;
import org.jsp.spring_boot_project.entity.User;
import org.jsp.spring_boot_project.responsestructure.ResponseStructure;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;


@Service
public class UserService {
	
	@Autowired
	UserDao dao;

	public ResponseEntity<?> saveUser(User u) {
		User savedUser = dao.saveUser(u);
		ResponseStructure rs = new ResponseStructure(201, "User Saved Successfully", savedUser);
		return ResponseEntity.status(201).body(rs);
	}

}
