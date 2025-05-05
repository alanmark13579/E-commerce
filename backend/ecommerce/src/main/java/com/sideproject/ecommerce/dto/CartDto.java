package com.sideproject.ecommerce.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class CartDto {
    private Long productId;
    private String productName;
    private Integer quantity;
    private String imageUrl;

    public CartDto(Long productId, String productName, Integer quantity, String imageUrl) {
        this.productId = productId;
        this.productName = productName;
        this.quantity = quantity;
        this.imageUrl = imageUrl;
    }
}
