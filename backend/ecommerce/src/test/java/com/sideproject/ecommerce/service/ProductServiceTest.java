package com.sideproject.ecommerce.service;

import com.sideproject.ecommerce.repository.ProductsRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import static org.mockito.Mockito.*;

public class ProductServiceTest {
    @Mock
    private ProductsRepository productsRepository;

    @InjectMocks
    private ProductService productService;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.openMocks(this);
    }
    @Test
    public void testGetProducts_withQuery() {
        productService.getProducts("Test");
        verify(productsRepository).findByNameContaining("Test");
        verify(productsRepository, never()).findAll();
    }

    @Test
    public void testGetProducts_withoutQuery() {
        productService.getProducts(null);
        verify(productsRepository).findAll();
        verify(productsRepository, never()).findByNameContaining(any());
    }
}
