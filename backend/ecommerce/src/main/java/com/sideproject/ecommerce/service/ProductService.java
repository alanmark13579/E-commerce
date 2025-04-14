package com.sideproject.ecommerce.service;

import com.sideproject.ecommerce.model.Product;
import com.sideproject.ecommerce.dto.ProductDto;
import com.sideproject.ecommerce.mapper.ProductMapper;
import com.sideproject.ecommerce.repository.ProductsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ProductService {
    private final ProductsRepository productsRepository;
    private  ProductMapper productMapper;

    @Autowired
    public ProductService(ProductsRepository productsRepository) { this.productsRepository = productsRepository;}

    @Autowired
    public void setProductMapper(ProductMapper productMapper) {this.productMapper = productMapper;}

    public List<ProductDto>  getProducts(String query){
        List<Product> products = productsRepository.findByNameContaining(query);

        return  products.stream()
                .map(productMapper::toDto)
                .collect(Collectors.toList());
    }
}
