package com.sideproject.ecommerce.model;



import jakarta.persistence.*;

@Entity
@Table(name = "users") // 確保與資料庫的 Table 名稱一致（小寫）
public class Users {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name") // 修改為小寫
    private String name;

    @Column(name = "email") // 修改為小寫
    private String email;

    @Column(name = "account") // 修改為小寫
    private String account;

    @Column(name = "password") // 修改為小寫
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
