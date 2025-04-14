package com.sideproject.ecommerce.dto;

import com.sideproject.ecommerce.model.ProductImages;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

import java.math.BigDecimal;
import java.util.List;

@Getter
@Setter
public class ProductDto {
    private Long id;
    private String name;
    private String category;
    private BigDecimal price;
    private int remain_number;
    private String imageUrl;
}
