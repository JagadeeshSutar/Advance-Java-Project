package org.jsp.spring_boot_project.dao;

import org.jsp.spring_boot_project.entity.User;
import org.jsp.spring_boot_project.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;


@Repository
public class UserDao {
	@Autowired
	UserRepository repository;

	public User saveUser(User u) {
		return repository.save(u);
	}

}
