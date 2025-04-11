package com.sideproject.ecommerce.service;

import com.sideproject.ecommerce.model.Products;
import com.sideproject.ecommerce.repository.ProductsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {
    private final ProductsRepository productsRepository;

    @Autowired
    public ProductService(ProductsRepository productsRepository) { this.productsRepository = productsRepository; }

    public List<Products>  getProducts(String query){
        if (query != null && !query.isEmpty()) {
            return productsRepository.findByNameContaining(query);
        }
        return productsRepository.findAll();
    }
}
