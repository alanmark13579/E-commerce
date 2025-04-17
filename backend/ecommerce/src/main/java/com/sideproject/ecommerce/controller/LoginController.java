package com.sideproject.ecommerce.controller;

import com.sideproject.ecommerce.model.LoginRequest;
import com.sideproject.ecommerce.model.User;
import com.sideproject.ecommerce.service.UserService;
import com.sideproject.ecommerce.util.PasswordUtil;
import com.sideproject.ecommerce.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.LinkedHashMap;
import java.util.Map;

@RestController
public class LoginController {

    private final UserService userService;
    private JwtUtil jwtUtil;
    private PasswordUtil passwordUtil;
    @Autowired
    public LoginController(UserService userService) {this.userService = userService;}

    @Autowired
    public void setJwtUtil(JwtUtil jwtUtil) {this.jwtUtil = jwtUtil;}

    @Autowired
    public void setPasswordUtil(PasswordUtil passwordUtil) {this.passwordUtil = passwordUtil;}

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest request) {
        try {
            User user = userService.getUserByEmail(request.getEmail());
            if (user == null) return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid email or password");

            Map<String, String> response = new LinkedHashMap<>();
            response.put("user_id", String.valueOf(user.getId()));
            response.put("access_token", jwtUtil.generateToken(user.getName()));

            if (passwordUtil.matches(request.getPassword(), user.getPassword())) {
                return ResponseEntity.ok(response);
            } else {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid email or password");
            }
        } catch (Exception e) { return ResponseEntity.badRequest().body(e.getMessage()); }
    }
}