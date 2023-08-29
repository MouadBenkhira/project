package com.alibou.security.controller;

import java.util.List;

import com.alibou.security.user.User;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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

    @PostMapping
    public ResponseEntity<String> registerNewUser(@RequestBody User user) {
        userService.addNewUser(user);
        return new ResponseEntity<>("User registered successfully", HttpStatus.CREATED);
    }

    @DeleteMapping(path = "{Userid}")
    public ResponseEntity<String> deleteUser(@PathVariable("Userid") Long userId) {
        userService.deleteUser(userId);
        return new ResponseEntity<>("User deleted successfully", HttpStatus.OK);
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
