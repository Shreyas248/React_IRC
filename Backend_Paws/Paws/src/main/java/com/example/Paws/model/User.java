package com.example.Paws.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "user")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String pass;

    public User() {
    }

    public User(Long id,String name, String pass) {
        this.name = name;
        this.id=id;
        this.pass = pass;
       
    }

    
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

   
    public String getPass() {
        return pass;
    }

    public void setPass(String pass) {
        this.pass = pass;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    
}
