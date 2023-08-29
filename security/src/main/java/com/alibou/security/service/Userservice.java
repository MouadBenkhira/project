package com.alibou.security.service;

import java.util.List;
import java.util.Optional;

import com.alibou.security.user.Role;
import com.alibou.security.user.User;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.stereotype.Service;
import com.alibou.security.repo.Userrepository;

@Service
public class Userservice {

    private final Userrepository userRepository;

    public Userservice(Userrepository userRepository) {
        this.userRepository = userRepository;
    }


    public User findUserById(Long userId) {
        return userRepository.findById(userId)
                .orElseThrow(() -> new EntityNotFoundException("User with ID " + userId + " not found"));
    }

    public User updateUser(User user) {
        return userRepository.save(user);
    }


    public List<User> getUsers() {
        return userRepository.findAll();
    }

    public void addNewUser(User user) {
        Optional<User> userOptional = userRepository.findUserByEmail(user.getEmail());
        if (userOptional.isPresent()) {
            throw new IllegalStateException("Email already taken");
        }
        userRepository.save(user);
    }

    public void deleteUser(Long userId) {
        boolean exists = userRepository.existsById(userId);
        if (!exists) {
            throw new IllegalStateException("User with ID " + userId + " does not exist");
        }
        userRepository.deleteById(userId);
    }




    public User getAdmin() {
        return userRepository.findByRole(Role.ADMIN)
                .orElseThrow(() -> new IllegalStateException("Admin user not found"));
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }


}
