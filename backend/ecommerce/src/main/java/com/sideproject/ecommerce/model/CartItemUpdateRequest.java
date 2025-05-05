package com.sideproject.ecommerce.model;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CartItemUpdateRequest {
    private Long productId;
    private Integer quantity;
}
