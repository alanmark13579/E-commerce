package com.sideproject.ecommerce.mapper;

import com.sideproject.ecommerce.dto.ProductDto;
import com.sideproject.ecommerce.model.Product;
import com.sideproject.ecommerce.model.ProductImage;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Named;
import org.mapstruct.factory.Mappers;

import java.util.List;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring")
public interface ProductMapper {
    ProductMapper INSTANCE = Mappers.getMapper(ProductMapper.class);

    @Mapping(target = "imageUrl", source = "images", qualifiedByName = "mapImagesToUrls")
    ProductDto toDto(Product product);

    @Named("mapImagesToUrls")
    static String mapImagesToUrls(List<ProductImage> images) {
        return images.stream()
                .map(ProductImage::getImageUrl)
                .collect(Collectors.joining(","));
    }
}