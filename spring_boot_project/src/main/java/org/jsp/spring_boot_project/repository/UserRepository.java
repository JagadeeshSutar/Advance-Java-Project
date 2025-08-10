package org.jsp.spring_boot_project.repository;

import org.jsp.spring_boot_project.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Integer>{

}
