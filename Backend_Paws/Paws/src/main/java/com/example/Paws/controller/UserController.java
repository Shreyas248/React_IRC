// package com.example.Paws.controller;

// import java.util.List;
// import java.util.Optional;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.http.HttpStatus;
// import org.springframework.http.ResponseEntity;
// import org.springframework.web.bind.annotation.CrossOrigin;
// import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.PostMapping;
// import org.springframework.web.bind.annotation.RequestBody;
// import org.springframework.web.bind.annotation.RequestMapping;
// import org.springframework.web.bind.annotation.RestController;

// import com.example.Paws.model.User;
// import com.example.Paws.repository.UserRepository;

// @RestController
// @RequestMapping("api/user")
// @CrossOrigin("*")
// public class UserController {

//     @Autowired
//     private UserRepository userRepository;

//     @PostMapping("/register")
//     public ResponseEntity<String> registerUser(@RequestBody User user) {
//         if (userRepository.existsByName(user.getName())) {
//             return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Username already exists!");
//         }

//         userRepository.save(user);
//         return ResponseEntity.status(HttpStatus.CREATED).body("User registered successfully!");
//     }

//     @PostMapping("/login")
//     public ResponseEntity<String> loginUser(@RequestBody User user) {
//         Optional<User> optionalUser = userRepository.findByNameAndPass(user.getName(), user.getPass());
//         if (optionalUser.isPresent()) {
//             return ResponseEntity.status(HttpStatus.OK).body("Login successful!");
//         } else {
//             return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid username or password!");
//         }
//     }

//     // register
//     @GetMapping("/all")
//     public List<User> getAllUsers() {
//         return userRepository.findAll();
//     }

// }

package com.example.Paws.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.Paws.model.User;
import com.example.Paws.repository.UserRepository;

@RestController
@RequestMapping("api/user")
@CrossOrigin("*")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/register")
    public ResponseEntity<String> registerUser(@RequestBody User user) {
        if (userRepository.existsByName(user.getName())) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Username already exists!");
        }

        userRepository.save(user);
        return ResponseEntity.status(HttpStatus.CREATED).body("User registered successfully!");
    }

    @PostMapping("/login")
    public ResponseEntity<String> loginUser(@RequestBody User user) {
        Optional<User> optionalUser = userRepository.findByNameAndPass(user.getName(), user.getPass());
        if (optionalUser.isPresent()) {
            return ResponseEntity.status(HttpStatus.OK).body("Login successful!");
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid username or password!");
        }
    }

    // register
    @GetMapping("/all")
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<User> getUserById(@PathVariable Long id) {
        Optional<User> user = userRepository.findById(id);
        if (user.isPresent()) {
            return ResponseEntity.ok(user.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("put/{id}")
    public ResponseEntity<User> updateUser(@PathVariable Long id, @RequestBody User user) {
        Optional<User> existingUser = userRepository.findById(id);
        if (existingUser.isPresent()) {
            user.setId(id); // Ensure the correct id is set for the user
            userRepository.save(user);
            return ResponseEntity.ok(user);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("del/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable Long id) {
        if (userRepository.existsById(id)) {
            userRepository.deleteById(id);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    @PatchMapping("/patchuser/{id}")
    public ResponseEntity<User> patchUser(@RequestBody User partialUser, @PathVariable Long id) {
        return userRepo.findById(id)
                .map(user -> {
                    if (partialUser.getName() != null) {
                        user.setName(partialUser.getName());
                    }
                    if (partialUser.getEmail() != null) {
                        user.setEmail(partialUser.getEmail());
                    }
                    if (partialUser.getPassword() != null) {
                        user.setPassword(partialUser.getPassword());
                    }
                    return ResponseEntity.ok(userRepo.save(user));
                }).orElseThrow(() -> new UserNotFoundException(id));
    }
}