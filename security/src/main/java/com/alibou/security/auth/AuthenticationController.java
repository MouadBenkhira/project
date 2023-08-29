package com.alibou.security.auth;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
public class AuthenticationController {
    private final AuthenticationService service;
    @Autowired
    private HttpServletRequest request;

    @Autowired
    private HttpServletResponse response;

    @PostMapping("/register")
    public ResponseEntity<AuthenticationRespose> register(
            @RequestBody RegisterRequest request
    ) {
        return ResponseEntity.ok(service.register(request));


    }


    @PostMapping("/login")
    public ResponseEntity<AuthenticationRespose> login(
            @RequestBody LoginRequest request,
            HttpServletResponse response
    ) {
        AuthenticationRespose authResponse = service.login(request);

        // Create the refresh token cookie
        Cookie refreshTokenCookie = new Cookie("refresh_token", authResponse.getRefreshToken());
        refreshTokenCookie.setHttpOnly(true);
        refreshTokenCookie.setPath("/");
        refreshTokenCookie.setMaxAge(2592000); // Set the cookie expiration time (30 days in seconds)
        response.addCookie(refreshTokenCookie);

        return ResponseEntity.ok(authResponse);
    }
}
