package com.sideproject.ecommerce.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;

@Getter
@Setter
@Builder
public class CartDto {
    private Long productId;
    private String productName;
    private BigDecimal price;
    private Integer remainNumber;
    private Integer quantity;
    private String imageUrl;


    public CartDto(Long productId, String productName, BigDecimal price, Integer remainNumber,
                   Integer quantity, String imageUrl) {
        this.productId = productId;
        this.productName = productName;
        this.price = price;
        this.remainNumber = remainNumber;
        this.quantity = quantity;
        this.imageUrl = imageUrl;
    }
}
