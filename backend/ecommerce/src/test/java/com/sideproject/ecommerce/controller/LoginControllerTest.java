package com.sideproject.ecommerce.controller;

import com.sideproject.ecommerce.model.User;
import com.sideproject.ecommerce.model.LoginRequest;
import com.sideproject.ecommerce.service.UserService;
import com.sideproject.ecommerce.util.JwtUtil;
import com.sideproject.ecommerce.util.PasswordUtil;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.*;

import org.springframework.http.ResponseEntity;

import java.util.Map;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

public class LoginControllerTest {

    @Mock
    private UserService userService;

    @Mock
    private JwtUtil jwtUtil;

    @Mock
    private PasswordUtil passwordUtil;

    @InjectMocks
    private LoginController loginController;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
        loginController = new LoginController(userService);
        loginController.setJwtUtil(jwtUtil);
        loginController.setPasswordUtil(passwordUtil);
    }

    @Test
    void testLoginSuccess() {
        // Arrange
        LoginRequest request = new LoginRequest("test@example.com", "12345");

        User user = new User();
        user.setId(1L);
        user.setName("TestUser");
        user.setPassword("hashed");

        when(userService.getUserByEmail("test@example.com")).thenReturn(user);
        when(passwordUtil.matches("12345", "hashed")).thenReturn(true);
        when(jwtUtil.generateToken("TestUser")).thenReturn("jwt-token");

        ResponseEntity<?> response = loginController.login(request);

        assertEquals(200, response.getStatusCode().value());
        Map<String, String> body = (Map<String, String>) response.getBody();
        assertNotNull(body);
        assertEquals("jwt-token", body.get("access_token"));
        assertEquals("1", body.get("user_id"));
    }

    @Test
    public void testLoginInvalidEmail() throws Exception {
        // Arrange
        LoginRequest request = new LoginRequest("test@example.com", "12345");

        User user = new User();

        when(userService.getUserByEmail("test@example.com")).thenReturn(null);

        // Act
        ResponseEntity<?> response = loginController.login(request);

        // Assert
        assertEquals(401, response.getStatusCode().value());
    }

    @Test
    public void testLoginInvalidPassword() throws Exception {
        // Arrange
        LoginRequest request = new LoginRequest("test@example.com", "12345");

        User user = new User();
        user.setId(1L);
        user.setName("TestUser");
        user.setPassword("hashed");

        when(userService.getUserByEmail("test@example.com")).thenReturn(user);
        when(passwordUtil.matches("12345", "hashed")).thenReturn(false);

        // Act
        ResponseEntity<?> response = loginController.login(request);

        // Assert
        assertEquals(401, response.getStatusCode().value());
    }
}