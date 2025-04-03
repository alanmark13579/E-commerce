package com.sideproject.ecommerce.controller;

import com.sideproject.ecommerce.model.Users;
import com.sideproject.ecommerce.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;


import java.util.List;

@RestController
public class PingController {
    private final UserService userService;

    @Autowired
    public PingController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/all")
    public List<Users> getAllUsers() {
        return userService.getAllUsers();
    }
}