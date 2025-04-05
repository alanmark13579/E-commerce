package com.sideproject.ecommerce.util;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;


import static org.junit.jupiter.api.Assertions.*;

public class PasswordUtilTest {
    private PasswordUtil passwordUtil;

    @BeforeEach
    public void setUp() {
        passwordUtil = new PasswordUtil();
    }

    @Test
    @DisplayName("Password Util Test: Should return true for matching password and hashed password")
    public void testMatchPassword() {

        String hashedPassword = "$2a$12$6JU.yqTZE86dhjZU6eoVKOhMprASQnhBDQxlAlNd5tMgAxMWUkS1e";

        assertTrue(passwordUtil.matches("12345", hashedPassword));
        assertFalse(passwordUtil.matches("123", hashedPassword));
        assertFalse(passwordUtil.matches("", hashedPassword));
        assertFalse(passwordUtil.matches("12345", ""));
        assertFalse(passwordUtil.matches("", ""));
    }
}
