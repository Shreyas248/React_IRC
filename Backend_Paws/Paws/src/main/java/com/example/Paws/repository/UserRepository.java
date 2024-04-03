package com.example.Paws.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.Paws.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    boolean existsByName(String name);

    Optional<User> findByNameAndPass(String name, String pass);
}
