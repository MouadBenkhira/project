package com.alibou.security.auth;


import com.alibou.security.user.Role;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AuthenticationRespose {
    private String token;
    private String refreshToken;
    private Role role;

}