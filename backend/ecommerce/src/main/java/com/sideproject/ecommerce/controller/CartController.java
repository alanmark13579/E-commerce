package com.sideproject.ecommerce.controller;

import com.sideproject.ecommerce.model.CartItemUpdateRequest;
import com.sideproject.ecommerce.model.CartUpdateRequest;
import com.sideproject.ecommerce.model.UserPrincipal;
import com.sideproject.ecommerce.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/cart")
public class CartController {
    private final CartService cartService;

    @Autowired
    public CartController(CartService cartService) {
        this.cartService = cartService;
    }

    @PostMapping("/update")
    public ResponseEntity<?> updateCart(@AuthenticationPrincipal UserPrincipal user,
                                        @RequestBody CartUpdateRequest items) {
        cartService.updateCart(user.getId(), items);
        return ResponseEntity.ok("Update Success");
    }

    @PostMapping("/addProduct")
    public ResponseEntity<?> addProductToCart(@AuthenticationPrincipal UserPrincipal user,
                                        @RequestBody CartItemUpdateRequest items) {
        cartService.addProductToCart(user.getId(), items);
        return ResponseEntity.ok("Add Success");
    }

    @GetMapping
    public ResponseEntity<?> getCart(@AuthenticationPrincipal UserPrincipal user) {
        return ResponseEntity.ok( cartService.getCart(user.getId()));
    }
}
