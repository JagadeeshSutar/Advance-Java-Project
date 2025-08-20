package org.jsp.ums.repository;

import org.jsp.ums.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import jakarta.transaction.Transactional;

public interface UserRepository extends JpaRepository<User, Integer> {

	@Modifying
	@Transactional
	@Query(value = "TRUNCATE TABLE users", nativeQuery = true)
	void truncateTable();

}
