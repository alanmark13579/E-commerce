package com.sideproject.ecommerce.util;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import javax.crypto.SecretKey;
import java.util.Base64;
import java.util.Date;

import static org.junit.jupiter.api.Assertions.*;

public class JwtUtilTest {

    private JwtUtil jwtUtil;

    // 測試用的假 secret key，需至少 256 位元（32 bytes）以上
    private final String secret = Base64.getEncoder().encodeToString("testsecretkeyfortestingjwt123456".getBytes());

    @BeforeEach
    public void setUp() {
        jwtUtil = new JwtUtil();

        // 透過反射模擬 @Value 注入
        setPrivateField(jwtUtil, "secretKeyString", secret);
        setPrivateField(jwtUtil, "expirationTime", 3600000L); // 1 hour

        jwtUtil.init(); // 初始化 SecretKey
    }

    @Test
    public void testGenerateToken() {
        String username = "testuser";
        String token = jwtUtil.generateToken(username);

        assertNotNull(token);

        // 解析 token 驗證是否包含正確的 subject
        SecretKey key = Keys.hmacShaKeyFor(secret.getBytes());
        Claims claims = Jwts.parserBuilder()
                .setSigningKey(key)
                .build()
                .parseClaimsJws(token)
                .getBody();

        assertEquals(username, claims.getSubject());
        assertTrue(claims.getExpiration().after(new Date()));
    }

    // 用反射設定 private 屬性
    private void setPrivateField(Object target, String fieldName, Object value) {
        try {
            var field = target.getClass().getDeclaredField(fieldName);
            field.setAccessible(true);
            field.set(target, value);
        } catch (Exception e) {
            throw new RuntimeException("Failed to set private field", e);
        }
    }
}
