package com.sideproject.ecommerce.service;

import com.sideproject.ecommerce.model.Product;
import com.sideproject.ecommerce.dto.ProductDto;
import com.sideproject.ecommerce.mapper.ProductMapper;
import com.sideproject.ecommerce.model.ProductImage;
import com.sideproject.ecommerce.repository.ProductImageRepository;
import com.sideproject.ecommerce.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ProductService {
    private final ProductRepository productRepository;
    private final ProductImageRepository productImageRepository;
    private  ProductMapper productMapper;

    @Autowired
    public ProductService(ProductRepository productRepository, ProductImageRepository productImageRepository) {
        this.productRepository = productRepository;
        this.productImageRepository = productImageRepository;
    }
    @Autowired
    public void setProductMapper(ProductMapper productMapper) {this.productMapper = productMapper;}

    public List<ProductDto>  getProducts(String query){
        List<Product> products = productRepository.findByNameContaining(query);

        return  products.stream()
                .map(productMapper::toDto)
                .collect(Collectors.toList());
    }

    public List<ProductImage> getProductImages(Long productId) {
        if (!productRepository.existsById(productId)) {
            throw new IllegalArgumentException("Product does not exist.");
        }

        return productImageRepository.findByProductId(productId);
    }
}
