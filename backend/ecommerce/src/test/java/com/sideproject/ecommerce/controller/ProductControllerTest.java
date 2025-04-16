package com.sideproject.ecommerce.controller;

import com.sideproject.ecommerce.model.Products;
import com.sideproject.ecommerce.dto.ProductDto;
import com.sideproject.ecommerce.service.ProductService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.math.BigDecimal;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

public class ProductControllerTest {
    @Mock
    private ProductService productService;

    @InjectMocks
    private ProductController productController;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.initMocks(this);
        productController = new ProductController(productService);
    }

    @Test
    void testGetProductsByQuery() {
        ProductDto mockProduct = ProductDto.builder()
                .name("Test Product")
                .category("Test Category")
                .price(new BigDecimal(999))
                .remain_number(100)
                .build();

        List<ProductDto> mockProductList = List.of(mockProduct);
        when(productService.getProducts("test")).thenReturn(mockProductList);

        ResponseEntity<?> response = productController.getProductByQuery("test");
        assertEquals(200, response.getStatusCode().value());
        assertEquals(mockProductList, response.getBody());
    }

    @Test
    void testGetProductsByQuery_NotFound() {
        when(productService.getProducts("NotExist")).thenReturn(List.of());

        ResponseEntity<?> response = productController.getProductByQuery("NotExist");

        assertEquals(HttpStatus.NOT_FOUND.value(), response.getStatusCode().value());
        assertEquals(List.of(), response.getBody());
    }
}
