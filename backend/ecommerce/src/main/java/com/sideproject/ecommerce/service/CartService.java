package com.sideproject.ecommerce.service;

import com.sideproject.ecommerce.model.*;
import com.sideproject.ecommerce.repository.CartRepository;
import com.sideproject.ecommerce.repository.UserRepository;
import com.sideproject.ecommerce.repository.ProductRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Map;
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
