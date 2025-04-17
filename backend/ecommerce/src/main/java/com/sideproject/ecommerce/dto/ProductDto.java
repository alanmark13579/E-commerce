package com.sideproject.ecommerce.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;

@Getter
@Setter
@Builder
public class ProductDto {
    private Long id;
    private String name;
    private String category;
    private BigDecimal price;
    private int remainNumber;
    private String imageUrl;
}
