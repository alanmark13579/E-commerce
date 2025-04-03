package com.sideproject.ecommerce.model;



import jakarta.persistence.*;

@Entity
@Table(name = "users")
public class Users {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "email")
    private String email;

    @Column(name = "account")
    private String account;

    @Column(name = "password")
    private String password;

    public Long getId() { return id; }
    public String getName() { return name; }
    public String getEmail() { return email; }
    public String getAccount() { return account; }
    public String getPassword() { return password; }

    public void setId(Long id) { this.id = id; }
    public void setName(String name) { this.name = name; }
    public void setEmail(String email) { this.email = email; }
    public void setAccount(String account) { this.account = account; }
    public void setPassword(String password) { this.password = password; }
}
