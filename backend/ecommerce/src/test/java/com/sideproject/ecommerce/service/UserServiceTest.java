package com.sideproject.ecommerce.service;

import com.sideproject.ecommerce.model.Users;
import com.sideproject.ecommerce.repository.UsersRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

public class UserServiceTest {
    @Mock
    private UsersRepository usersRepository;

    @InjectMocks
    private UserService userService;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    @DisplayName("User Service Test: Validate email matching with findByEmail method")
    public void testGetUserByEmail() {
        String email = "test@example.com";
        Users mockUser = new Users();
        mockUser.setEmail(email);
        when(usersRepository.findByEmail(email)).thenReturn(mockUser);

        Users result = userService.getUserByEmail(email);

        assertNotNull(result);
        assertEquals(email, result.getEmail());
        verify(usersRepository).findByEmail(email);
    }
}
