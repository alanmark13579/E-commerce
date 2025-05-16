package com.sideproject.ecommerce.dto;

import lombok.*;

import java.math.BigDecimal;

@Getter
@Setter
@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ProductDto {
    private Long id;
    private String name;
    private String category;
    private BigDecimal price;
    private int remainNumber;
    private String imageUrl;
}
