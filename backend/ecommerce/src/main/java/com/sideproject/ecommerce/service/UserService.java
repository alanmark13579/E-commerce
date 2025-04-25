package com.sideproject.ecommerce.service;

import com.sideproject.ecommerce.model.User;
import com.sideproject.ecommerce.model.UserPrincipal;
import com.sideproject.ecommerce.repository.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserService implements UserDetailsService {

    private final UsersRepository usersRepository;

    @Autowired
    public  UserService(UsersRepository usersRepository) {this.usersRepository = usersRepository;}

    public User getUserByEmail(String email) {return usersRepository.findByEmail(email);}

    @Override
    public UserPrincipal loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = usersRepository.findByName(username)
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));
        return new UserPrincipal(user);
    }
}