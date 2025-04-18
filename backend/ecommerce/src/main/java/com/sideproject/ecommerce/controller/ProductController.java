package com.sideproject.ecommerce.controller;

import com.sideproject.ecommerce.model.ProductImage;
import com.sideproject.ecommerce.service.ProductService;
import com.sideproject.ecommerce.dto.ProductDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/products")
public class ProductController {

    private final ProductService productService;

    @Autowired
    public ProductController(ProductService productService) { this.productService = productService; }

    @GetMapping
    public ResponseEntity<?> getProductByName(@RequestParam(required = false) String productName) {
        List<ProductDto> products = productService.getProducts(productName);

        if (products.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(products);
        }
        return ResponseEntity.ok(products);
    }

    @GetMapping("/{productId}")
    public ResponseEntity<?> getProductImages(@PathVariable Long productId) {
        List<ProductImage> productImages = productService.getProductImages(productId);
        if (productImages.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(productImages);
    }
}
