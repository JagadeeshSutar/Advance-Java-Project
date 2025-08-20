package org.jsp.ums.dao;

import java.util.List;

import org.jsp.ums.entity.User;
import org.jsp.ums.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class UserDao {

	@Autowired
	UserRepository repository;

	public User saveUser(User u) {
		return repository.save(u);
	}

	public List<User> getAllUsers() {
		return repository.findAll();
	}

	public User deleteUser(int id) {
		User user = repository.findById(id).orElseThrow(() -> new RuntimeException("User not found with ID: " + id));
		repository.deleteById(id);
		return user; // return the deleted user's details
	}

//	public User updateUser(int id, User userDetails) {
//		User existingUser = repository.findById(id).orElseThrow(() -> new RuntimeException("User not found"));
//
//		existingUser.setName(userDetails.getName());
//		existingUser.setEmail(userDetails.getEmail());
//		existingUser.setPhone(userDetails.getPhone());
//		existingUser.setPassword(userDetails.getPassword());
//
//		return repository.save(existingUser);
//	}
	
	
	public User updateUser(int id, User userDetails) {
        User existingUser = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("User not found"));

        existingUser.setName(userDetails.getName());
        existingUser.setEmail(userDetails.getEmail());
        existingUser.setPhone(userDetails.getPhone());
        existingUser.setPassword(userDetails.getPassword());

        return repository.save(existingUser);
    }

	public void truncateUser() {
		// TODO Auto-generated method stub
		repository.truncateTable();
	}
	
	

}
