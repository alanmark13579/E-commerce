package com.sideproject.ecommerce.model;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class CartUpdateRequest {
    private List<CartItemUpdateRequest> items;
}