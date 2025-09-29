package com.hms.controller;

import com.hms.model.User;
import com.hms.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Map<String, String> payload) {
        String username = payload.get("username");
        String password = payload.get("password");
        return userRepository.findByUsername(username)
                .filter(User::isEnabled)
                .filter(u -> passwordEncoder.matches(password, u.getPassword()))
                .<ResponseEntity<?>>map(u -> ResponseEntity.ok(Map.of(
                        "id", u.getId(),
                        "username", u.getUsername(),
                        "email", u.getEmail(),
                        "role", u.getRole()
                )))
                .orElse(ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(Map.of("error", "Invalid credentials")));
    }
}
