package org.jsp.ums.controller;

import java.util.List;

import org.jsp.ums.entity.User;
import org.jsp.ums.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class UserController {

	@Autowired
	UserService service;

	@PostMapping("/users")
	public ResponseEntity<?> saveUser(@RequestBody User u) {
		return service.saveUser(u);
	}

	@GetMapping("/users")
	public List<User> getAllUsers() {
		return service.getAllUsers();
	}

	// ✅ Delete user by ID
	@DeleteMapping("/users/{id}")
	public User deleteUser(@PathVariable int id) {
		return service.deleteUser(id);
	}

	@PutMapping("/users/{id}")
	public User updateUser(@PathVariable int id, @RequestBody User userDetails) {
		return service.updateUser(id, userDetails);
	}
	
	@DeleteMapping("/truncate")
    public String truncateUsersTable() {
        service.truncateUsers();
        return "Users table truncated successfully.";
    }
}
