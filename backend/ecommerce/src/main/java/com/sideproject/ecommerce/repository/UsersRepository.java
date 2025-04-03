package com.sideproject.ecommerce.repository;

import com.sideproject.ecommerce.model.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.Query;
import java.util.List;

@Repository
public interface UsersRepository extends JpaRepository<Users, Long> {
    Users findByEmail(String email);
}