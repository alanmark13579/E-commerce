package com.sideproject.ecommerce.service;

import com.sideproject.ecommerce.model.User;
import com.sideproject.ecommerce.repository.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    private final UsersRepository usersRepository;

    @Autowired
    public  UserService(UsersRepository usersRepository) {
        this.usersRepository = usersRepository;
    }

    public User getUserByEmail(String email) {
        return usersRepository.findByEmail(email);
    }
}