package com.sideproject.ecommerce.service;

import com.sideproject.ecommerce.repository.ProductImageRepository;
import com.sideproject.ecommerce.repository.ProductRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.*;

public class ProductServiceTest {
    @Mock
    private ProductRepository productRepository;

    @Mock
    private ProductImageRepository productImageRepository;

    @InjectMocks
    private ProductService productService;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.openMocks(this);
    }
    @Test
    public void testGetProducts_withName() {
        productService.getProducts("Test");
        verify(productRepository).findByNameContaining("Test");
        verify(productRepository, never()).findAll();
    }

    @Test
    public void testGetProducts_withoutName() {
        productService.getProducts(null);
        verify(productRepository).findAll();
        verify(productRepository, never()).findByNameContaining(any());
    }

    @Test
    public void getProductsImages_withId(){
        Long productId = 1L;
        when(productRepository.existsById(productId)).thenReturn(true);
        productService.getProductImages(productId);
        verify(productImageRepository).findByProductId(productId);
    }

    @Test
    public void getProductsImages_withoutId(){
        Long productId = 1L;
        when(productRepository.existsById(productId)).thenReturn(false);

        IllegalArgumentException exception = assertThrows(
                IllegalArgumentException.class,
                () -> productService.getProductImages(productId)
        );
        assertEquals("Product does not exist.", exception.getMessage());
    }
}
