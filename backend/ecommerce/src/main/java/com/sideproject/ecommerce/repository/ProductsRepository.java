package com.sideproject.ecommerce.repository;

import com.sideproject.ecommerce.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductsRepository extends JpaRepository<Product, Long> {
    // Select products by name and fetch only primary images (isPrimary = true)
    @Query("SELECT DISTINCT p FROM Product p LEFT JOIN FETCH p.images i WHERE i.isPrimary = true AND p.name LIKE %:name%")
    List<Product> findByNameContaining(@Param("name") String name);
}