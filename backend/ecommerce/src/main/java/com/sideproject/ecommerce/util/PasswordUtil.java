package com.sideproject.ecommerce.util;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;

@Component
public class PasswordUtil {
    private final BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    public  boolean matches(String password, String hashedPassword) {
        return passwordEncoder.matches(password, hashedPassword);
    }
}