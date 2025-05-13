package com.sideproject.ecommerce.service;

import com.sideproject.ecommerce.model.*;
import com.sideproject.ecommerce.repository.CartRepository;
import com.sideproject.ecommerce.repository.UserRepository;
import com.sideproject.ecommerce.repository.ProductRepository;
import com.sideproject.ecommerce.dto.CartDto;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class CartService {
    private final CartRepository cartRepository;
    private final UserRepository userRepository;
    private final ProductRepository productRepository;

    @Autowired
    public CartService(CartRepository cartRepository, UserRepository userRepository, ProductRepository productRepository){
        this.cartRepository = cartRepository;
        this.userRepository = userRepository;
        this.productRepository = productRepository;
    }

    public List<CartDto> getCart(Long userId) {
        Cart cart = cartRepository.findByUserId(userId)
                .orElseGet(() -> {
                    Cart newCart = new Cart();
                    User user = userRepository.findById(userId)
                            .orElseThrow(() -> new RuntimeException("User not found"));
                    newCart.setUser(user);
                    return cartRepository.save(newCart);
                });


        List<CartDto> cartItems = cart.getItems().stream()
                .map(item -> new CartDto(
                        item.getProduct().getId(),
                        item.getProduct().getName(),
                        item.getProduct().getPrice(),
                        item.getProduct().getRemainNumber(),
                        item.getQuantity(),
                        item.getProduct().getImages().stream()
                                .map(ProductImage::getImageUrl)
                                .findFirst()
                                .orElseThrow(() -> new RuntimeException("Image not found"))
                ))
                .collect(Collectors.toList());

        return cartItems;
    }

    @Transactional
    public void addProductToCart(Long userId, CartItemUpdateRequest request) {
        Cart cart = cartRepository.findByUserId(userId)
                .orElseGet(() -> {
                    Cart newCart = new Cart();
                    User user = userRepository.findById(userId)
                            .orElseThrow(() -> new RuntimeException("User not found"));
                    newCart.setUser(user);
                    return newCart;
                });

        List<CartItem> existingItems = cart.getItems();
        Product product = productRepository.findById(request.getProductId())
                .orElseThrow(() -> new RuntimeException("Product not found"));

        Optional<CartItem> existingItemOpt = existingItems.stream()
                .filter(item -> item.getProduct().getId().equals(product.getId()))
                .findFirst();

        // Update and Add Product
        if (existingItemOpt.isPresent()) {
            CartItem existingItem = existingItemOpt.get();
            existingItem.setQuantity(existingItem.getQuantity() + request.getQuantity());
        } else {
            CartItem newItem = new CartItem();
            newItem.setProduct(product);
            newItem.setQuantity(request.getQuantity());
            newItem.setCart(cart);
            existingItems.add(newItem);
        }

        cartRepository.save(cart);
    }

    @Transactional
    public void updateCart(Long userId, CartUpdateRequest request) {
        Cart cart = cartRepository.findByUserId(userId)
                .orElseThrow(() -> new IllegalStateException("Cart not found"));

        Map<Long, Integer> incomingMap = request.getItems().stream()
                .collect(Collectors.toMap(CartItemUpdateRequest::getProductId, CartItemUpdateRequest::getQuantity));

        List<CartItem> existingItems = cart.getItems();

        // Update and Delete Product
        existingItems.removeIf(item -> {
            Long productId = item.getProduct().getId();
            Integer newQuantity = incomingMap.get(productId);

            if (newQuantity == null) return false;

            if (newQuantity == 0) {
                return true;
            } else {
                item.setQuantity(newQuantity);
                incomingMap.remove(productId);
                return false;
            }
        });

        cartRepository.save(cart);
    }
}
