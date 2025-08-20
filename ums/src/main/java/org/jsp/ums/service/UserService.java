package org.jsp.ums.service;

import java.util.List;

import org.jsp.ums.dao.UserDao;
import org.jsp.ums.entity.User;
import org.jsp.ums.responsestructure.ResponseStructure;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class UserService {
	@Autowired
	UserDao dao;

	public ResponseEntity<?> saveUser(User u) {

		User savedUser = dao.saveUser(u);

		ResponseStructure rs = new ResponseStructure();
		rs.setStatus(201);
		rs.setMessage("Data ssaved successfully...");
		rs.setBody(rs);

		return ResponseEntity.status(201).body(savedUser);
	}

	public List<User> getAllUsers() {
		// TODO Auto-generated method stub
		return dao.getAllUsers();
	}

	public User deleteUser(int id) {
		return dao.deleteUser(id); // return the deleted user's details
	}

	public User updateUser(int id, User userDetails) {
		return dao.updateUser(id, userDetails);
	}

	public void truncateUsers() {
		// TODO Auto-generated method stub
		dao.truncateUser();
	}
}
