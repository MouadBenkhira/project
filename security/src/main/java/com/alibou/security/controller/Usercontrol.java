package com.alibou.security.controller;

import java.util.List;
import java.util.Optional;

import com.alibou.security.user.User;
import jakarta.persistence.EntityManager;
import jakarta.persistence.EntityNotFoundException;
import jakarta.persistence.PersistenceContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;
import com.alibou.security.service.Userservice;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping(path = "/api/v1/User")
public class Usercontrol {

    private final Userservice userService;

    @PersistenceContext
    private EntityManager em;

    @Autowired
    public Usercontrol(Userservice userService) {
        this.userService = userService;
    }

    @GetMapping
    public ResponseEntity<List<User>> getUsers() {
        List<User> users = userService.getUsers();
        return new ResponseEntity<>(users, HttpStatus.OK);
    }

    @PostMapping("/logout")
    public ResponseEntity<String> logoutUser() {
        // Clear authentication context to log the user out
        SecurityContextHolder.clearContext();
        return new ResponseEntity<>("User logged out successfully", HttpStatus.OK);
    }



    @PostMapping
    public ResponseEntity<String> registerNewUser(@RequestBody User user) {
        userService.addNewUser(user);
        return new ResponseEntity<>("User registered successfully", HttpStatus.CREATED);
    }



    @GetMapping("/user/profile")
    public ResponseEntity<User> getUserProfile() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        if (authentication.getPrincipal() instanceof UserDetails) {
            UserDetails userDetails = (UserDetails) authentication.getPrincipal();
            User user = new User();
            user.setFirstname(userDetails.getUsername());
            // Set other user properties based on UserDetails

            return new ResponseEntity<>(user, HttpStatus.OK);
        }

        return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
    }



    @GetMapping(path = "/admin")
    public ResponseEntity<User> getAdmin() {
        User admin = userService.getAdmin();
        return new ResponseEntity<>(admin, HttpStatus.OK);
 }
    @GetMapping(path = "/all")
    public ResponseEntity<List<User>> getAllUsers() {
        List<User> users = userService.getAllUsers();
        return new ResponseEntity<>(users, HttpStatus.OK);
    }








}
