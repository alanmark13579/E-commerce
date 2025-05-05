package com.sideproject.ecommerce.service;

import com.sideproject.ecommerce.model.User;
import com.sideproject.ecommerce.model.UserPrincipal;
import com.sideproject.ecommerce.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserService implements UserDetailsService {

    private final UserRepository userRepository;

    @Autowired
    public  UserService(UserRepository userRepository) {this.userRepository = userRepository;}

    public User getUserByEmail(String email) {return userRepository.findByEmail(email);}

    public void setUser(User user) {
        userRepository.save(user);
    }

    @Override
    public UserPrincipal loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findByName(username)
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));
        return new UserPrincipal(user);
    }
}